import React from 'react';
import { useHistory } from 'react-router-dom';
import './ProjectForm.css';
const ProjectForm = () => {
    const history = useHistory();
    const handleSubmit = (evt) =>{
        if(window.confirm("Would you like to connect with our Reseller???")){
            history.push('/home');
        }else{
            evt.preventDefault();
        }
        // console.log(evt.target.name.value);
        // console.log(evt.target.email.value);
        // console.log(evt.target.message.value);
    }
    return (
        <section className='row w-100 mx-auto justify-content-center communication-form px-5 pt-5 pb-2'>
            <div className="col-md-5">
                <h1>Let us handle your project, professionally.</h1>
                <h6 className='text-secondary mt-4'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</h6>
            </div>
            <div className="col-md-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" name='email' className='form-control' placeholder='Your email address' required/>
                    </div>
                    <div className="form-group">
                        <input type="text" name='name' className='form-control' placeholder='Your name / company name' required/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" id="" cols="30" rows="6" className='form-control' placeholder='Your message' required/>    
                    </div>
                    <input type="submit" className='btn btn-dark px-5' value="Send"/>
                </form>
            </div>
            <footer className='text-center text-muted mt-5'>
                <p className='mt-4'>Copyright BEST IT  {(new Date()).getFullYear()} @NADIM MAHMUD</p>
            </footer>
        </section>
    );
};

export default ProjectForm;