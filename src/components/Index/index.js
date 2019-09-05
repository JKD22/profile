import React, { Component } from "react";
import Nav from '../Nav';
// import Header from '../Header';
import Logo from '../Logo';
import Footer from '../Footer';
import "./style.css";

class Index extends Component {
    render() {
        return (
            <div>
                <Nav />
                <hr/>
                <Logo />
                <hr className="fixed-bottom mB-30"/>
                <Footer />
            </div>
        )};
};

export default Index;