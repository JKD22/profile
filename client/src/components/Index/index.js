import React, { Component } from "react";
import Nav from '../Nav';
// import Header from '../Header';
import Body from '../Body';
import Logo from '../Logo';
import Footer from '../Footer';
import "./style.css";

class Index extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Logo />
                <Body />
                <Footer />
            </div>
        )};
};

export default Index;