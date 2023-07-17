import React from "react";
import logo from "../images/logo icon.png";
import "./style.css";


export default function Navigation(){
    return (
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="Jezreel Logo" />
                <h3>Jezreel Foundation</h3>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Gallery</li>
                    <li>Donate</li>
                    <li>Events</li>
                </ul>
            </div>
        </nav>
    )
}