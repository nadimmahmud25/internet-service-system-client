import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../images/images/ispLG.png';
import { faShoppingCart, faCommentAlt, faPlus, faLocationArrow, faUserPlus, faShoppingBasket, faEdit } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const Sidebar = ({ serviceId }) => {

    window.scrollTo(0, 0);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://calm-refuge-54103.herokuapp.com/allAdmin')
            .then(response => response.json())
            .then(data => {
                const isAdmin = data.find(admin => admin.email === loggedInUser.email);
                if (isAdmin) {
                    setIsAdmin(true)
                }
            })
    }, [])


    return (

        <div>
           
            <div className='d-flex container'>
                <div className="sidebar mt-5 my-5" style={{ height: "100vh" }}>
                    <ul className="list-unstyled">
                    <Link to='/'>
                    <img src={logo} width="150" height="50" className="d-inline-block align-top" alt="home" />
                </Link>

                        {!isAdmin && <div className='d-flex'>

                            <div className='mr-2'>

                                <li>
                                    <Link to={`/order/${serviceId}`} className="text-dark">
                                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/serviceList" className="text-dark">
                                        <FontAwesomeIcon icon={faShoppingBasket} /> <span>Service list</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/review" className="text-dark">
                                        <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-dark">
                                        <FontAwesomeIcon icon={faLocationArrow} /> <span>Sign Out</span>
                                    </Link>
                                </li>
                               
                               
                            </div>

                        </div>}

                        {isAdmin && <div className='d-flex'>
                            <div className='mr-5' >
                                <li>
                                    <Link to="/allServices" className="text-dark">
                                        <FontAwesomeIcon icon={faShoppingBasket} /> <span>Services List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/addService" className="text-dark">
                                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/manageService" className="text-dark">
                                        <FontAwesomeIcon icon={faEdit} /> <span>Manage Service</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/makeAdmin" className="text-dark">
                                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-dark">
                                        <FontAwesomeIcon icon={faLocationArrow} /> <span>Sign Out</span>
                                    </Link>
                                </li>
                            </div>

                            <div>
                                {window.location.pathname === '/sidebar' && <div className='service-data'>
                                <Link to='/home'>
                    <img src={logo} width="150" height="50" className="d-inline-block align-top" alt="home" />
                              </Link>
                                </div>}
                            </div>

                        </div>}

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Sidebar;