import React from "react";
import rainy from "../images/rainy.jpg"

function index() {
    return (
        <div className="background">
            <div className="overlay"></div>
            <img className="bacground-img" src={rainy}></img>
        </div>
    );
}

export default index;