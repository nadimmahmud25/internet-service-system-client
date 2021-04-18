import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const WithUs = () => {
    const [loggedInUser,setLoggedInUser,user] = useContext(UserContext);
    if(false){
        console.log(loggedInUser && setLoggedInUser);
    }
    return (
        <section className="btn btn-primary col-md-12 col-sm-12 col-xs-12 m-12" >
        <h2> 20,000+ People trusted UltraNET! Be one of theme today <Link to={`/user/${user.title ? "admin" : "contact_us_for_internet_package"}`} style={{width: '200px'}} className='btn btn-dark'>Getting Started Now</Link></h2>           
        </section>
    );
};

export default WithUs;