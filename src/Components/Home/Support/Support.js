import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import headerImage from '../../../images/images/Support.jpg';

const Support = () => {
    const [loggedInUser,setLoggedInUser,user] = useContext(UserContext);
    return (
        <section className="row w-100 mx-auto justify-content-center px-5 pt-5 pb-2">
             <div className="col-md-5">
                <h1 style={{fontWeight: '1000',width: '95%',fontFamily: 'Poppins'}}>24 x 7 dedicated Technical Support for connection problem</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia voluptates quos sequi, voluptatibus tempora accusantium!</p>
                <Link  to="/hire" className='btn btn-primary'>Getting Started Now</Link>
            </div>
            <div className="col-md-5">
                <img className='img-fluid' src={headerImage} alt=""></img>
            </div>
            
        </section>
    );
};

export default Support;