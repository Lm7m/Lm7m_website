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
        <div className="list-group">
          {this.state.listitems.map((listitem) => (
            <div className="bbaarr">
              <div class="row">
                <div class="col">{listitem.context}</div>
                <div class="col">
                    <img src="https://1000logos.net/java-logo/"></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Item;
