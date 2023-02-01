import React from "react";
import "./Section2.css"
import {NavLink} from "react-router-dom";

export const Section2 = (props) => {
    return (
        <div>
    <div className="section2">
    <div className="women">
        <p>Women</p>
        <button>Shop now</button>
    </div>
        <div className="men">
            <p>Men</p>
            <button>Shop now</button>
        </div>
    </div>
            <h1 className="arrivals">New arrivals</h1>
        <div className="allPic">
            <div>
                <img className="images1" src={props.data.first.image} alt="pic"/>
                <h1 className="names1">{props.data.first.name}</h1>
                <h2 className="prices1">{props.data.first.price}</h2>
                <button className="aboutProduct">More about</button>
            </div>
            <div>
                <img className="images1" src={props.data.second.image} alt="pic"/>
                <h1 className="names1">{props.data.second.name}</h1>
                <h2 className="prices1">{props.data.second.price}</h2>
                <button className="aboutProduct">More about</button>            </div>
            <div>
                <img className="images1" src={props.data.third.image} alt="pic"/>
                <h1 className="names1">{props.data.third.name}</h1>
                <h2 className="prices1">{props.data.third.price}</h2>
                    <button className="aboutProduct">More about</button>            </div>
            <div>
                <img className="images1" src={props.data.fourth.image} alt="pic"/>
                <h1 className="names1">{props.data.fourth.name}</h1>
                <h2 className="prices1">{props.data.fourth.price}</h2>
                <button className="aboutProduct">More about</button>            </div>
        </div>
        </div>
    )
}

export default Section2;