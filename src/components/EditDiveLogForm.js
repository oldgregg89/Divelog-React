import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditDiveLogForm(props){
  const { diveLog } = props
    event.preventDefault();
    const firestore = useFirestore();
    function handleEditDiveLogFormSubmission(event) {
      props.onEditDiveLog();
      const propertiesToUpdate = {
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
      return firestore.update({collection: "diveLog", doc: diveLog.id}, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditDiveLogFormSubmission}
        diveLog={diveLog}
        buttonText="Update" />
    </React.Fragment>
  );
}

EditDiveLogForm.propTypes = {
  onEditDiveLog: PropTypes.func
};

export default EditDiveLogForm;