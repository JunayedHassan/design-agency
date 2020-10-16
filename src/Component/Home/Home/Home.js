import React from 'react';
import Carousel from '../Carousel/Carousel';
import FormAndFooter from '../FormAndFooter/FormAndFooter';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Carousel></Carousel>
            <Review></Review>
            <FormAndFooter></FormAndFooter>
        </div>
    );
};

export default Home;