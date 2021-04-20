import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Review = () => {
    const [review, setReview] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()

    const handleBlur = e => {
        const newReview = { ...review }
        newReview[e.target.name] = e.target.value
        setReview(newReview)
    }


    const handleSubmit = e => {
        e.preventDefault()

        const clientReview = {
            ...review,
            img: loggedInUser.photoURL
        }

        fetch('https://calm-refuge-54103.herokuapp.com/clientFeedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clientReview)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Review Added Successfully')
                    history.push('/home')
                }
            })
            .catch((error) => {
                alert('Try Again')
            });
    }

    return (
        <div style={{ backgroundColor: '#fff', height: '100vh' }}>
            <div className='container' >
                <div className="row">
                    <div className="col-md-10">
                        
                        <div className="d-flex justify-content-between mt-5">
                            <h2>Review</h2>
                            <div className="d-flex">
                                <img src={loggedInUser.photoURL} alt="" style={{ height: '30px', width: '30px', borderRadius: '50%' }} />
                                <h5>{loggedInUser.name}</h5>
                            </div>
                        </div>

                        <div className='mt-3 p-5' style={{ backgroundColor: 'aliceblue', borderRadius: '20px' }}>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" onBlur={handleBlur} className="form-control" name="name" defaultValue={loggedInUser.name} />
                                </div>
                                <div className="form-group">
                                    <input type="text" onBlur={handleBlur} className="form-control" name="position" placeholder="Company’s name, Designation" />
                                </div>
                                <div className="form-group">
                                    <textarea onBlur={handleBlur} className="form-control" name="info" rows="5" placeholder="Description"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Review;