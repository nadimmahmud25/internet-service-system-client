import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../../../images/images/internet.jpg'


const HeaderMain = () => {
    return (
        <header className="pt-5 row w-100 justify-content-around container-fluid">
            <div className="col-md-4 mr-5 col-xs-11 my-4 p-3">
            <h1 style={{fontWeight: '1000',width: '95%',fontFamily: 'Poppins'}}>Connect all your devices and access high speed Internet with ease</h1>           
               <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </div>
                <Link to="/hire"><button className='btn btn-dark px-5'>GETTING START NOW</button></Link>
            </div>
            <div className="col-md-7 col-xs-12 pb-5 mb-4">
                <img className='img-fluid' src={headerImage} alt=""></img>
            </div>
        </header>
    );
};

export default HeaderMain;