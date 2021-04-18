import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import ProcessPayment from '../../../ProcessPayment/ProcessPayment';



const OrderForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState(null);

  const onSubmit = data => {
    setShippingData(data);
  };

  const handlePaymentSuccess = paymentId => {
    const orderDetails = { 
      ...loggedInUser, 
      shipment: shippingData, 
      paymentId,
      orderTime: new Date() 
    };

    fetch('https://calm-refuge-54103.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          // alert('your order placed successfully');
        }
      })
  }
    
    return (
        <div className="row">
       <div style={{display: shippingData ? 'none': 'block'}} className="col-md-6">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input type="text" name='name' className='form-control' defaultValue={loggedInUser.name} required/>
            </div>
            <div className="form-group">
                    <input type="text" name='email' className='form-control' defaultValue={loggedInUser.email} required/>
            </div>
            <div className="form-group">
                <input type="text" name='projectTitle'  className='form-control text-success' placeholder='Your project title' required/>
            </div>
            <div className="form-group">
                <textarea name="projectDetail" cols="30" rows="6" className='form-control' placeholder='Project details' required/>    
            </div>
            <div className="d-flex ">
                <input type="number" name='price' className="form-control w-50 mr-1" placeholder="Price" required/>
               
            </div>
            <input type="submit" className='btn btn-dark px-5' value="Send"/>
        </form>
        </div>
       
        <h2>Please Pay for me</h2>
    
        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>

      </div>
        
    );
};

export default OrderForm;