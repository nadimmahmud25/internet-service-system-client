import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import ProcessPayment from '../../../ProcessPayment/ProcessPayment';
const OrderForm = ({handleSubmit,userServiceKey}) => {
    const [currentService, setCurrentService] = useState({});
    const [shippingData, setShippingData] = useState(null);
    useEffect(()=>{
        userServiceKey !== "customer" && userServiceKey !== "hire_us_for_your_service" && fetch(`http://localhost:5000/services/${userServiceKey}`)
        .then(res => res.json())
        .then(data => {
            // console.log(userServiceKey);
            // console.log(data);
            setCurrentService(data);
        })
        .catch(err => console.log(err))
    },[userServiceKey])
    
    return (
        <div className="row">
      <div style={{display: shippingData ? 'none': 'block'}} className="col-md-6">
        <form onSubmit={handleSubmit} className='w-50'>
            <div className="form-group">
                <input type="text" name='name' className='form-control' placeholder='Your name / company name' required/>
            </div>
            <div className="form-group">
                    <input type="text" name='email' className='form-control' placeholder='Your email address' required/>
            </div>
            <div className="form-group">
                <input type="text" name='projectTitle' defaultValue={currentService.name} className='form-control text-success' placeholder='Your project title' required/>
            </div>
            <div className="form-group">
                <textarea name="projectDetail" cols="30" rows="6" className='form-control' placeholder='Project details' required/>    
            </div>
            <div className="d-flex ">
                <input type="number" name='price' className="form-control w-50 mr-1" placeholder="Price" required/>
               
            </div>
            <div style={{display: shippingData ? 'block': 'none'}} className="col-md-6">
        <h2>Please Pay for me</h2>
        <ProcessPayment  ></ProcessPayment>
        </div>
            <input type="submit" className='btn btn-dark px-5' value="Send"/>
        </form>
        
        </div>
    </div>
     
    );
};

export default OrderForm;