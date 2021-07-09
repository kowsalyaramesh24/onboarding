import React from 'react';
import Table from 'react-bootstrap/Table'
import { Navbar,NavbarBrand,NavLink,Nav,Form,FormControl,Button } from 'react-bootstrap';
import '../Karthick/Head1.css'

const Head1 = () => {
    return ( 
    
      <Navbar className ="navbar" variant="Transparent">
      <Navbar.Brand href="#home">
        <img src='../images/logo HHF.png' height='80px' width='80px'></img>&nbsp;&nbsp;
       <b className="head"> HINDUJA HOUSING FINANCE</b></Navbar.Brand>
      <div className="leftnav"><Nav className="mr-auto">
      <Nav.Link href="/">About</Nav.Link>
      <Nav.Link href="/Dc">Document Checklist</Nav.Link>
      <Nav.Link href="/Apply">Apply</Nav.Link>
      <Nav.Link href="/joining">Joining Report</Nav.Link>
      <Nav.Link href='/employ'>Employee ID</Nav.Link>
      <Nav.Link href="/cheque">Cheque leaf</Nav.Link>
        
      </Nav>
      </div> 
      
      <h3></h3>
     </Navbar> 
    
     );
}
 
export default Head1;

