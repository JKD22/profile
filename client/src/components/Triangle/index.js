import React from "react";
import "./index.css";

// const Triangle = () => (
  
//   <triangle className="triangle">
//     <div className="triangle-div"></div>
//   </triangle>

// );
  class Triangle extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = (e) => {
      e.preventDefault();
      console.log('this is:', this);
    }
  
    render() {
      return (
        <div className="triangle-div"></div>
      );
    }
  }

export default Triangle;