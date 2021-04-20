import React from 'react';
import emailjs from "emailjs-com";

const Footer = () => {
    
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
        <footer className="clear-both mt-5" style={{ backgroundColor: '#62fb7b', height: 'auto', marginBottom: '0px' }}>
            <div className="container pt-5 pb-4" >
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h2>UltraNet <br /> Contact with us.</h2>
                        <p><small>Mauris mattis enim elementum malesuada semper. Suspendisse fermentum ante mauris, eu bibendum erat semper quis.</small></p>
                    </div>
                    <div className="col-md-6">
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
                            <input type="submit" className='btn btn-dark px-5' value="Send"/>
        
                        </form>

                    </div>
                </div>
                <p className="text-center mt-5"> &CopyRight;  Nadim Mahmud {(new Date()).getFullYear()} | All Rights Reserved  </p>
            </div>
        </footer>
    );
};

export default Footer;