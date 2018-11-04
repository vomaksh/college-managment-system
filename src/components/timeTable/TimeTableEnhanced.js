import React, { Component , Fragment } from "react";
import TimeTableCard from "../timeTableCard/TimeTableCard";
import fire from "../../config/fire";
import Preloader from "../preloader/Preloader";

const db = fire.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default class TimeTableEnhanced extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeTable: [],
      loading: true
    }
  }
  componentDidMount = () => {
    db.collection("timeTable").doc("ece").collection("sem1")
      .doc("tuesday").collection("0").orderBy("id")
      .onSnapshot(querySnapshot => {
        this.setState({
          timeTable: [],
          loading: false
        })
        querySnapshot.forEach(doc => {
          this.setState({
            timeTable: [...this.state.timeTable, doc.data()]
          })
        })
      })
  }
  render() {
    return (
      <div className="center-align" style={{
        marginTop: "10px",
        height: "100%"
      }}>
        {
          this.state.loading ?
          <div style={{
            height: "100%",
            width: "100%",
            marginLeft: "0%",
            marginTop: "10%",
            marginBottom: "40%"
          }}>
            <Preloader />
          </div>
          :
          this.state.timeTable.map((item, index) => {
            if(index === 0){
              return <TimeTableCard subject={item.subject} time={item.time} task={item.task} />
            } else {
              return (<Fragment>
                <i class="fas fa-arrow-down white-text" style={{
                  fontSize: "45px"
                }}></i>
                <TimeTableCard subject={item.subject} time={item.time} task={item.task} />
              </Fragment>)
            }
          })
        }
      </div>
    );
  }
}
