import React from 'react';
import './ReviewCard.css'

const ReviewCard = (props) => {
    const { companyOrDesignation, description, image, name } = props.review;
    return (

        <div className="col-md-3 col-sm-6 mb-5 ml-3 mr-3 reviewCard">
            <div className="card">
                <div className="row d-flex align-items-center pr-2 pl-2 pb-3">
                    <div className="pr-3">
                        <img style={{ height: "100px", borderRadius: '50%' }} src={image} alt="" />
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <h5>{companyOrDesignation}</h5>
                    </div>
                </div>
                <p className="text-secondary" style={{ fontSize: "24px" }}>{description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;