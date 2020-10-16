import React, { useEffect, useState } from 'react';
import ServiceReqCard from '../ServiceReqCard/ServiceReqCard';
import './ServiceReqList.css';


const ServiceReqList = () => {

    const [allreq, setAllreq] = useState([]);


    useEffect(() => {
        fetch('https://dry-journey-91086.herokuapp.com/addorder')
            .then(res => res.json())
            .then(data => {
                setAllreq(data);
            })

    }, [])

    return (
        <div className="service-white-box">
            <div className="mt-3 d-flex align-items-center" style={{ backgroundColor: '#F5F6FA', borderRadius: '10px', padding: '10px' }}>
                <div style={{ width: '20%', display: 'inline-block', margin: '0' }}><p className="mb-0">Name</p></div>
                <div style={{ width: '20%', display: 'inline-block', margin: '0' }}><p className="mb-0">Email ID</p></div>
                <div style={{ width: '20%', display: 'inline-block', margin: '0' }}><p className="mb-0">Services</p></div>
                <div style={{ width: '20%', display: 'inline-block', margin: '0' }}><p className="mb-0">Project Details</p></div>
                <div style={{ width: '20%', display: 'inline-block', margin: '0' }}><p className="mb-0">Status</p></div>
            </div>
            {
                allreq.map(serviceReq => <ServiceReqCard serviceReq={serviceReq} key={serviceReq._id}></ServiceReqCard>)
            }

        </div>
    );
};

export default ServiceReqList;