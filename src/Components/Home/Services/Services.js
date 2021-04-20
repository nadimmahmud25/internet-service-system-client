import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`https://calm-refuge-54103.herokuapp.com/services`)
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
                    services.map((service, idx) => <ServicesDetails key={idx} service={service}></ServicesDetails>)
                }
            </div>
        </section>
    );
};

export default Services;