import React from 'react';
import emailjs from "emailjs-com";
import Navbar from '../Home/Navbar/Navbar';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_29c3zcc', e.target, 'user_fWIrDadiL8TMGqs6d0rV5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert('Your Message Successfully Send')
        e.target.reset()
    }

    return (
        <div style={{ height: '100vh', backgroundColor: '#FBD062', color: '#fff' }}>
            <Navbar />
            <div className='container' >
                <br /><br />
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your email address" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your name / company’s name" name="name" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                    </div>
                    <input type="submit" className="btn btn-design mb-5" value="Submit"></input>
                </form>
            </div>
        </div>
    );
};

export default Contact;