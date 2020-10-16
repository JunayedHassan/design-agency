import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import headerimg from '../../../images/logos/Frame.png';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import netflix from '../../../images/logos/netflix.png';
import uber from '../../../images/logos/uber.png';

const Header = () => {

    const brandCompanyLogo = {height: '70px', paddingTop: "25px", paddingLeft: "10px", paddingRight: "10px"}

    return (
        <div>
            <div className="bgcolor">
                <div className="header-container">
                    <Navbar></Navbar>
                    <div className='row d-flex align-items-center justify-content-between'>
                        <div className="col-md-4">
                            <h1 style={{ fontSize: '60px' }} className="font-weight-bold">Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                            <p style={{ fontSize: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, pariatur assumenda aspernatur minima voluptas sapiente.</p>
                            <button className="btn btn-dark pl-4 pr-4">Hire Us</button>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className=" d-flex justify-content-center">
                                <img style={{ width: '100%' }} src={headerimg} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{margin:'50px 0'}} className="row d-flex align-items-center justify-content-around col-md-12">
                <img style={brandCompanyLogo} src={slack} alt="" />
                <img style={brandCompanyLogo} src={google} alt="" />
                <img style={brandCompanyLogo} src={uber} alt="" />
                <img style={brandCompanyLogo} src={netflix} alt="" />
                <img style={brandCompanyLogo} src={airbnb} alt="" />
            </div>
        </div>
    );
};

export default Header;