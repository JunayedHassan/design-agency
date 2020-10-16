import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Order from '../Order/Order';
import ReviewSubmit from '../ReviewSubmit/ReviewSubmit';
import ServiceList from '../ServiceList/ServiceList';
import logo from '../../../images/logos/creative-logo.png';
import './Dashboard.css'
import { UserContext } from '../../../App';


const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);



    return (
        <div className="pt-5 pl-5">

            <div className="container-fluid row">
                <div className="col-md-2  col-sm-6 col-12">
                    <div>
                        <img src={logo} style={{ height: "55px" }} alt="" />
                    </div>
                    <br />
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 col-sm-12 col-12">
                    <div className="d-flex justify-content-between">
                        <h4>Dashboard</h4>
                        <h3>{loggedInUser.name}</h3>
                    </div>
                    <div className="dashboard grey-color">
                        <div id="order" className="col-md-6 col-sm-12">
                            <Order></Order>
                        </div>
                        <div id="reviewSubmit" style={{ display: 'none' }}>
                            <ReviewSubmit></ReviewSubmit>
                        </div>
                        <div id="serviceList" style={{ display: 'none' }}>
                            <ServiceList ></ServiceList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;