import React, {Component} from 'react';
import logo from '../Sweatha/logo.png';
import '../Secondpage/Content.css';
import { NavLink } from 'react-router-dom';

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  state ={
    contentImg:'https://thumbs.dreamstime.com/b/hier-met-de-hand-geschreven-teken-99846009.jpg'
  }
  contentHandler = (a) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({contentImg: reader.result})
      }
    }
    reader.readAsDataURL(a.target.files[0])
  };

  
  render() {    
    const {contentImg} = this.state
    return (
        <div>
      <div className="header">
        <img src={logo}  alt="logo" className="img_logo_content"/> 
        <div className="head"> 
          <h1 style={{top:"0px"}}>Conditions of Employment
            Conflicts of Interests
            <br/>Contd...</h1></div>
      
        
        <div className="head_1">
        <h5 className="h5_content">CONFLICTS OF INTEREST</h5>
        <div className="content-para">
        <p>
        Conflicts of interest may arise where an employee is associated in a private capacity with a body or organization which business with Hinduja Housing 
Finance Limited<br /><br />
It is the purpose of this Personal Policy to provide a code of practice for the guidance of all employees concerned. References in this document in 
this document to the Company will, where relevant, also be taken as references to the Company’s subsidiaries.<br /><br />
The Company has no wish to enquire unjustifiably into the personal affairs of its employees of members of their families, and respects the right of 
all employees to participate in outside activities and relationship which do not conflict with their positions as employees. Nevertheless, significant 
financial interest held by any employee or by close relatives of an employee in non-Company organizations with which the Company has a business 
relationship could involve actual or potential conflict of interests<br /><br />
It has, therefore, been decided that the Company should have on record, in strict confidence, information concerning significant interest of employees 
and their close relatives in those organizations with which the Company has a business involve no serious conflict of interest, disclosure to the Company 
should protect the reputation of employees and permit the Company to express an opinion in any situation which could involve misunderstanding.<br /><br />
Employees who hold positions with the Company which requires them to do business on the Company’s behalf with outside organizations. Will be 
expected to report the following <br /><br />
<strong>A. Any interest, financial or otherwise, which they or their close relatives have in:</strong><br />
<ul>I. Suppliers of goods and/or services to the company;</ul>
<ul>II. Distributors or Dealers for the Company;</ul>
<ul>III. Companies in which the Company has a minority share holding or at least 10% of any class of issued shares; or </ul>
<ul>IV. Any other business which has at the relevant time a business relationship with the Company, except in so far as such interests amount to a 
bonafide investment in a Company which is quoted on the recognized Stock Exchange to an extent not exceeding 1% of shareholding.</ul>
<strong>B. Any personal interest or value which they or their close relatives might have in any transaction or proposed transaction between the Company 
and an outside person or organization.</strong><br />
<ul>The categories of employees required to report will include all Executives in the Company’s services, Executives joining the Company’s services 
in future, and other employees identified for this purpose by the Divisional Heads in their own areas of responsibility.</ul>
<ul>No action in respect of an interest will be taken by the Company without prior discussion with the employee concerned. Factors to be taken into 
account will be the type of interest, how and when it was acquired and the Company’s interest in the particular situation.</ul></p>
           <h5 className="h5_content">INSIDER DEALINGS</h5>
           <p>
           Employees of the Company who obtain or have access to information that affects,or is likely to affect, the Stock Exchange price of the Company’s 
shares must not directly or indirectly disclose that information.<br /><br />
Employees must not directly or indirectly exploit or use for profit any information obtailed in the course of employment.<br />
</p>
<h5 className="h5_content">ACTION ON BEHALF OF NON-COMPANY ORGANISATIONS</h5>
    <p>
    Employees should not render services to, represent, be a director or employee of, an organization with which the Company has at the relevant time 
a business relationship, whether for reward or not, outside the normal course of their employment with the Company, without the written consent of 
the Managing Director who will consult with the Company Secretary before giving such consent.<br /><br />
If a close relative of an employees should render services to a non-company organization in the way described above, the fact should be declared so 
the Company may be given the opportunity of advising the employee whether or not it considers that a conflict of interest might arise
</p>
    <h5 className="h5_content">DECLARATION:</h5>
    <p>
    Every employee must sigh the declaration form (ANNEXURE ‘A’) if he nothing to report under paras ‘A’ & ‘B’ and/or under Section ‘Activity on behalf 
of non-company organizations’ above.<br /><br />
           </p>
    <h5 className="h5_content">ADMINISTRATION OF THE POLICY</h5>
           <p>
           The administration of this policy will be responsibility of Human Recourses Dept.<br /><br />
           <strong> Note: Obvious examples of ‘close relatives’ are: Husband, wife, son, daughter, brother, sister, mother, father. Other cases
 may arise, however, eg step-mother, step-father, mother-in-law. In cases of doubt, reference should be made to
 the HR</strong>
           </p>
           <h5 className="h5_content">DECLARATION BY EMPLOYEE UNDER HUMAN RESOURCE POLICY</h5>
           <h6 className="h6_content">(To be filled in, signed and forwarded to Head-HR)</h6>
           <p>
           Having read the HR policy on Conflicts of interest, I can confirm that:<br /><br />
A. Neither I nor any of my close relative has any interest in organizations outside Hinduja Housing Finance of 
the type defined in paragraphs A&B of the policy.<br /><br />
and<br /><br />
B. Neither I nor any close relative of mine renders services to any organizations outside Hinduja Housing 
Finance Limited. In the way defined in the Section ‘Activity on behalf of Non-company Organizations’ in 
the policy.<br /><br />
I undertake to inform you if my position, or that of any close, relative, should change in respect of reportable 
interests.<br /><br />
           </p></div>
          
<div className="form-content">

      <form>
  
         

         <div className="Name_content"> 
           <label>Name:</label> 
           <input name="name" />
         
           </div>
           <div className="department"> 
         <label>Department:</label> 
           <input name="dept" />
           </div>
         
         <div className="Location">
         <label>Location:</label> 
           <input name="loc" />
           </div>
           <div className ="sign_content">  
           
          <div className="sign-content-con">
              <img src={contentImg} alt="" id="image-sign-content-con" className="imagescontent" style={{marginLeft:"850px",width:"130px",height:"115px",top:"0px"}}/> </div>
          <input type="file" name="image-upload-content-con" id="in_content" accept="imagesign/*" onChange={this.contentHandler} className="imagescontent" style={{display:"none"}} ></input>
          <div className="label-content-con">
              <label htmlFor="in_content" className="image-upload-content-con"  style={{marginLeft:"985px",width:"130px",height:"115px"}}
 >Signature</label>
          </div>    
         
          </div>
         </form>
         </div>
      </div>
       </div>



       <div className="next" style={{marginTop:"2545px"}}>

<NavLink to="/Create">Next</NavLink>
</div>

       </div>
       
        );
}
}

export default Content;