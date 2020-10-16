import React from 'react';
import './FormaAndFooter.css'

const FormAndFooter = () => {
    return (
        <div>
            <div>
                <div className='footerbg mt-5'>
                    <div className="row d-flex  justify-content-between  footer-container">
                        <div className="col-md-4 mt-5">
                            <h2 style={{ fontSize: '40px' }} className="font-weight-bold">Let us handle your<br /> project, professionally.</h2>
                            <br />
                            <p style={{ fontSize: '20px' }}>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                        <div className="col-md-6 mt-5 mr-5 ml-5">
                            <form action="">
                                <input className="col-md-12 ipnut-style email-input" placeholder="Your email address" type="text" />
                                <input className="col-md-12 ipnut-style" placeholder="Your name / company’s name" type="text" />
                                <textarea className="col-md-12 ipnut-style form-details" placeholder="Your message" type="text" />
                            </form>
                            <button className="btn btn-dark pl-4 pr-4">Submit</button>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        <p style={{ marginTop: '40px', marginBottom: "0", paddingBottom: "40px" }}>copyright Orange labs {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAndFooter;