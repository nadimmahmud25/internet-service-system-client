import React from 'react';

const Client = ({client}) => {
    return (
        <div className='col-md-3 my-3 mx-3 p-2 card card-deck'>
            <div className="row p-2 img-name justify-content-sm-center">
                <img className='col-md-4 img-fluid col-sm-5 m-auto' style={{width: '50%', borderRadius: '50%'}} src={client.img} alt=""/>
                <div className='col-md-8 center-text mt-3'>
                    <h5>{client.name}</h5>
                    <h6>{client.company_designation}</h6>
                </div>
            </div>
            <p className='style-text mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt dolore necessitatibus. Ab, quam? Rerum.</p>
        </div>
    );
};

export default Client;