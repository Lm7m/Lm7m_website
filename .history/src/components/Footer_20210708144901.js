import React from 'react'
import { MDBContainer } from "mdbreact";
const Footer = () => {
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
    return (
        
        <div className="Footer">
           <div className="Up">
           <div class="col footer-social">
	                    	<a href="https://www.Lm7m.com"><i class="fab fa-facebook-f"></i></a> 
							<a href="https://www.Lm7m.com"><i class="fab fa-twitter"></i></a> 
							<a href="https://www.Lm7m.com"><i class="fab fa-google-plus-g"></i></a> 
							<a href="https://www.Lm7m.com"><i class="fab fa-instagram"></i></a> 
							<a href="https://www.Lm7m.com"><i class="fab fa-pinterest"></i></a>
	                    </div>
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
