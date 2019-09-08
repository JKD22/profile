import React from "react";
import "open-iconic/font/css/open-iconic-bootstrap.css";
import './style.css';


const Nav = () => (
    <nav className="nav">

        <div className="navbar">
            <div className="navbar-inner">
                <div className="container">
                    <ul className="nav">
                        <li><a className="oi oi-home fade-in" href="/Home"><span>Navigate to home page</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    
    
);

export default Nav;