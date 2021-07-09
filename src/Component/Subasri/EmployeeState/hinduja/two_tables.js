import React from 'react';
import './two_tables.css';

function Two_tables(props) {
    return (
        <div>
            <div className="insured">
                <h5 >Insured Person's Particulars</h5>
            </div>
            <div className="i_form">

                <form>
                    <label>Insurance No</label>
                    <input type="number" className="label"></input><br />

                    <label>Name (in block letters)</label>
                    <input type="text" className="label"></input><br />

                    <label>Father's/Husband's Name</label>
                    <input type="text" className="label"></input><br />

                    <label>Date of Birth</label>
                    <input type="date" className="label"></input><br />

                    <label>Martial Status</label>
                    <input type="radio" value="Male" className="gender" /> Married
                    <input type="radio" value="Female" name="gender" /> Unmarried
                    <input type="radio" value="Other" name="gender" /> Widow<br />

                    <label>Sex</label>
                    <input type="radio" value="Male" className="gender" /> Male
                    <input type="radio" value="Female" name="gender" />Female<br />

                    <label>Present Address</label>
                    <textarea rows="4" cols="50" className="comment" form="usrform">
                    </textarea>

                    <label>Pin Code</label>
                    <input type="number" className="label"></input><br />

                    <label>E-mail Address</label>
                    <input type="email" className="label"></input><br />


                    <label>Permenant Address</label>
                    <textarea rows="4" cols="50" className="comment" form="usrform">
                    </textarea>

                    <label>Pin Code</label>
                    <input type="number" className="label"></input><br />

                    <label>E-mail Address</label>
                    <input type="email" className="label"></input><br />



                </form >
            </div>

            <div className="employee">
                <h5 >Employes's Particulars</h5>
            </div>
            <div className="i_form">

                <form>
                    <label>Employer's Code No.</label>
                    <input type="number" className="label"></input><br />

                    <label>Name Date of Appointment</label>
                    <input type="date" className="label"></input><br />

                    <label>Name and Address of the Employer</label>
                    <textarea rows="4" cols="50" className="comment" form="usrform">
                    </textarea>

                    <p className="phase">In case of any previous employment please fill up the details as under :-</p>

                    <label>Previous Ins No.</label>
                    <input type="number" className="label"></input><br />

                    <label>Employers Code No.</label>
                    <input type="number" className="label"></input><br />

                    <label>Name and Address of the Employer</label>
                    <textarea rows="4" cols="50" className="comment" form="usrform"></textarea>

                    <label>E-mail Address</label>
                    <input type="email" className="label"></input><br />


                </form >
            </div>




        </div >
    );
}

export default Two_tables;