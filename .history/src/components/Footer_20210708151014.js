import React from "react";
import { MDBContainer } from "mdbreact";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Up">
        <a href="https://www.Lm7m.com">
          <i id="gh" class="fab fab fa-github"></i>
        </a>
        <a href="https://www.Lm7m.com">
          <i id="ig" class="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/Lm7m">
          <i id="li" class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCioF0UKQVQpF6xzyTmqe15g">
          <i id="yt" class="fab fa-youtube"></i>
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
