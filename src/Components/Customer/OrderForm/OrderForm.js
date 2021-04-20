import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import './OrderForm.css'

const OrderForm = () => {
    const { orderId } = useParams()
    const [services, setServices] = useState([])
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()

    useEffect(() => {
        fetch('https://calm-refuge-54103.herokuapp.com/services')
            .then(response => response.json())
            .then(data => {
                const serviceName = data.find(service => service._id === orderId)
                setServices(serviceName)
            })
    }, [])

    const onSubmit = data => {
        const orderDetails = {
            ...loggedInUser,
            name: data.name,
            email: data.email,
            service: data.service,
            description: data.description,
            price: data.price,
            status:'Pending',
            time: new Date()
        }


        fetch('https://calm-refuge-54103.herokuapp.com/singleOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Order Placed Successfully')
                    history.push(`/customer/${orderId}`)
                }
            })
            .catch((error) => {
                alert('Try Again')
            });
    }

    return (
        <div style={{ backgroundColor: '#fff', height: '100vh' }}>
            <div className='container' >
                <div className="row">
                    <div className="col-md-10">
                        <div className="d-flex justify-content-between pt-5">
                            <h2>Services List</h2>
                            <div className="d-flex">
                                <img src={loggedInUser.photoURL} alt="" style={{ height: '30px', width: '30px', borderRadius: '50%' }} />
                                <h5>{loggedInUser.name}</h5>
                            </div>
                        </div>
                        <div className='mt-3 p-5' style={{ backgroundColor: 'aliceblue', borderRadius: '20px' }}>

                        <form className="addOrder" onSubmit={handleSubmit(onSubmit)}>
                           
                           <label >Name</label>
                           <input name="name" ref={register({ required: true })} defaultValue={loggedInUser.name} />
                           {errors.name && <span className="error">Name is required</span>}                              
                           <label >Email</label>
                           <input name="email" ref={register({ required: true })} defaultValue={loggedInUser.email} />                
                           <label >Package Title</label>
                           <input name="service" ref={register({ required: true })} defaultValue={services.title} placeholder="loading..." />                               
                           <label >Package details</label>
                           <input name="description" className="project-details" ref={register({ required: true })} defaultValue={services.description} placeholder="loading..."  />
                           {errors.details && <span className="error">Project Details is required</span>}                                
                           <label >Package Price</label>
                           <input name="price" className="mb-3" ref={register({ required: true, pattern: /^[0-9]/ })}defaultValue={services.price}  placeholder="loading..."  />
                           {errors.price && <span className="error">valid price is required</span>}
                           
                           <button className="btn btn-primary mt-2" type="submit">Send</button>
                       </form>
                   </div>
                    <h2>Please Pay for me</h2>
                  <ProcessPayment ></ProcessPayment>
               </div>
           </div>
       </div>
   </div >
 
);
};

export default OrderForm;