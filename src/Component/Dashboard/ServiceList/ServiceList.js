import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceCard from '../ServiceCard/ServiceCard';






const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orderByEmail, setOrderByEmail] = useState();
    if (typeof orderByEmail === 'undefined') {
        fetch('https://dry-journey-91086.herokuapp.com/orderbyemail')
            .then(res => res.json())
            .then(data => {

                setOrderByEmail(data)
            })

    }
    return (
        <div className="row">

            {
                orderByEmail ? orderByEmail.map(order => <ServiceCard order={order} key={order._id}></ServiceCard>) : <p>loading...</p>
            }

        </div>
    );
};

export default ServiceList;