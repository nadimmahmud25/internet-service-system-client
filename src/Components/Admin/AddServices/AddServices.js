import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './AddServices.css'


const AddServices = () => {

    const [addService, setAddService] = useState({})
    const [file, setFile] = useState(null)

    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleBlur = e => {
        const newService = { ...addService }
        newService[e.target.name] = e.target.value
        setAddService(newService)
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', addService.title);
        formData.append('price', addService.price);
        formData.append('description', addService.description);

        fetch('https://calm-refuge-54103.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Service Added Successfully')
                history.push('/addService')

            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div >
            <div className='container' style={{ backgroundColor: '#fff' }}>
                <div className="row">
                    <div className="col-md-2 my-5">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 services-details" >
                        <div className="d-flex mt-5 justify-content-between">
                            <h2 >Add Services</h2>
                            <div className="d-flex">
                                <img src={loggedInUser.photoURL} alt="" style={{ height: '30px', width: '30px', borderRadius: '50%' }} />
                                <h5>{loggedInUser.name}</h5>
                            </div>
                        </div>
                        <div className='my-2 p-4 service'>

                            <form onSubmit={handleSubmit} className="service-form">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >Package Title</label>
                                        <input type="text" name="title" onBlur={handleBlur} className="form-control" placeholder="Enter Title" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Package Price</label>
                                        <input type="text" name="price" onBlur={handleBlur} className="form-control" placeholder="Enter Price" />
                                    </div>                     
                                </div>
                                
                                <div className="form-group">
                                    <label >Description</label>
                                    <textarea className="form-control w-50" onBlur={handleBlur} name="description" rows="4" placeholder="Enter Description"></textarea>
                                </div>
                                <div className="form-group">
                                        <label>Image</label>
                                        <input onChange={handleFileChange} type="file" className="form-control-file" />
                                    </div>
                                <button type="submit" className="btn btn-primary float-right" style={{ backgroundColor: '#009444' }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddServices;