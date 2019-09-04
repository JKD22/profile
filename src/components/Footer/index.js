import React from "react";
import "./style.css";

const footerMessage = "Created by ...";

const Footer = () => (
    <footer className="footer">
      <p>
        {footerMessage}
      </p>
    </footer>
  );

export default Footer;