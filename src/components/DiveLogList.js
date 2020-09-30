import React from "react";
import DiveLog from "./DiveLog";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded} from 'react-redux-firebase';

function DiveLogList(props){
  useFirestoreConnect([
    { collection: 'diveLog' }
  ]);

  const diveLogs = useSelector(state => state.firestore.ordered.diveLog);

  if (isLoaded(diveLogs)) {

    return (
      <React.Fragment>
        <hr/>
        {diveLogs.map((diveLog) => {
          return <DiveLog
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
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

DiveLogList.propTypes = {
  // LogList: PropTypes.object,
  onDiveLogSelection: PropTypes.func
};



export default DiveLogList;