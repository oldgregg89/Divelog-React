import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function DiveLogDetail(props){
  return (
    <React.Fragment>
      <h1><strong>Dive Log</strong></h1>
      <h3><strong>Location: </strong>{props.diveLog.location}</h3>
      <p><em><strong>Date of Dive:</strong>{props.diveLog.date}</em></p>
      <p><em><strong>Depth of first dive:</strong>{props.diveLog.depth}ft</em></p>
      <p><em><strong>Time under water for first dive:</strong>{props.diveLog.time}hr</em></p>
      <p><em><strong>Depth of second dive:</strong>{props.diveLog.depth2}ft</em></p>
      <p><em><strong>Time under water for second dive:</strong>{props.diveLog.time2}hr</em></p>
      <p><em><strong>Depth of third dive:</strong>{props.diveLog.depth3}ft</em></p>
      <p><em><strong>Time under water for third dive:</strong>{props.diveLog.time3}hr</em></p>
      <p><em><strong>Depth of fourth dive:</strong>{props.diveLog.depth4}ft</em></p>
      <p><em><strong>Time under water for fourth dive:</strong>{props.diveLog.time4}hr</em></p>
      <p><em><strong>Notes on Dive:</strong>{props.diveLog.notes}</em></p>

      <Button style={{margin: 10}} variant="success" onClick={ props.onClickingEdit }>Edit Dive</Button>
      <Button variant="danger" onClick={() => props.onClickingDelete(props.diveLog.id) }>Delete Dive Log</Button>
      <hr/>
    </React.Fragment>
  );
}

DiveLogDetail.propTypes = {
  diveLog: PropTypes.object,
  onClickingDelete: PropTypes.func,
};

export default DiveLogDetail;