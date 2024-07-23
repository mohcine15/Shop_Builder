import React, { useEffect } from "react";
import '../Header/header.css';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Homes = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="home">
            <div className="homeContent container">
                <div className="textDiv">
                    <h1 data-aos="fade-up" className="homeTitle">
                        Shop Builder
                    </h1>
                </div>
                <div className="formedesc">
                    <div className="desc">
                        <p>Découvrez notre plateforme pour créer des sites web sur mesure pour commerçants et entreprises de commerce. Améliorez votre visibilité, fidélisez vos clients et boostez vos ventes grâce à nos solutions personnalisées et notre support technique continu.</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <FaInstagram className="icon" />
                    </div>
                    <div className="leftIcons">
                        <FaList className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
                <button data-aos="fade-up" className="btndes">
                    <a href="#">Créer votre site !</a>
                </button>
            </div>
        </section>
    );
};

export default Homes;
