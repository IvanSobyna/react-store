import React from "react";
import basket from "../../essets/basket-icon.jpeg"
import "./Header.css"
import {NavLink} from "react-router-dom";


 export const Header = () => {
    return (
        <header>
            <div className="freeShipping">Free shipping on all orders over $100.</div>
            <div className="firstBlock">
                <NavLink className="topBar" to="/men">men</NavLink>
                <NavLink className="topBar" to="/women">women</NavLink>
                <p className="shopName">Mason Digo</p>
                <NavLink className="topBar" to="/watches">watches</NavLink>
                <img className="iconBasket" src={basket} alt="icon"/>
            </div>

        </header>
    )
}


export default Header;