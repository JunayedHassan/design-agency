import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {


    const [allreviews, setAllreviews] = useState([]);
    useEffect(() => {
        fetch('https://dry-journey-91086.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setAllreviews(data);
            })

    }, [])
    console.log(allreviews)




    return (
        <div>
            <div className="text-center feedback-title">
                <h2>Clients <span className="brand-color">Feedback</span></h2>
            </div>
            <div className="row ml-5 mr-5 card-deck d-flex justify-content-center" style={{ paddingTop: "100px" }}>
                    {
                        allreviews ? allreviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>) : <p>review loading</p>
                    }
            </div>
        </div>
    );
};

export default Review;