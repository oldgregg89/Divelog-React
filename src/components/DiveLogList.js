import React from "react";
import DiveLog from "./DiveLog";
import PropTypes from "prop-types";

function DiveLogList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.LogList.map((diveLog) =>
        <DiveLog
        whenDiveLogClicked = { props.onDiveLogSelection }
        location={diveLog.location}
        date={diveLog.date}
        time={diveLog.time}
        depth={diveLog.depth}
        depth2={diveLog.depth2}
        time2={diveLog.time2}
        depth3={diveLog.depth3}
        time3={diveLog.time3}
        depth4={diveLog.depth4}
        time4={diveLog.time4}
        notes={diveLog.notes}
        id={diveLog.id}
        key={diveLog.id} />
      )}
    </React.Fragment>
  );
}

DiveLogList.propTypes = {
  diveLogList: PropTypes.array,
  onDiveLogSelection: PropTypes.func
};



export default DiveLogList;