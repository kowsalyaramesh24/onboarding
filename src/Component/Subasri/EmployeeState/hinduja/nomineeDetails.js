import React from 'react';
import './Nominee.css';

function NomineeDetails(props) {
    return (
        <div className="nominee">
            <div className="n_head">
                <h5>Details of Nominee</h5>
            </div>
            <div className="c">
                <h5>Details of Nominee u/s 71 of ESI Act 56(2) of ESI (Central) Rules, 1950 for payment of cash benefit in the event of death</h5>
            </div>
            <div className="nominee_table">
                <table>
                    <tr>
                        <th width="30%">Name</th>
                        <th width="20%">Relationship</th>
                        <th width="50%">Address</th>
                    </tr>
                    <tr>
                        <td> <input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                        <td><input type="text" className="name" /></td>
                    </tr>

                </table>
                <p className="declare">I hearby declare that the particulars given by me are correct to the best of my knowledge and belief.I undertake to intimate the corporation any changes in the memebership of my family within 15 days of such change.</p>
                <p className="sign1">Counter signature by employer</p>
                <p className="sign2">Signature T.I of I.P</p>
            </div>



        </div>
    );
}

export default NomineeDetails;