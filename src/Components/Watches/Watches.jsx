import React from "react";
import "./Watches.css"
import arrow from "../../essets/arrow.png";
import {Link} from "react-router-dom";

export const Watches = (props) => {
    return(
        <div className="wrapper">
            <Link to={"/"}>
                <img className="arrow" src={arrow} alt="arrow"/>
            </Link>
            <div className="firstShop">
                <img className="imgCollection1" src={props.data.first.image} alt="pic"/>
                <h1 className="names1">{props.data.first.name}</h1>
                <h2 className="prices1">{props.data.first.price}</h2>
                <button className="buyProduct">Buy</button>
            </div>
            <div className="firstShop">
                <img className="imgCollection1" src={props.data.second.image} alt="pic"/>
                <h1 className="names1">{props.data.second.name}</h1>
                <h2 className="prices1">{props.data.second.price}</h2>
                <button className="buyProduct">Buy</button>
            </div>
            <div className="firstShop">
                <img className="imgCollection1" src={props.data.third.image} alt="pic"/>
                <h1 className="names1">{props.data.third.name}</h1>
                <h2 className="prices1">{props.data.third.price}</h2>
                <button className="buyProduct">Buy</button>
            </div>
            <div className="firstShop">
                <img className="imgCollection1" src={props.data.fourth.image} alt="pic"/>
                <h1 className="names1">{props.data.fourth.name}</h1>
                <h2 className="prices1">{props.data.fourth.price}</h2>
                <button className="buyProduct">Buy</button>
            </div>
            <div className="firstShop">
                <img className="imgCollection1" src={props.data.fifth.image} alt="pic"/>
                <h1 className="names1">{props.data.fifth.name}</h1>
                <h2 className="prices1">{props.data.fifth.price}</h2>
                <button className="buyProduct">Buy</button>
            </div>
            <div className="firstShop">
                <img className="imgCollection1" src={props.data.six.image} alt="pic"/>
                <h1 className="names1">{props.data.six.name}</h1>
                <h2 className="prices1">{props.data.six.price}</h2>
                <button className="buyProduct">Buy</button>
            </div>
        </div>
    )
}
export default Watches;