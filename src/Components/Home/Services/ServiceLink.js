import React from 'react';
import { Link } from 'react-router-dom';
const serviceStyle = {
    textDecoration: 'none',
    fontFamily: 'Poppins'
}
const ServiceLink = ({service}) => {
    return (
        <Link to={`/user/${service._id}`} className='text-center' style={serviceStyle}>
            <img className='img-fluid  mx-auto my-3'style={{ height: '80px', width: '80px', margin: '0 auto' }} src={`data:image/png;base64,${service.image.img}`} alt=""/>
            <h5 className='text-info'>{service.title}</h5>
            <h5 className='text-danger'>Price:BDT{service.price}  Per Month</h5>
            <small className='text-dark'>{service.description}</small>
        </Link>
    );
};

export default ServiceLink;