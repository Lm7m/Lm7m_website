import React from "react";
import { MDBContainer } from "mdbreact";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Up">
        <a href="https://github.com/Lm7m">
          <i id="gh" class="fab fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/lm7m/?hl=en">
          <i id="ig" class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/mohammed-nedame-6a844419a/">
          <i id="li" class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCioF0UKQVQpF6xzyTmqe15g">
          <i id="yt" class="fab fa-youtube"></i>
        </a>
      </div>
      <div className="copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.Lm7m.com" id ="gh">Lm7m.com </a>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Footer;
