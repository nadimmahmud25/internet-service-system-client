import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceDetails from './ServiceDetails';
import CircularProgress from '@material-ui/core/CircularProgress';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setServices(data);
        })
        .catch(err => console.log(err))
    },[])
    return (
        <section className='text-center w-100 my-5'>
            <h2 className='my-5' style={{fontWeight: '600',fontFamily: 'Poppins'}}>Get Ready for Ultra  <span style={{color: '#7AB259'}}>Speed Internet</span></h2>
            <div className="row w-100 mx-auto justify-content-center">
                {
                    !services.length && <div className='text-center'>
                            <CircularProgress color="secondary" /> 
                            <h2 style={{color: '#DC004E', }}>loading....</h2>
                        </div>
                }
                {
                    services.map((service, idx) => <ServiceDetails key={idx} service={service}></ServiceDetails>)
                }
            </div>
        </section>
    );
};

export default Services;