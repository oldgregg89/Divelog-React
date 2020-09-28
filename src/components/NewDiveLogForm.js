import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewDiveLogForm(props){

  function handleNewDiveLogFormSubmission(event) {
    event.preventDefault();
    props.onNewDiveLogCreation({location: event.target.location.value, depth: event.target.depth.value, date: event.target.date.value, time: event.target.time.value, depth2: event.target.depth2.value, time2: event.target.time2.value, depth3: event.target.depth3.value, time3: event.target.time3.value, depth4: event.target.depth4.value, time4: event.target.time4.value, notes: event.target.notes.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewFormSubmission}
      buttonText="Add Dive Log!" />
    </React.Fragment>
  );
}

NewDiveLogForm.propTypes = {
  onNewDiveLogCreation: PropTypes.func
};

export default NewDiveLogForm;