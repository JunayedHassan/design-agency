import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css'


const Services = () => {

    const [allServices, setAllServices] = useState();
    useEffect(() => {
        fetch('https://dry-journey-91086.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })

    }, [])
    return (
        <div>
            <div style={{ marginTop: '100px', marginBottom: "75px" }} className="col-md-12  text-center">
                <h2>Provide awesome <span className="brand-color">services</span></h2>
            </div>
            <div className="row ml-5 mr-5">
                <div className="card-deck">
                    {
                        allServices ? allServices.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>) : <br />
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;