import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainBanner({ mainMovies }) {
    const settings = {
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <div className="w_1400">
            <Slider {...settings}>
                {   
                    mainMovies.map((mainMovie, i) => (
                        <div key={mainMovie.id}>
                            <Link to={`/movie/${mainMovie.id}`}>
                                <div className="flex-row">
                                    <div className="img-box">
                                        <img src={mainMovie.large_cover_image} alt={mainMovie.title} />
                                    </div>
                                    <div className="txt-box">
                                        <h3>Best Movie 0{i+1}.</h3>
                                        <h2>{ mainMovie.title_long }</h2>
                                        <span>
                                            { mainMovie.summary.length > 300
                                              ? `${mainMovie.summary.slice(0, 300)} ...`
                                              : mainMovie.summary
                                            }
                                        </span>
                                        <button className="btn-txt">Show More!</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default MainBanner;