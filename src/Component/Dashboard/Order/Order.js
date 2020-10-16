import React, { useContext, useEffect, useState } from 'react';
import './Order.css'
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const Order = () => {
    const { serviceId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allServices, setAllServices] = useState();
    useEffect(() => {
        fetch('https://dry-journey-91086.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })

    }, [])

    let getName = '';
    if (allServices) {
        for (let i = 0; i < allServices.length; i++) {
            const { _id } = allServices[i];
            if (_id === serviceId) {
                getName = allServices[i].title;
            }
        }
    }





    const handleOrder = (e) => {

        let nameValue = document.getElementById("person-name");
        let emailValue = document.getElementById("email");
        let orderValue = document.getElementById("takeorder");
        let detailsValue = document.getElementById("details");
        let priceValue = document.getElementById("price");

        const name = nameValue.value;
        const email = emailValue.value;
        const order = orderValue.value;
        const specificServiceId = serviceId;
        const details = detailsValue.value;
        const price = priceValue.value;
        const status = 'pending';
        const orderArray = { name, email, order, specificServiceId, details, price, status };

        fetch('https://dry-journey-91086.herokuapp.com/addorder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderArray)
        })
        nameValue.value = '';
        emailValue.value = '';
        orderValue.value = '';
        detailsValue.value = '';
        priceValue.value = '';
        e.preventDefault();
    }
    return (
        <div>
            <div>
                <form onSubmit={handleOrder} >
                    <input className=" order-form" defaultValue={loggedInUser.name} placeholder="Your name / company’s name" id="person-name" type="text" required />
                    <input className=" order-form" defaultValue={loggedInUser.email} id='email' type="text" />
                    <input className=" order-form" id='takeorder' type="text" defaultValue={getName} />
                    <textarea className="order-form" style={{ height: "100px" }} placeholder="Project Detail" id='details' type="text" required />
                    <input className="  order-form" placeholder="Price" id='price' type="number" required />

                    <button className="btn btn-dark pl-4 pr-4" type="submit">send</button>
                </form>
            </div>
        </div>
    );
};

export default Order;