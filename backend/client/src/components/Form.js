import React, { useState } from "react";
import PersonalDetails from './PersonalDetails';
import BussinessDetails from './BussinessDetails';
import LoanApplicationDetails from './LoanApplicationDetails'
import Submission from "./Submission";

const Form = () => {
    const [activeTab , setActiveTab] = useState(0)
    const [formSubmission , setFormSubmission] = useState(false)
    const [formData , setFormData] = useState(
        {
            first_name: '',
            last_name:'',
            user_email:'',
            bussiness_name:'',
            address:'',
            gst_no:0,
            loan_amount:0,
            interest_rate:0,
            loan_tenure:0
        }
    )

    const tabDisplay = () =>{
        switch(activeTab){
            case 0 :
                return <PersonalDetails 
                    formData={formData} 
                    setFormData={setFormData} 
                    setActiveTab={setActiveTab}/>
            case 1 :
                return <BussinessDetails 
                    formData={formData} 
                    setFormData={setFormData} 
                    setActiveTab={setActiveTab}/>
            case 2 :
                return <LoanApplicationDetails 
                    formData={formData} 
                    setFormData={setFormData} 
                    setFormSubmission={setFormSubmission}/>
            default:
                return
        }
    }
  return (
    <div>
        {formSubmission ? <Submission formData={formData}/> 
            :
            <div className="form-container">
                <h1>Loan Application</h1>
                <ul className="nav nav-tabs">
                    <li className={activeTab === 0 ? 'active nav-item nav-link' : 'nav-item nav-link'}>
                        Step 1
                    </li>
                    <li className={activeTab === 1 ? 'active nav-item nav-link' : 'nav-item nav-link'}>
                        Step 2
                    </li>
                    <li className={activeTab === 2 ? 'active nav-item nav-link' : 'nav-item nav-link'}>
                        Step 3
                    </li>
                </ul>
                <div className="form-output">
                    {tabDisplay()}
                </div>
            </div>
        }
    </div>
  )
}

export default Form