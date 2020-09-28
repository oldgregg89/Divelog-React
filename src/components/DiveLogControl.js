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
    const action
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

const mapStateToProps = (state) => {
  return {
    LogList: state.LogList,
    LocationList: state.LocationList
  }
}

DiveLogControl = connect(mapStateToProps)(DiveLogControl)
export default DiveLogControl