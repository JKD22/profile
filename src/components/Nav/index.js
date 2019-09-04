import React from 'react';
import './style.css';


const Nav = () => (
    <nav className="nav">

        <div className="navbar">
            <div className="navbar-inner">
                <div className="container">
                <ul className="logo"></ul>
                    <ul className="nav">
                        <li className="active"><a className="brand" href="/#">JK</a></li>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    
    
);

export default Nav;