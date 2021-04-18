import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ShowList from './ShowList';
import CircularProgress from '@material-ui/core/CircularProgress';

const ServiceList = ({checkedEmail}) => {
    // const [loggedInUser]=useContext(UserContext);
    // console.log(checkedEmail);
    const [userServices, setUserServices] = useState([]);
    useEffect(() =>{
        // console.log(checkedEmail);
        fetch(`https://calm-refuge-54103.herokuapp.com/clients/email?checkedEmail=${checkedEmail}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setUserServices(data);
        })
    },[checkedEmail]);
    return (
        <div className="text-center">
            {/* <h2>Service List: {userServices.length}</h2> */}
            <div className="row justify-content-center">
                {
                    !userServices.length && <div className='text-center'>
                            <CircularProgress color="secondary" /> 
                            <h2 style={{color: '#DC004E', }}>loading....</h2>
                        </div>
                }
                {
                    userServices.map(service => <ShowList key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default ServiceList;