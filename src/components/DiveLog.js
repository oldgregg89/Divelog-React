import React from "react";
import PropTypes from "prop-types";

function DiveLog(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenDiveLogClicked(props.id)}>
        <h3>{props.depth} - {props.location} - {props.date}-{props.time}</h3>
        <p><em>{props.time2}- {props.depth2}</em></p>
        <p><em>{props.time3}- {props.depth3}</em></p>
        <p><em>{props.time4}- {props.depth4}</em></p>
        <p><em>{props.notes}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

DiveLog.propTypes = {
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  depth: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  depth2: PropTypes.string,
  time2: PropTypes.string,
  depth3: PropTypes.string,
  time3: PropTypes.string,
  depth4: PropTypes.string,
  time4: PropTypes.string,
  notes: PropTypes.string,
  id: PropTypes.string,
  whenDiveLogClicked: PropTypes.func
};

export default DiveLog;