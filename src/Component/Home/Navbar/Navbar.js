import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/creative-logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav-bg-color">
                <div className="col-3">
                <Link className="navbar-brand" to=""><img style={{ height: "7vh" }} src={logo} alt="" /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse col-9 justify-content-end" id="navbarSupportedContent">
                    <div className="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-dark mr-5 nav-font" to="./home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark mr-5 nav-font" to="./dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark mr-5 nav-font" to="">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark mr-5 nav-font" to="">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white mr-5 nav-font btn btn-dark pl-4 pr-4" to="/login">Log In</Link>
                        </li>
                        <li className="nav-item dropdown">

                        </li>
                    </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;