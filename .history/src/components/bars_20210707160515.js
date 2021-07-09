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
        <React.Fragment>
          <ul className="list-group">
            {this.state.listitems.map(listitem => (
              <li key={listitem.id} className={listitem.modifier}>
                {listitem.context}
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
  }
}

export default Bars;
