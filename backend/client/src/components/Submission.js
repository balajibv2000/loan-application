import axios from 'axios';
import { Card , Button , Col , Row} from "react-bootstrap"
import { useEffect } from "react"

const url = 'https://dygnify-loan-application.herokuapp.com/details'

const Submission = ({formData}) => {

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            console.log(res.data)
          })
          .catch((err) => console.log(`Error: ${err}`))
    } , []);

    function refreshPage() {
        window.location.reload(false);
    }

    return(
        <div className="container p-5">
            <Card className="text-center">
            <Card.Header as="h1" className='p-3'>Application Submitted</Card.Header>
            <Card.Body className='p-3'>
                <Card.Title>Your Details</Card.Title>
                <Card.Text>
                    <Row className="justify-content-md-center">
                        <Col md="auto" className="text-start">
                            <p>{`Name: ${formData.first_name} ${formData.last_name} `}</p>
                            <p>{`Email: ${formData.user_email}`}</p>
                            <p>{`Address: ${formData.address}`}</p>
                            <p>{`GST Number: ${formData.gst_no}`}</p>
                            <p>{`Loan Amount: ${formData.loan_amount}`}</p>
                            <p>{`Intrest Rate: ${formData.interest_rate}`}</p>
                            <p>{`Loan Tenure: ${formData.loan_tenure}`}</p>
                        </Col>
                    </Row>
                </Card.Text>
                <Button onClick={refreshPage} variant="primary">New Application</Button>
            </Card.Body>
            <Card.Footer className="text-muted p-3">Get all Applications <a href={url}>Here</a> or check the console</Card.Footer>
            </Card>
        </div>
    )
}

export default Submission