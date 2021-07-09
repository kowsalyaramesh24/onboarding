import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Foot = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h4 className="title">
            <img src='../images/logo HHF.png' height='70px' width='70px'></img>&nbsp;&nbsp;
                <b>HINDUJA HOUSING FINANCE</b></h4>
            
            

          </MDBCol>
          <MDBCol md="6">
            <h5 className="title"><b>Details</b></h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Form</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Conditions of Employment Conflicts of Interests</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Code of Conduct</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Gratuity Nomination Form</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.hindujahousingfinance.com/"> IndhujaHousingFinance.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Foot;