import React, { useEffect, useState } from "react";
import '../Template/template.css';
import { SliderData } from "./sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Tmp = ({ slides }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="tmpcontenaire">
            <div className="homeContent container">
                <div className="textDiv">
                    <h1 data-aos="fade-up" className="homeTitle">
                        Nos templates
                    </h1>
                </div>
                <div className="imgcontenair">
                    <section className="slider">
                        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                        {SliderData.map((slide, index) => (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (<img src={slide.image} alt="template" className="image" />)}
                            </div>
                        ))}
                    </section>
                    <button className="btntmp"><a href="#">Créer votre site !</a></button>
                </div>
            </div>
        </section>
    );
}

export default Tmp;
