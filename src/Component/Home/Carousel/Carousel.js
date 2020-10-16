import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import './Carousel.css';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';

const Carousel = () => {
    return (
        <div style={{ backgroundColor: '#111430', marginTop: '100px', marginBottom: "75px", paddingTop: '60px' }}>
            <div className=" text-center">
                <h2 className="text-white">Here are some of <span className="brand-color">our works</span></h2>
            </div>
            <div style={{marginTop:"70px", paddingBottom:"70px"}} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="" style={{ height: "45vh", marginLeft: "35%", marginRight: "35%" }} src={carousel1} alt="" />
                    </div>
                    <div className="carousel-item ">
                        <img className="" style={{ height: "45vh", marginLeft: "35%", marginRight: "35%" }} src={carousel2} alt="" />
                    </div>
                    <div className="carousel-item ">
                        <img className="" style={{ height: "45vh", marginLeft: "35%", marginRight: "35%" }} src={carousel3} alt="" />
                    </div>
                    <div className="carousel-item ">
                        <img className="" style={{ height: "45vh", marginLeft: "35%", marginRight: "35%" }} src={carousel4} alt="" />
                    </div>
                    <div className="carousel-item ">
                        <img className="" style={{ height: "45vh", marginLeft: "35%", marginRight: "35%" }} src={carousel5} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Carousel;