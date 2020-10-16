import React, { useEffect, useState } from 'react';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { details, order, specificServiceId, status } = props.order;

    let imgIcon = '';
    const [serviceIcon, setServiceIcon] = useState();
    useEffect(() => {
        fetch('https://dry-journey-91086.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
                setServiceIcon(data);
            })

    }, [])
    if (serviceIcon) {
        for (let i = 0; i < serviceIcon.length; i++) {
            const element = serviceIcon[i]._id;
            if (specificServiceId === element) {
                imgIcon = serviceIcon[i].image.img;
            }

        }
    }

    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <div className="card order-card">

                <div className="row d-flex align-items-center justify-content-between">
                    <img className="mb-3" style={{ height: "100px" }} src={`data:image/png;base64,${imgIcon}`} alt="" />
                    <div>
                        <button className="btn btn-success mr-4" id="status" disabled>{status}</button>
                    </div>
                </div>
                <h4 className="mt-3">{order}</h4>
                <p style={{ fontSize: "24px" }} className="text-secondary">{details}</p>
            </div>
        </div>
    );
};

export default ServiceCard;