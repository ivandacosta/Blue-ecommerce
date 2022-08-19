import React from "react";
import "./header.css"
import cart from "./cart.png";


const Header = () => {
    return(
        <header>
            <div className="logo">
                <h2>Blue</h2>
            </div>

            <nav>
                <ul>
                    <a href="Home"><li>Home</li></a>
                    <a href="Productos"><li>Productos</li></a>
                    <a href="Contacto"><li>Contacto</li></a>
                </ul>
            </nav>

            <div className="Cart">
                <img src={cart} alt="imagen"/>
            </div>
        </header>
    )
}

export default Header