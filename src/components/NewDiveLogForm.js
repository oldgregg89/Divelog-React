import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewDiveLogForm(props){
  const firestore = useFirestore();

  function addDiveLogToFirestore(event){
    event.preventDefault();
    props.onNewDiveLogCreation();


      return firestore.collection('diveLog').add ({

        location: event.target.location.value, 
        depth: event.target.depth.value, 
        date: event.target.date.value, time: event.target.time.value, 
        depth2: event.target.depth2.value, 
        time2: event.target.time2.value, 
        depth3: event.target.depth3.value, 
        time3: event.target.time3.value, 
        depth4: event.target.depth4.value, 
        time4: event.target.time4.value, 
        notes: event.target.notes.value, 
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={addDiveLogToFirestore}
      diveLog={null}
      buttonText="Add Dive Log!" />
    </React.Fragment>
  );
}

NewDiveLogForm.propTypes = {
  onNewDiveLogCreation: PropTypes.func
};

export default NewDiveLogForm;