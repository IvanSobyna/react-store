import React from "react";
import "./Footer.css";
import facebook from "../../essets/facebook.png"
import instagram from "../../essets/instagram.png"
import twitter from "../../essets/twitter.jpeg"
import youtube from "../../essets/youtube.jpeg"


export const Footer = () => {
    return (
        <footer>
        <div className="mainFooter">
            <div className="allColums">
            <div className="firstColum">
                <h1>Need help?</h1>
                <p>FAQ</p>
                <p>Refund and Returns Policy</p>
                <p>Contact us</p>
            </div>
                <div className="secondColum">
                    <h1>Get in touch</h1>
                    <p>123 Example St, San Francisco, <br/>
                        CA 12345-6789</p>
                    <a href="#">contact@example.com</a>
                    <p>0123-456-7890</p>
                </div>
                <div className="thirdColum">
                    <h1>Follow us</h1>
                    <div className="imgSM">
                    <a href="https://www.facebook.com/"><img src={facebook} alt="img"/></a>
                    <a href="https://www.instagram.com/"><img src={instagram} alt="img"/></a>
                    </div>
                </div>
                <div className="fourthColum">
                    <h1>Subscribe to newsletter</h1>
                    <input type="text" placeholder="Type your email..."/>
                    <br/>
                    <button>Subscribe</button>
                </div>
            </div>
            {/*<div className="firstLine">*/}
            {/*    <p>Need help?</p>*/}
            {/*    <p>Get in touch</p>*/}
            {/*    <p>Follow us</p>*/}
            {/*    <p>Subscribe to newsletter</p>*/}
            {/*</div>*/}
            {/*<br/>*/}
            {/*<div className="secondLine">*/}
            {/*    <div>FAQ</div>*/}
            {/*    <div>123 Example St, San Francisco, <br/>*/}
            {/*        CA 12345-6789</div>*/}
            {/*    <div className="imgSM">*/}
            {/*        <a href="https://www.facebook.com/"><img src={facebook} alt="img"/></a>*/}
            {/*        <a href="https://www.instagram.com/"><img src={instagram} alt="img"/></a>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <input type="text" placeholder="Type your email..."/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
        </footer>
    )
}
export default Footer;