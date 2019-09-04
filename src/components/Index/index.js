import React, { Component } from "react";
import Nav from '../Nav';
import Header from '../Header';
import Footer from '../Footer';
import "./style.css";

class Index extends Component {
    render() {
        return (
            <div>
                <Nav />
                <hr/>
                <Header />
                <hr className="fixed-bottom mB-30"/>
                <Footer />
            </div>
        )};
};

export default Index;