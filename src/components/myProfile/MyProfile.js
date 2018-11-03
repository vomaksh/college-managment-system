import React, { Component } from 'react';
import axios from 'axios';
import Preloader from '../preloader/Preloader';
import { Card, Icon, Image, Tab, Table } from 'semantic-ui-react';

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
      tabsData: []
    }
  }
  componentDidMount = () => {
    window.M.AutoInit();
    axios.get("http://localhost:5000/nit-hackathon/us-central1/fetchResults").then(response => {
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
            marginTop: "50%",
            marginBottom: "50%"
          }}>
            <Preloader />
          </div>
          :
          <div style={{
            marginTop: "20px"
          }}>
            <Card className="col s12" centered={true}>
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
