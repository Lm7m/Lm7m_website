import React, { Component } from "react";

class Item extends Component {
  state = {
    listitems: [
      {
        context: "Primary",
        modifier: "list-group-item list-group-item-primary",
      },
      {
        context: "Secondary",
        modifier: "list-group-item list-group-item-secondary",
      },
      {
        context: "Success",
        modifier: "list-group-item list-group-item-success",
      },
      {
        context: "Danger",
        modifier: "list-group-item list-group-item-danger",
      },
      {
        context: "Warning",
        modifier: "list-group-item list-group-item-warning",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <ul className="list-group">
          {this.state.listitems.map((listitem) => (
            <li className="bbaarr">
              <div class="row">
                <div class="col">{listitem.context}</div>
                <div class="col">{listitem.context}</div>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Item;
