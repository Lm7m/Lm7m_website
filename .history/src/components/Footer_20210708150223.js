import React from "react";
import { MDBContainer } from "mdbreact";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Up">
        <a id="gh"href="https://www.Lm7m.com">
          <i class="fab fab fa-github"></i>
        </a>
        <a id="ig" href="https://www.Lm7m.com">
          <i class="fab fa-instagram"></i>
        </a>
        <a id="li"href="https://www.Lm7m.com">
          <i class="fab fa-linkedin"></i>
        </a>
        <a id="yt" href="https://www.Lm7m.com">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
      <div className="copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.Lm7m.com"> Lm7m.com </a>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Footer;
