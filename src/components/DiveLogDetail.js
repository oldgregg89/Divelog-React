import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function DiveLogDetail(props){
  return (
    <React.Fragment>
      <h1>Dive Log</h1>
      <h3>Location: {diveLog.location}</h3>
      <p><em>Date of Dive:{diveLog.date}%</em></p>
      <p><em>Depth of first dive:{diveLog.depth}</em></p>
      <p><em>Time under water for first dive:{diveLog.time}</em></p>
      <p><em>Depth of second dive:{diveLog.depth2}</em></p>
      <p><em>Time under water for first dive:{diveLog.time2}</em></p>
      <p><em>Depth of third dive:{diveLog.depth3}</em></p>
      <p><em>Time under water for first dive:{diveLog.time3}</em></p>
      <p><em>Depth of first dive:{diveLog.depth4}</em></p>
      <p><em>Time under water for first dive:{diveLog.time4}</em></p>
      <p><em>Notes on Dive: {diveLog.notes}</em></p>

      <Button style={{margin: 10}} variant="success" onClick={ props.onClickingEdit }>Edit Dive</Button>
      <Button variant="danger" onClick={() => onClickingDelete(diveLog.id) }>Delete Dive Log</Button>
      <hr/>
    </React.Fragment>
  );
}

DiveLogDetail.propTypes = {
  diveLog: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default DiveLogDetail;