import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const BussinessDetails = ({setActiveTab , formData , setFormData}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setActiveTab((currTab) => currTab + 1)
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Bussiness Details</h3>
      <div className="col-md-6 offset-md-3">
        <Form.Group className="form-group" controlId="bussiness_name">
          <Form.Label>Bussiness Name</Form.Label>
          <Form.Control
            type="text"
            name="bussiness_name"
            placeholder="Enter your Bussiness name"
            autoComplete="off"
            onChange={(e) => {
              setFormData({ ...formData, bussiness_name: e.target.value });
            }}
            ref={register({
              required: 'Bussiness is required.',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'First name should contain only characters.'
              }
            })}
            className={`${errors.bussiness_name ? 'input-error' : ''}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.bussiness_name.message}</p>
          )}
        </Form.Group>

        <Form.Group className="form-group" controlId="gst_no">
          <Form.Label>GST number</Form.Label>
          <Form.Control
            type="number"
            name="gst_no"
            placeholder="Enter your GST number"
            autoComplete="off"
            onChange={(e) => {
              setFormData({ ...formData, gst_no: e.target.value });
            }}
            ref={register({
              required: 'GST number is required.',
              pattern: {
                value: /^[0-9]+$/,
                message: 'GST number should contain only numbers.'
              }
            })}
            className={`${errors.gst_no ? 'input-error' : ''}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.gst_no.message}</p>
          )}
        </Form.Group>
    
        <Form.Group className="form-group" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter your address"
            autoComplete="off"
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
            }}
            ref={register({
              required: 'Address is required.',
              pattern: {
                message: 'Address is not valid.'
              }
            })}
            className={`${errors.address ? 'input-error' : ''}`}
          />
          {errors.user_email && (
            <p className="errorMsg">{errors.address.message}</p>
          )}
        </Form.Group>

        <Button variant="secondary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default BussinessDetails;