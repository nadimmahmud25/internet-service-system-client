import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import headerImage from '../../../images/images/internet.jpg';
import './Header.css';
const Header = () => {
    const [loggedInUser,setLoggedInUser,user] = useContext(UserContext);
    if(false){
        console.log(loggedInUser && setLoggedInUser);
    }
    return (
        <header className="pt-5 row w-100 justify-content-around container-fluid">
            <div className="col-md-4 mr-5 col-xs-11 my-4 p-3">
                <h1 style={{fontWeight: '1000',width: '95%',fontFamily: 'Poppins'}}>Connect all your devices and access high speed Internet with ease</h1>
                <p>Praesent tincidunt porttitor libero, id sodales enim tincidunt id Nam efficitur ultrices sapien, ut sagittis mauris venenatis.</p>
                <Link to={`/user/${user.title ? "admin" : "contact_us_for_internet_package"}`} style={{width: '200px'}} className='btn btn-primary'>Getting Started Now</Link>
            </div>
            <div className="col-md-7 col-xs-12 pb-5 mb-4">
                <img className='img-fluid' src={headerImage} alt=""></img>
            </div>
        </header>
    );
};

export default Header;