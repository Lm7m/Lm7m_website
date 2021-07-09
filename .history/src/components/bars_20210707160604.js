import React from "react";

class Bars extends React.Component {
  render() {
    state = {  listitems = ["Tomato", "Cheese", "Pepperoni", 
    "Olives", "Jalapenos", "Pineapple", "Ham"]}



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
