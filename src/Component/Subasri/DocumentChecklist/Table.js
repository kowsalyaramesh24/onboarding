import React from 'react';
import '../DocumentChecklist/styles.css';
import { NavLink } from 'react-router-dom';
export default function Table() {
  return (
    <div className="container">
      <div className="one">
        <h2> Document's Checklist</h2>
      </div>
      <div className="two">
        <ol>
          <li>Step 1 and 2 for HR Purpose</li>
          <li>You may check from Step 3 onwards</li>
          <li>
            Please mention (Y Or N) on each box against the form that is duly
            filled/submitted
          </li>
        </ol>
      </div>
      <div className="three">
        <table id="one">
          <tr>
            <th width={50}>Step 1</th>
            <th width={1189}>HR Only</th>
            <th width={60}>Yes/No</th>
            <th>Remarks</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Candidate Resume</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>2</td>
            <td>Interview Evaluation Sheet</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>3</td>
            <td>Thomas Profiling Applicable as per grades</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>4</td>
            <td>Pre Employment Medical Report</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>5</td>
            <td>BGV Form-candidate Declaration</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>6</td>
            <td>BGV Report</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>7</td>
            <td>Compensation and Designation final sheet</td>
            <td />
            <td />
          </tr>
          <tr>
            <td>8</td>
            <td>Offer letter generated and dispatched date</td>
            <td />
            <td />
          </tr>
        </table>
        <div className="four">
          <table id="two">
            <tr>
              <th width={50}>Step 2</th>
              <th width={1189}>
                To be submitted by Candidate on the day of Joining
              </th>
              <th width={60}>Yes/No</th>
              <th>Remarks</th>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Resignation Acceptance/Service/Relieving letter of current
                employer
              </td>
              <td />
              <td />
            </tr>
            <tr>
              <td>2</td>
              <td>Joining Report</td>
              <td />
              <td />
            </tr>
          </table>
        </div>
        <div className="five">
          <table id="three">
            <tr>
              <th width={50}>Step 3</th>
              <th width={1189}>Candidate Personal Documents</th>
              <th width={60}>Yes/No</th>
              <th>Remarks</th>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Educational Proof:10th/12th/Diploma Certificate/Degree/Post
                Graduate/Other Qualifications(provisional/all the mark sheet)
              </td>
              <td />
              <td />
            </tr>
            <tr>
              <td>2</td>
              <td>
                Address proof/age proof-Driving license,Voter ID,passport,Aadhar
                Card,Ration Card
              </td>
              <td />
              <td />
            </tr>
            <tr>
              <td>3</td>
              <td>Pan Card Copy</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>4</td>
              <td>Recent passport size color photograph-3nos</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>5</td>
              <td>
                Copy of previous two company proof(Relieving/Service letter)
              </td>
              <td />
              <td />
            </tr>
          </table>
        </div>
        <div className="six">
          <table id="four">
            <tr>
              <th width={50}>Step 4</th>
              <th width={1189}>
                To be submitted by the candidate before Joining
              </th>
              <th width={60}>Yes/No</th>
              <th>Remarks</th>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Original Offer letter Acceptance copy/General Service conditions
                dul signed/Code of Conduct/Company Declaration Form(Do's and
                Don't's)
              </td>
              <td />
              <td />
            </tr>
            <tr>
              <td>2</td>
              <td>Company Application Form</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>3</td>
              <td>Confidentially Undertaking</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>4</td>
              <td>PF-Form2</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>5</td>
              <td>PF Declaration-Form11</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>6</td>
              <td>ESI-Form1</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>7</td>
              <td>Gratuity-Form 'F'</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>8</td>
              <td>LTA Declaration(If Applicable)</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>9</td>
              <td>Nomination for receiving Full and Final settlement</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>10</td>
              <td>Group Medical Insurance-Family Insurance</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>11</td>
              <td>ID Card Application Family</td>
              <td />
              <td />
            </tr>
            <tr>
              <td>12</td>
              <td>Cheque Leaf/Bank Details-Axis(If any)</td>
              <td />
              <td />
            </tr>
          </table>
        </div>
        <div className="seven">
          <h3 style={{ paddingLeft: 60 }}> Employee Name: </h3>
          <h3 style={{ paddingLeft: 60 }}> Employee Signature:</h3>
          <h3 style={{ paddingLeft: 60 }}> Date:</h3>
        </div>
        <div className="eight">
          <h3 style={{ marginLeft: 200 }}> HR Name:</h3>
          <h3 style={{ marginLeft: 200 }}> HR Signature:</h3>
          <h3 style={{ marginLeft: 200 }}> Date:</h3>
        </div>
      </div>
      <NavLink to='/'>next</NavLink>
    </div>
  );
}
