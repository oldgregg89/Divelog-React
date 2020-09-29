import React from "react";
import { connect } from "react-redux"
import PropTypes from "prop-types"
import DiveLogList from "./DiveLogList"
import NewDiveLogForm from "./NewDiveLogForm"
import DiveLogDetail from "./DiveLogDetail"

class DiveLogControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormSwitch: false,
      SelectedItem: null,
      editing: false
    }
  }

  handleAddNewLog = (newLog) => {
    const { dispatch } = this.props;
    const { id, location, date, time, time2, time3, time4, depth, depth2, depth3, depth4, notes } = newLog;
    const action = {
      type: 'ADD_LOG',
      id: id,
      location: location,
      date: date,
      time: time,
      time2: time2,
      time3: time3,
      time4: time4,
      depth: depth,
      depth2: depth2,
      depth3: depth3,
      depth4: depth4,
      notes: notes
    }
    dispatch(action);
    this.setState({FormSwitch: false});
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

  handleEditLog = (logToEdit) => {
    const { dispatch } = this.props;
    const { id, location, date, time, time2, time3, time4, depth, depth2, depth3, depth4, notes } = logToEdit;
    const action = {
      type: 'ADD_LOG',
      id: id,
      location: location,
      date: date,
      time: time,
      time2: time2,
      time3: time3,
      time4: time4,
      depth: depth,
      depth2: depth2,
      depth3: depth3,
      depth4: depth4,
      notes: notes
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
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
      selectedTicket: null
    });
  }

  handleDeleteLog = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_LOG',
      id: id
    }
    dispatch(action);
    this.setState({SelectedItem: null});
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
    const selectedLog = this.props.LogList[id];
    this.setState({SelectedItem: selectedLog});
  }

  handleChangeSelectedLocation = (id) => {
    const selectedLocation = this.props.LocationList[id];
    this.setState({SelectedItem: selectedLocation});
  }

  handleClick = () => {
    if (this.state.SelectedItem != null) {  // Might need to refactor this line because why set SelectedItem back to null??
      this.setState({
        FormSwitch: false,
        SelectedItem: null
      });
    } else {
      this.setState(prevState => ({
        FormSwitch: !prevState.FormSwitch
      }));
    }
  }

  render() {
    let CurrentVisibleState = null;
    let buttonText = null;
    if (FormSwitch === true) {
      CurrentVisibleState = <NewDiveLogForm></NewDiveLogForm>
      buttonText = "add new log"
    } else if (SelectedItem !== null) {
      CurrentlyVisibleState = <DiveLogDetail diveLog={SelectedItem} onClickingEdit={this.handleEditLog}></DiveLogDetail>
      buttonText = "return"
    } else {
      CurrentVisibleState = <DiveLogList LogList={this.props.LogList} onClickingDelete={this.handleDeleteLog} onDiveLogSelection={this.handleChangeSelectedLog}></DiveLogList>
    }
    return (
      <React.Fragment>
        {CurrentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
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
    LocationList: state.LocationList
  }
}

DiveLogControl = connect(mapStateToProps)(DiveLogControl)
export default DiveLogControl