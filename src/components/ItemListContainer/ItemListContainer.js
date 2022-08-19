import React from "react";
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return <>
        <div className="Card">
            <h2>{props.name}</h2>
            <h2>{props.surname}</h2>
            <h2>{props.edad}</h2>
        </div>
    </>
}

export default ItemListContainer