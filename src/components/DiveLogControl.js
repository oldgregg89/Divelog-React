import React from "react";
import { connect } from "react-redux"
import PropTypes from "prop-types"

class DiveLogControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormSwitch: false,
      SelectedItem: false,
      editing: false
    }
  }

  handleAddNewLog = (newLog) => {
    const { dispatch } = this.props;
    const { id } = newLog;
    const action = {
      type: 'ADD_LOG',
      id: id,
      //fill the rest in
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
    const { id } = logToEdit;
    const action = {
      type: 'ADD_LOG',
      id: id,
      //fill the rest in
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