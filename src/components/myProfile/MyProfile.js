import React, { Component } from 'react';
import axios from 'axios';
import Preloader from '../preloader/Preloader';
import { Card, Icon, Image, Tab, Table, Label} from 'semantic-ui-react';
import fire from "../../config/fire";

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
})

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      college: '',
      results: [],
      rollNumber: '',
      course: '',
      loading: true,
      tabsData: [],
      issuedBooks: []
    }
  }
  componentDidMount = () => {
    window.M.AutoInit();
    db.collection('students').where("rollNumber", "==", localStorage.getItem("rollNumber")).get().then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data(), "in my profile.js")
        this.setState({
          issuedBooks: doc.data().issuedBooks.books
        })
      })
    })
    axios.get("http://localhost:5000/nit-hackathon/us-central1/fetchResults?rollNumber=" + localStorage.getItem("rollNumber")).then(response => {
      this.setState({
        results: response.data,
        name: response.data[0].Name,
        college: response.data[0].Institution,
        course: response.data[0].Programme,
        rollNumber: response.data[0].EnrollmentNumber,
        loading: false
      });
      this.state.results.forEach(result => {
        if(result.Examination.split(" ")[0] != "REAPPEAR") {
          let tabData = {};
        tabData.menuItem = result.Semester.split("")[1] + " SEM";
        tabData.render = () => {
          return <Tab.Pane attached={false}>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>Subjects</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {result.Marks.map(subject => (
                <Table.Row>
                  <Table.Cell>
                    <Icon name='folder' /> {subject.Name}
                  </Table.Cell>
                  <Table.Cell>{subject.Total}</Table.Cell>
                  <Table.Cell>{subject.Grade}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
      </Tab.Pane>
        }
        this.setState({
          tabsData: [...this.state.tabsData, tabData]
        })
        }
      })
    })
  }
  render() {
    return (
      <div className="center-align">
        {
          this.state.loading ?
          <div style={{
            height: "100%",
            width: "100%",
            marginTop: "20%",
            marginBottom: "50%"
          }}>
            <Preloader />
          </div>
          :
          <div style={{
            marginTop: "20px"
          }}>
              <Card centered={true}>
                <Image src='https://archive.is/NDuSS/a4d51edd60c66c8afba4cd6f01146212b2b464f9.png' />
                <Card.Content>
                  <Card.Header>{this.state.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{this.state.rollNumber}</span>
                  </Card.Meta>
                  <Card.Description>{this.state.course}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    {this.state.college}
                  </a>
                </Card.Content>
              </Card>
              <h2 className="center-aligned white-text">My Issued Library Books</h2>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>SI. No.</Table.HeaderCell>
                    <Table.HeaderCell>Book</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.issuedBooks.map((book, index) => {
                      if(book.delay) {
                        return <Table.Row error>
                          <Table.Cell>
                            <Label ribbon>{index + 1}</Label>
                          </Table.Cell>
                          <Table.Cell>{book.name}</Table.Cell>
                          <Table.Cell textAlign="center"><Icon name='attention' size='large' /></Table.Cell>
                        </Table.Row>  
                      } else {
                        return <Table.Row positive>
                          <Table.Cell>
                            <Label ribbon>{index + 1}</Label>
                          </Table.Cell>
                          <Table.Cell>{book.name}</Table.Cell>
                          <Table.Cell textAlign="center"><Icon name='checkmark' size='large' /></Table.Cell>
                        </Table.Row>   
                        }
                      }
                    )}
                </Table.Body>
              </Table>
            <div className="center-aligned white-text">
              <h2>Semester Results</h2>
              <Tab menu={{ pointing: true }} panes={this.state.tabsData} />
            </div>
          </div>
        }
      </div>
    )
  }
}
