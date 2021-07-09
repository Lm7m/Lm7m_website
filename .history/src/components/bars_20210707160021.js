import React from "react";

class bars extends React.Component {
  render() {
    var toppings = ["Tomato", "Cheese", "Pepperoni", 
    "Olives", "Jalapenos", "Pineapple", "Ham"];


    let listItem = document.querySelector("ul")
    
    return (
        
        <ul>
      <div className="bars" >
      for (let value of toppings) {
     listValue = document.createElement("li"),
     listValue.textContent = value,
     listItem.appendChild(listValue),
     <div></div>
    }
      </div>
      </ul>
    );
  }
}

export default Card;
