import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card" id={this.props.id}>
        <div className="img"></div>
        <div className="card-info">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          {this.props.button === "true" ? (
            <button className="card-button">
              Read More
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Card;
