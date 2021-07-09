import React from 'react';
import './famParticular.css'

function FamParticular(props) {
    return (
        <div className="famp">
            <div className="f_head">
                <h5>Family Particulars of Insured Person</h5>
            </div>
            <div className="f_table">
                <table>
                    <thead>
                        <tr>
                            <th width="5%">SI.NO</th>
                            <th width="30%">Name</th>
                            <th width="15%">Date of Birth/Age as on date of filling form</th>
                            <th width="17.5%">Relationship with the Employees</th>
                            <th width="10%" colSpan="2" >Whether residing with him/her?</th>
                            <th width="20%" colSpan="2">If 'No', state place of Residence</th>
                        </tr>
                    </thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Yes</td>
                        <td>No</td>
                        <td>Town</td>
                        <td>State</td>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td> <input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td><input type="text" className="name" /></td>
                        <td> <input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                    </tr>

                </table>
            </div>
        </div>
    );
}

export default FamParticular;