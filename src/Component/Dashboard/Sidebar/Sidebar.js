import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {

    const servicelist = () => {
        document.getElementById('reviewSubmit').style.display = 'none';
        document.getElementById('order').style.display = 'none';
        document.getElementById('serviceList').style.display = 'block';

    }
    const reviewSubmit = () => {
        document.getElementById('reviewSubmit').style.display = 'block';
        document.getElementById('order').style.display = 'none';
        document.getElementById('serviceList').style.display = 'none';

    }
    const order = () => {
        document.getElementById('reviewSubmit').style.display = 'none';
        document.getElementById('order').style.display = 'inline-block';
        document.getElementById('serviceList').style.display = 'none';
    }


    return (
        <div className="col-md-12">
            <br />
            <div onClick={() => { order() }} className="nav-active row d-flex align-items-start">
                <FontAwesomeIcon className="mr-1" style={{ marginTop: "4px" }} icon={faShoppingCart} />
                <p >Order</p>
            </div>
            <div onClick={() => { servicelist() }} className="nav-active row d-flex align-items-start">
                <FontAwesomeIcon className="mr-1" style={{ marginTop: "4px" }} icon={faHandsHelping} />
                <p>Service list</p>
            </div>
            <div onClick={() => { reviewSubmit() }} className="nav-active row d-flex align-items-start">
                <FontAwesomeIcon className="mr-1" style={{ marginTop: "4px" }} icon={faStar} />
                <p>Review</p></div>
        </div>
    );
};

export default Sidebar;