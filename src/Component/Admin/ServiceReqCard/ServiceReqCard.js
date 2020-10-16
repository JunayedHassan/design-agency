import React from 'react';
import './ServiceReqCard.css'

const ServiceReqCard = (props) => {
    const { name, email, order, details, specificServiceId, _id } = props.serviceReq;
    let { status } = props.serviceReq;
    const serviceReqStyle = { width: '20%', display: 'inline-block' }

    const getValue = (e) => {
        // console.log(e.target.innerText, _id, specificServiceId);
        const getStatus = e.target.innerText;
        const updateStatus = { getStatus, _id };
        fetch(`https://dry-journey-91086.herokuapp.com/update/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log('updated')
            })

        status = e.target.innerText;
        console.log(status)
    }


    return (
        <div className="d-flex align-items-start mt-4">
            <div style={serviceReqStyle}><p>{name}</p></div>
            <div style={serviceReqStyle}><p>{email}</p></div>
            <div style={serviceReqStyle}><p>{order}</p></div>
            <div style={serviceReqStyle}><p>{details}</p></div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span id="btn-title">{status}</span>
                </button>
                <div className="dropdown-menu" id="statusUpdate" aria-labelledby="dropdownMenuButton">
                    <li className="dropdown-item" onClick={getValue}>On Going</li>
                    <li className="dropdown-item" onClick={getValue}>Pending</li>
                    <li className="dropdown-item" onClick={getValue}>Done</li>
                </div>
            </div>
        </div>
    );
};

export default ServiceReqCard;