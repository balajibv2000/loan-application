import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
const baseUrl = 'https://dygnify-loan-application.herokuapp.com/details'

const LoanApplicationDetails = ({formData , setFormData , setFormSubmission}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async () => {
    await axios.post(baseUrl , formData)
      .then((res) => {
        if(res.status === 204){
          setFormSubmission(true)
        } 
      })
      .catch((err) => console.log(`Error: ${err}`))
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Loan Application Details</h3>
      <div className="col-md-6 offset-md-3">
      <Form.Group className="form-group" controlId="loan_amount">
          <Form.Label>Loan amount</Form.Label>
          <Form.Control
            type="number"
            name="loan_amount"
            placeholder="Enter your Loan Amount"
            autoComplete="off"
            onChange={(e) => {
              setFormData({ ...formData, loan_amount: e.target.value });
            }}
            ref={register({
              required: 'Loan amount is required.',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Loan amount should contain only numbers.'
              }
            })}
            className={`${errors.loan_amount ? 'input-error' : ''}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.loan_amount.message}</p>
          )}
        </Form.Group>

        <Form.Group className="form-group" controlId="interest_rate">
          <Form.Label>Interest Rate (%)</Form.Label>
          <Form.Control
            type="number"
            name="interest_rate"
            placeholder="Enter your Interest Rate"
            autoComplete="off"
            onChange={(e) => {
              setFormData({ ...formData, interest_rate: e.target.value });
            }}
            ref={register({
              required: 'Loan amount is required.',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Interest Rate should be a number.'
              }
            })}
            className={`${errors.interest_rate ? 'input-error' : ''}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.interest_rate.message}</p>
          )}
        </Form.Group>

        <Form.Group className="form-group" controlId="loan_tenure">
          <Form.Label>Loan Tenure (years)</Form.Label>
          <Form.Control
            type="number"
            name="loan_tenure"
            placeholder="Enter your Loan Tenure "
            autoComplete="off"
            onChange={(e) => {
              setFormData({ ...formData, loan_tenure: e.target.value });
            }}
            ref={register({
              required: 'Loan Tenure  is required.',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Loan Tenure should be a number.'
              }
            })}
            className={`${errors.loan_tenure ? 'input-error' : ''}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.loan_tenure.message}</p>
          )}
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default LoanApplicationDetails;