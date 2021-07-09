import React from 'react';
// import Table from 'react-bootstrap/Table';
// import Head from './Head1'
import '../Karthick/Style.css';
import { NavLink } from 'react-router-dom';

const Join = () => {
    return (  
<div>
  <div>
    {/* <Head /> */}
    <div className="leftlogo">
          <img src="../images/logo.png " width="230px" height="120px"></img>
        </div>
          <div className="cheqhead">
            <h1>JOINING REPORT</h1>
          </div>
  </div>
  <div>
      <div>
      <br/><h5 className="jhead"><b> PLEASE FILL THESE DETAILS</b></h5><br/>
      </div>
          <form className="form1">
              <h5>Employee Name <input type="text" name="emp name" className="name"></input></h5><br/>
              <h5>Designation <input type="text" name="designation" className="name1"></input></h5><br/>
              <h5>Date Of Birth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date" name="dob"></input></h5><br/>
              <h5>Religion/Community <input type="text" name="religion/community" className="name2"></input></h5><br/>
              <h5>Gender <input type="text" name="gender" className="name3"></input></h5><br/>
              <h5>Date Of Joining &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date" name="Date of joining"></input></h5><br/>
              <h5>Father's Name <input type="text" name="father name" className="name4"></input></h5><br/>
              <h5>Mother's Name <input type="text" name="mother name" className="name5"></input></h5><br/>
              <h5>Marital Status &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="marital" ></input>Single &nbsp;
              <input type="radio" name="marital" ></input>Married</h5><br/>                                              
              <h5>No Of Childrens <input type="number" name="childrens" className="name6"></input></h5><br/>
              <h5>Gross(PA) <input type="number" name="grosspa" className="name7"></input></h5><br/>
              <h5>Performance Bonus(PA) <input type="number" name="performance bonus" className="name8"></input></h5><br/>
              <h5>CTC <input type="text" name="CTC" className="name9"></input></h5><br/>
           
          </form>  

          <br/><div>
                  <br/><h5  className="jhead"><b>FOR OFFICE USE ONLY</b></h5><br/>
            </div>
            <form className="form2">
              <h5>Employee No. <input type="text" name="empno" className="e1"></input></h5><br/>
              <h5>State <input type="text" name="state" className="e2"></input></h5><br/>
              <h5>Location<input type="text" name="location" className="e3"></input></h5><br/>
              <h5>Function<input type="text" name="function" className="e3"></input></h5><br/>
              <h5>Grade <input type="text" name="Grade" className="e5"></input></h5><br/>
              <h5>Designation<input type="text" name="designation" className="e4"></input></h5><br/>
              <h5>Position <input type="text" name="position" className="e6"></input></h5>

            </form>
  </div>


 
  {/* <NavLink to="/Content" >Next</NavLink> */}


    </div>
    );
}
 
export default Join;