import React, { useContext } from 'react';
import logo from '../../../images/logos/creative-logo.png';
import './Admin.css'
import ServiceReqList from '../ServiceReqList/ServiceReqList';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { UserContext } from '../../../App';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="pt-5 pl-5">

            <div className="container-fluid row">
                <div className="col-md-2  col-sm-6 col-12">
                    <div>
                        <img src={logo} style={{ height: "55px" }} alt="" />
                    </div>
                    <br />
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <div className="d-flex justify-content-between">
                        <h4>Dashboard</h4>
                        <h3>{loggedInUser.name}</h3>
                    </div>
                    <div className="dashboard grey-color">
                        <div id="ServiceReqList">
                            <ServiceReqList></ServiceReqList>
                        </div>
                        <div id="AddService" style={{ display: 'none' }}>
                            <AddService></AddService>
                        </div>
                        <div id="AddAdmin" style={{ display: 'none' }}>
                            <AddAdmin></AddAdmin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;