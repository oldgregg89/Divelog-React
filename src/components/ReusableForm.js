import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control
            type='text'
            name='location'
            placeholder='Location.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='depth'
            placeholder='Depth.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='date'
            placeholder='Date.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='time'
            placeholder='Time.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='depth2'
            placeholder='Depth2.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='time2'
            placeholder='Time2.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='depth3'
            placeholder='Depth3.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='time3'
            placeholder='Time3.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='depth4'
            placeholder='Depth4.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='time4'
            placeholder='Time4.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='notes'
            placeholder='Notes.' />
        </Form.Group>
        <div style={{padding: 10}}>
          <Button variant="info" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
