import React from "react";
import { connect } from "react-redux"
import PropTypes from "prop-types"
import DiveLogList from "./DiveLogList"
import NewDiveLogForm from "./NewDiveLogForm"
import DiveLogDetail from "./DiveLogDetail"
import EditDiveLogForm from "./EditDiveLogForm"
import * as c from '../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
// import button from "react-bootstrap/Button";


class DiveLogControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedItem: null,
      editing: false
    }
  }

  handleAddNewLog = (newLog) => {
    console.log("working")
    const { dispatch } = this.props;
    const action = c.toggleForm();
    dispatch(action);
    // const { dispatch } = this.props;
    // const { id, location, date, time, time2, time3, time4, depth, depth2, depth3, depth4, notes } = newLog;
    // const action = {
    //   type: 'ADD_LOG',
    //   id: id,
    //   location: location,
    //   date: date,
    //   time: time,
    //   time2: time2,
    //   time3: time3,
    //   time4: time4,
    //   depth: depth,
    //   depth2: depth2,
    //   depth3: depth3,
    //   depth4: depth4,
    //   notes: notes
    // }
    // dispatch(action);
    // this.setState({FormSwitch: false});
  }

  handleAddNewLocation = (newLocation) => {
    const { dispatch } = this.props;
    const { id } = newLocation;
    const action = {
      type: 'ADD_LOCATION',
      id: id,
      //fill the rest in
    }
    dispatch(action);
    this.setState({FormSwitch: false});
  }

  handleEditLog = () => {
    this.setState({
      editing: false,
      SelectedItem: null
    });
    // const { dispatch } = this.props;
    // const { id, location, date, time, time2, time3, time4, depth, depth2, depth3, depth4, notes } = logToEdit;
    // const action = {
    //   type: 'ADD_LOG',
    //   id: id,
    //   location: location,
    //   date: date,
    //   time: time,
    //   time2: time2,
    //   time3: time3,
    //   time4: time4,
    //   depth: depth,
    //   depth2: depth2,
    //   depth3: depth3,
    //   depth4: depth4,
    //   notes: notes
    // }
    // dispatch(action);
    // this.setState({
    //   editing: false,
    //   SelectedItem: null
    // });
  }

  handleEditLocation = (locationToEdit) => {
    const { dispatch } = this.props;
    const { id } = locationToEdit;
    const action = {
      type: 'ADD_LOCATION',
      id: id,
      //fill the rest in
    }
    dispatch(action);
    this.setState({
      editing: false,
      SelectedItem: null
    });
  }

  handleDeleteLog = (id) => {
    this.props.firestore.delete({collection: "diveLog", doc: id});
    this.setState({SelectedItem: null});
    // const { dispatch } = this.props;
    // const action = {
    //   type: 'DELETE_LOG',
    //   id: id
    // }
    // dispatch(action);
    // this.setState({SelectedItem: null});
  }

  handleDeleteLocation = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_LOCATION',
      id: id
    }
    dispatch(action);
    this.setState({SelectedItem: null});
  }

  handleChangeSelectedLog = (id) => {
    // const selectedLog = this.props.LogList[id];
    // this.setState({SelectedItem: selectedLog});
    this.props.firestore.get({collection:'diveLog',doc: id}).then((diveLog) => {
      const firestoreDiveLog = {
        location: diveLog.get("location"),
        date: diveLog.get("date"),
        depth: diveLog.get("depth"),
        time: diveLog.get("time"),
        depth2: diveLog.get("depth2"),
        time2: diveLog.get("time2"),
        depth3: diveLog.get("depth3"),
        time3: diveLog.get("time3"),
        depth4: diveLog.get("depth4"),
        time4: diveLog.get("time4"),
        notes: diveLog.get("notes"),
        id: diveLog.id
      }
      this.setState({SelectedItem: firestoreDiveLog });
    });
  }

  handleChangeSelectedLocation = (id) => {
    const selectedLocation = this.props.LocationList[id];
    this.setState({SelectedItem: selectedLocation});
  }

// switch view buttons

  handleClick = () => {
    if (this.state.SelectedItem != null) {  // Might need to refactor this line because why set SelectedItem back to null??
      this.setState({
        editing: false,
        SelectedItem: null
      });
    } else {
      const { dispatch } = this.props
      const action = c.toggleForm()
      dispatch(action)
    }
  }

  handleClickEdit = (id) => {
    this.setState({
      editing: true
    })
  }

  render() {
    let CurrentVisibleState = null;
    let buttonText = null;
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h3>You need to be signed in in order to view this queue</h3>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      if (this.state.editing) {
        CurrentVisibleState = <EditDiveLogForm onEditDiveLog={this.handleEditLog} diveLog={this.state.SelectedItem}></EditDiveLogForm>
        buttonText = "Placeholder"
      } else if (this.state.SelectedItem !== null) {
        CurrentVisibleState = <DiveLogDetail diveLog={this.state.SelectedItem} onClickingDelete={this.handleDeleteLog} onClickingEdit={this.handleClickEdit}></DiveLogDetail>
        buttonText = "return"
      } else if (this.props.FormSwitch) {
        CurrentVisibleState = <NewDiveLogForm onNewDiveLogCreation={this.handleAddNewLog}></NewDiveLogForm>
        buttonText = "return"
      }  else {
        CurrentVisibleState = <DiveLogList LogList={this.props.LogList} onDiveLogSelection={this.handleChangeSelectedLog}></DiveLogList>
        buttonText = "add dive log"
      }
    }
    return (
      <React.Fragment>
        {CurrentVisibleState}
        <button variant="primary" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

DiveLogControl.propTypes = {
  LogList: PropTypes.object,
  LocationList: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    LogList: state.LogList,
    LocationList: state.LocationList,
    FormSwitch: state.FormSwitch
  }
}

DiveLogControl = connect(mapStateToProps)(DiveLogControl)
export default withFirestore(DiveLogControl);