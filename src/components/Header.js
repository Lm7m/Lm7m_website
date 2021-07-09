import React from "react";
import Typed from "react-typed";
export const Header = () => {
  return (
    <div>
      <div className="Header-image">
        <h2>Hello,this is</h2>
        <h1> Mohammed Nedame</h1>
        <h1>
          I am a
          <Typed
            className="typed-text"
            strings={["Software engineer", "Mobile devloper", "Web devloper"]}
            typeSpeed={60}
            backSpeed={80}
            loop
          />
        </h1>
      </div>
    </div>
  );
};

export default Header;
