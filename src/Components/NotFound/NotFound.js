import React from 'react';
import { useParams } from 'react-router-dom';
import notFound from '../../images/notFound.gif';
const NotFound = () => {
    const page = useParams();
    // console.log(page.name);
    return (
        <div className='text-warning my-0 bg-dark jumbotron text-center'>
            <h2 style={{position:'relative', top: '50px'}}>Sorry!!! The (<span className="text-danger">{page.name}</span>) page is not Found-404</h2>
            <img className='img-fluid my-0' style={{height: '524px'}} src={notFound} alt=""/>
            <p className='text-light' style={{position:'relative', bottom: '50px'}}>Inshallah!!! The (<span className="text-success my-0" >{page.name}</span>) page is coming soon...</p>
        </div>
    );
};

export default NotFound;