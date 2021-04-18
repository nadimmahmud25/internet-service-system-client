import React, { useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';

const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://calm-refuge-54103.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
               
            })
    }, [])
    const deleteService = (_id) => {
        fetch(`https://calm-refuge-54103.herokuapp.com/deleteService/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const remaining = services.filter(service => service._id !== _id);
                     setServices(remaining);

            })
    }
    return (
        <div className='bg-white rounded p-2 table-form'>
        {
            !services.length ? <div className='text-center my-5'>
                        <CircularProgress color="secondary" />
                        <h2 style={{color: '#DC004E', }}>loading....</h2>
                    </div>
        
        : <table className="table table-borderless">
            <thead className='bg-light'>
                <tr>
                    <th className="text-secondary" scope="col"> Admin Email</th>                   
                    <th className="text-secondary" scope="col">Service </th>
                    <th className="text-secondary" scope="col">Price</th>
                    <th className="text-secondary" scope="col">Details</th>
                    <th className="text-secondary" scope="col">Delete</th>
                    
                    
                </tr>
            </thead>
            <tbody>
            {
              services.map((service) => <tr key={service._id}>
                    <td>{service.adminEmail}</td>
                    <td>{service.title}</td>
                    <td>{service.price}</td>
                    <td>{service.description}</td>                  
                <td><DeleteIcon style={{color:'red', cursor: 'pointer'}} onClick={() => deleteService(service._id)}/></td>
                        
                        </tr>
                        )
                    }
                </tbody>
            </table>
            }
        </div>
        );
    };

export default ManageService;