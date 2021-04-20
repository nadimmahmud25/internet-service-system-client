import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';


const Customer = () => {

    window.scrollTo(0, 0);    
    const { serviceId } = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (

        <div style={{ backgroundColor: 'aliceblue' }}>
            <div className="container" >
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar serviceId={serviceId} loggedInUser={loggedInUser}></Sidebar>
                    </div>

                    <div className="col-md-10">
                        <img className='img-fluid' src="https://i.ibb.co/sq1cmrF/College-student-dorm-interior-Young-travelers-stopping-in-hostel-Vector-illustration-for-alternative.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Customer;