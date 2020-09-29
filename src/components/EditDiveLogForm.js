import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditDiveLogForm(props){
  const {divelog} = props;
  function handleEditDiveLogFormSubmission(event){
    event.preventDefault();
    props.onEditDiveLog({location: event.target.location.value, depth: event.target.depth.value, date: event.target.date.value, time: event.target.time.value, depth2: event.target.depth2.value, time2: event.target.time2.value, depth3: event.target.depth3.value, time3: event.target.time3.value, depth4: event.target.depth4.value, time4: event.target.time4.value, notes: event.target.notes.value, id: divelog.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditDiveLogFormSubmission}
        buttonText="Update" />
    </React.Fragment>
  );
}

EditDiveLogForm.propTypes = {
  onEditDiveLog: PropTypes.func
};

export default EditDiveLogForm;