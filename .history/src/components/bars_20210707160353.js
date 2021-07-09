import React from "react";

class Bars extends React.Component {
  render() {
    var toppings = ["Tomato", "Cheese", "Pepperoni", 
    "Olives", "Jalapenos", "Pineapple", "Ham"];


    let listItem = document.querySelector("ul")
    for (let value of toppings) {
     listValue = document.createElement("li");
     listValue.textContent = value;
     listItem.appendChild(listValue);
    }
    return (
        
        <ul>
      <div className="bars" >
          <listItem></listItem>
      </div>
      </ul>
    );
  }
}

export default Bars;
