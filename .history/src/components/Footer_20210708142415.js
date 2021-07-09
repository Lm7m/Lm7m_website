import React from 'react'
import { MDBContainer } from "mdbreact";
const Footer = () => {
    return (
        <div className="Footer">
           <div className="Up">
               hi
           </div>
           <div className="copyright">
               


        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.Lm7m.com"> Lm7m.com </a>
        </MDBContainer>
      </div>
        </div>
    )
}

export default Footer
