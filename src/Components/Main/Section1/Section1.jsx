import React from "react";
import "./Section1.css"
import {NavLink} from "react-router-dom";

export const Section = () => {
    return (
        <section className="section1">
            <div className="blockOne">
                <div className="infoBlockOne">
                <h1>Just arrived</h1>
                <p>Our early spring collection is here.</p>
                    <NavLink to="/new"><button>Shop now</button></NavLink>
                </div>
            </div>
            <div className="lastBlock">
            <p>We’re a sustainability-conscious lifestyle and fashion brand for the <br/> modern souls. We celebrate the craftsmanship of our makers and <br/> want to provide long-lasting pieces with a style that lasts.
            </p>
            <NavLink className="moreAbout" to="/about">More about us</NavLink>
            </div>
        </section>
    )
}

export default Section;