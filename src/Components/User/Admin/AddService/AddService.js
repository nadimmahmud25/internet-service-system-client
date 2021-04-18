import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import uploadIcon from '../../../../images/icons/cloud-upload-outline 1.png';
const AddService = () => {
    const [loggedInUser,setLoggedInUser,user] = useContext(UserContext);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt.target.file.files[0])
        const formData = new FormData();
        formData.append('adminEmail', user.email);
        formData.append('title', evt.target.title.value)
        formData.append('description', evt.target.description.value)
        formData.append('price', evt.target.price.value)
        formData.append('file', evt.target.file.files[0])
        fetch('https://calm-refuge-54103.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Welcome!!! Your Package Is Uploaded Successfully');
            
        })
        .catch(error => {
            console.error(error,loggedInUser,setLoggedInUser)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='w-100 card p-5 m-2' id='useForm'>
                <div className="row">
                    <div className="form-group col-md-7">
                        <label className='font-weight-bold'>Service Title</label>
                        <input type="text" name='title' className="form-control mr-1" placeholder="Enter title" required/>
                    </div>
                    <div className="form-group col-md-3">
                        <label className='font-weight-bold'>Icon</label>
                        <input type="file" name="file" id="upload-file" required/>
                        <label className='btn btn-warning form-control ml-1' id="upload-label" htmlFor="upload-file" title='Upload image'><img style={{height: '30px'}} src={uploadIcon} alt=""/> <span className='image-upload'>Upload image</span></label>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-7">
                        <label className='font-weight-bold'>Description</label>
                        <textarea name="description" cols="30" rows="5" className='form-control' placeholder='Enter Description' required/>    
                    </div>
                </div>
                <div className="form-group col-md-7">
                        <label className='font-weight-bold'>Package Price</label>
                        <input type="text" name='price' className="form-control mr-1" placeholder="Enter Price" required/>
                    </div>
            </form>
            <div className="d-flex justify-sm-content-start justify-content-end">
                <button type='submit' form='useForm' className='btn btn-success'>Submit</button>
            </div>
        </div>
    );
};

export default AddService;