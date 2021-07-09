import React from 'react'
import Image from 'react-bootstrap/Image'
import Head from './Head1'
import './Img.css'
// import './App.css'
import Imageupload from './Imgupload';
import { getByPlaceholderText } from '@testing-library/react'
import { NavLink } from 'react-router-dom';
const Empid = () => {
    return ( 

      <div>

          {/* <Head /> */}
        <div className="leftlogo">
          <img src="../images/logo.png " width="230px" height="120px"></img>
        </div>
          <div className="Emphead">
            <h1>EMPLOYEE ID</h1>
          </div>
          <div className="img2" >
          
          <Imageupload />
   
           </div>
         <br/><br/><br/>
          <form className="form">
            <h5>Name<input type="text" name="name" className="emp1"></input></h5><br/>
            <h5>Employee code<input type="number" name="empcode" className="emp1"></input></h5><br/>
            <h5>Residence Address<textarea name="Residence Address" cols="25" rows="4" className="emp1"></textarea></h5><br/>
            <h5>Office Address<textarea type="textarea" name="office address" cols="25" rows="4" className="emp1"></textarea></h5><br/>
            <h5>Emergency Contact No<input type="text" name="no" className="emp1"></input></h5><br/>
            <h5>Blood Group<input type="text" name="bloodgroup" className="emp1"></input></h5><br/>
            <h5>Enclose recent passport size photograph<br/> With tie for men, saree / salwar for women<input type="radio" name="check" className="emp7" >
            </input>Yes
            <input type="radio" name="check" className="emp7" ></input>No </h5><br/>
            
          </form>

            
          <NavLink to="/Cheq" >Next</NavLink>
        </div>
      
     );
}
 
export default Empid;