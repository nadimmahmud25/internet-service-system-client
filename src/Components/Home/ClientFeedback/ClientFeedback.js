import React, { useEffect, useState } from 'react';
import FeedbackDetails from '../FeedbackDetails/FeedbackDetails';

const ClientFeedback = () => {
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetch('https://calm-refuge-54103.herokuapp.com/feedback')
            .then(response => response.json())
            .then(result => setFeedback(result))
    }, [])
    return (
        <section className='container text-center'>
            <h1 className='my-5'>We Give Awesome Service, <span style={{ color: '#7AB259' }}>See How Customers Love Us.</span></h1>
            <div className='row'>
                <div className='row'>
                    {
                        feedback.map(feedback => <FeedbackDetails key={feedback._id} feedback={feedback}></FeedbackDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientFeedback;