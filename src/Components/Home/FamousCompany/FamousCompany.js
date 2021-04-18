import React from 'react';
import './FamousCompany.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
const FamousCompany = () => {
    return (
        <section className='row my-5 align-items-center company justify-content-center container-fluid mx-auto mt-3 mb-5 w-75'>
            <a href='https://slack.com/intl/en-bd/' className="col-md-2 col-sm-12 col-xs-12 m-2">
                <img style={{height: '32px'}} src={slack} alt=""/>
            </a>
            <a href='https://www.google.com/' className="col-md-2 col-sm-12 col-xs-12 m-2">
                <img style={{height: '38px'}} src={google} alt=""/>
            </a>
            <a href='https://www.uber.com/bd/en/' className="col-md-2 col-sm-12 col-xs-12 m-2">
                <img style={{height: '45px'}} src={uber} alt=""/>
            </a>
            <a href='https://www.netflix.com/bd/' className="col-md-2 col-sm-12 col-xs-12 m-2">
                <img style={{height: '45px'}} src={netflix} alt=""/>
            </a>
            <a href='https://www.airbnb.com/' className="col-md-2 col-sm-12 col-xs-12 m-2">
                <img style={{height: '45px'}} src={airbnb} alt=""/>
            </a>
        </section>
    );
};

export default FamousCompany;