import React from 'react';
import logo from '../../images/logos/logo.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Customer from './Customer/Customer';
import { Link, useParams } from 'react-router-dom';
import Admin from './Admin/Admin';

const User = () => {
    const [loggedInUser, setLoggedInUser, user,setUser] = useContext(UserContext);
    const userServiceKey = useParams();
    // console.log(userServiceKey,user);

    return (
        <div className="p-5">
            <Link to='/'>
                <img src={logo} className='m-2' style={{height: '50px'}} alt=""/>
            </Link>
            {
                user.title === "Admin"
                ? <Admin setLoggedInUser={setLoggedInUser} setUser={setUser}></Admin>
                : <Customer userServiceKey={userServiceKey.userServiceKey} loggedInUser={loggedInUser}></Customer>
            }
        </div>
    );
};

export default User;