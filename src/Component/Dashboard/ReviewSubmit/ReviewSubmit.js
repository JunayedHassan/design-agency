import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './ReviewSubmit.css';
const ReviewSubmit = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const image = loggedInUser.pic;
    const handleReview = (e) => {

        let nameValue = document.getElementById("review-name");
        let descriptionValue = document.getElementById("description");
        let companyOrDesignationValue = document.getElementById("companyOrDesignation");


        const name = loggedInUser.name;
        const description = descriptionValue.value
        const companyOrDesignation = companyOrDesignationValue.value

        const reviewArray = { name, description, companyOrDesignation, image }

        fetch('https://dry-journey-91086.herokuapp.com/addreview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewArray)
        })


        nameValue.value = '';
        descriptionValue.value = '';
        companyOrDesignationValue.value = '';

        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleReview}>
                <input className="col-md-6 d-block review-form" placeholder="Your name" id="review-name" type="text" defaultValue={loggedInUser.name} />
                <input className="col-md-6 d-block review-form" placeholder="company's name, Designation" id='companyOrDesignation' type="text" required />
                <textarea style={{ height: "100px" }} className="col-md-6 d-block review-form" placeholder="Description" id='description' type="text" required />

                <button className="btn btn-dark pl-4 pr-4" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReviewSubmit;