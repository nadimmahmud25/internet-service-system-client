import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import ServiceListDetails from '../ServiceListDetails/ServiceListDetails';

const ServiceList = () => {

    const [orderedServices, setOrderedServices] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://calm-refuge-54103.herokuapp.com/order?email=' + loggedInUser.email)
            .then(response => response.json())
            .then(data => {
                setOrderedServices(data)
            })
    }, [])


    return (
        <div  style={{ backgroundColor: 'aliceblue' }}>
            <div className="container">
                <div className="row">
                    {
                        orderedServices.map(order => <ServiceListDetails key={order._id} order={order}></ServiceListDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceList;