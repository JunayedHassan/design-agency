import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { title, image, description, _id } = props.service
    const serviceId = _id;
    return (

        <Link to={"/dashboard/" + serviceId} className=" card-hover-padding col-md-4 col-sm-6 mb-5 text-center hvr-buzz-out">
            <div className="nofill-btn">
                <div className="card ">
                    <div>
                        <img style={{ height: "100px" }} src={`data:image/png;base64,${image.img}`} alt="" />
                    </div>
                    <h4 className="mt-3">{title}</h4>
                    <p style={{ fontSize: "24px" }}>{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;