import React from "react";
import "./header.css"
import CartWidget from "../CartWidget/CartWidget";


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

            <CartWidget/>
        </header>
    )
}

export default Header