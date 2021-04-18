import React from 'react';

const ShowList = ({service}) => {
    // console.log(service)
    return (
        <div className='col-md-5 my-2 card-deck card text-left mx-3'>
            <div className="row p-4 justify-content-between">
                <img src={`data:image/png;base64,${service.image.img}`} className='img-fluid w-75 col-md-5' alt=""/>
                <button style={{color: service.actionColor, background: service.actionBG, height:'fit-content'}} className='btn btn-outline-light col-md-5 mt-3'>{service.action}</button>
            </div>
            <h4>{service.projectTitle}</h4>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos assumenda possimus quos?</p>
        </div>
    );
};

export default ShowList;