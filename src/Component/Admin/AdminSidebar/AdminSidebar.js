import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AdminSidebar.css';

const AdminSidebar = () => {

    const AddService = () => {
        document.getElementById('AddAdmin').style.display = 'none';
        document.getElementById('ServiceReqList').style.display = 'none';
        document.getElementById('AddService').style.display = 'block';

    }
    const addAdmin = () => {
        document.getElementById('AddAdmin').style.display = 'block';
        document.getElementById('ServiceReqList').style.display = 'none';
        document.getElementById('AddService').style.display = 'none';

    }
    const ServiceReqList = () => {
        document.getElementById('AddAdmin').style.display = 'none';
        document.getElementById('ServiceReqList').style.display = 'inline-block';
        document.getElementById('AddService').style.display = 'none';
    }


    return (
        <div className="col-md-12">
            <br />
            <div onClick={() => { ServiceReqList() }} className="nav-active row d-flex align-items-start">
                <FontAwesomeIcon className="mr-1" style={{ marginTop: "4px" }} icon={faHandsHelping} />
                <p >Service List</p>
            </div>
            <div onClick={() => { AddService() }} className="nav-active row d-flex align-items-start">
                <FontAwesomeIcon className="mr-1" style={{ marginTop: "4px" }} icon={faPlus} />
                <p>Add Service</p>
            </div>
            <div onClick={() => { addAdmin() }} className="nav-active row d-flex align-items-start">
                <FontAwesomeIcon className="mr-1" style={{ marginTop: "4px" }} icon={faUserPlus} />
                <p>Add Admin</p></div>
        </div>
    );
};

export default AdminSidebar;