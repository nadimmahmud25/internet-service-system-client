import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const Review = () => {
    const [loggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        const clientComment = {
            img: loggedInUser.photoURL,
            name: evt.target.name.value,
            company_designation: evt.target.company_designation.value,
            description: evt.target.description.value
        }
        // console.log(loggedInUser);
        //Comment add hoye jabe...loggedIn User er
        fetch(`http://localhost:5000/clientComments`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(clientComment)
        })
        .then(res => {
            if(res){
                // console.log(res);
                alert("Your comment is successfully done!!!");
            }
        })
    }
    return (
        <form onSubmit={handleSubmit} className='w-50'>
            <div className="form-group">
                <input type="text" name='name' className='form-control' placeholder='Your name' required/>
            </div>
            <div className="form-group">
                    <input type="text" name="company_designation" className='form-control' placeholder="Company's name, Designation" required/>
            </div>
            <div className="form-group">
                <textarea name="description" cols="30" rows="6" className='form-control' placeholder='Description' required/>    
            </div>
            
            <input type="submit" className='btn btn-dark px-5' value="Submit"/>
        </form>
    );
};

export default Review;