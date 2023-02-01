import React from "react";
import "./Section4.css";
import image1 from "../../../essets/section4:1.jpeg";
import image2 from "../../../essets/section4:2.jpeg";
import image4 from "../../../essets/section4:4.jpeg";
import image5 from "../../../essets/section4:5.jpeg";



export const Section4 = () => {
    return (
        <div>
            <h1 className="follow">Follow us on Instagram</h1>
            <div className="InstPic">
                <img src={image1} alt="image"/>
                <img src={image2} alt="image"/>
                <img src={image4} alt="image"/>
                <img src={image5} alt="image"/>
            </div>
            <a className="link" href="https://www.instagram.com/massimodutti/">@masondigo</a>
        </div>
    )
}
export default Section4;