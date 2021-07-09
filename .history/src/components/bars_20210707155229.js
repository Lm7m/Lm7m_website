import React from "react";

class bars extends React.Component {
  render() {
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    
    return (
        <ul>
      <div className="card" >
        <div className="img"></div>
        <div className="card-info">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          {this.props.button === "true" ? (
            <button className="card-button" onClick={() => openInNewTab(this.props.link)}> 
              Read More
            </button>
          ) : null}
        </div>
      </div>
      </ul>
    );
  }
}

export default Card;
