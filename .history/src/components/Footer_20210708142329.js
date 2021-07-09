import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const Footer = () => {
    return (
        <div className="Footer">
           <div className="Up">
               hi
           </div>
           <div className="copyright">
               


        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
        </div>
    )
}

export default Footer
