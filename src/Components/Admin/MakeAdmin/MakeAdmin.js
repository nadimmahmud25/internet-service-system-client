import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({})

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleBlur = e => {
        const newAdmin = { ...admin }
        newAdmin[e.target.name] = e.target.value
        setAdmin(newAdmin)
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch('https://calm-refuge-54103.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Admin Added Successfully')
                    document.getElementById('email').value = '';
                }
            })

    }

    return (
        <div>
            <div className='container'>

                <div className="row">
                    <div className="col-md-2" style={{ marginBottom: '300px' }}>
                        <Sidebar />
                    </div>
                    <div className="col-md-10" style={{ backgroundColor: "aliceblue", height: '100vh' }}>
                        <div className="d-flex justify-content-between mt-5">
                            <h2>Add Admin</h2>
                            <div className="d-flex">
                                <img src={loggedInUser.photoURL} alt="" style={{ height: '30px', width: '30px', borderRadius: '50%' }} />
                                <h5>{loggedInUser.name}</h5>
                            </div>
                        </div>
                        <div className='mt-3' style={{ backgroundColor: '#fff', borderRadius: '20px', height: '50vh' }}>
                            <form onSubmit={handleSubmit} className="form-inline" style={{ padding: '50px' }}>
                                <label className="sr-only">Email</label>
                                <input id="email" type="email" name="email" onBlur={handleBlur} className="form-control mb-2 mr-sm-2" style={{ width: "450px" }} placeholder="nadim@gamil.com" required />
                                <button type="submit" className="btn mb-2" style={{ backgroundColor: '#009444', color: '#fff' }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MakeAdmin;