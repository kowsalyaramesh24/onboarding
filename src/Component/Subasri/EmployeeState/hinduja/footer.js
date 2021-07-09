import React from 'react';
import './footer.css'

function Footer(props) {
    return (
        <div class="footer">
            <div className="f_head">
                <h5>ESI Corporation Temporary Identity Card</h5>
            </div>

            <div class="info">
                <label>Name (in block letters)</label>
                <input type="text" className="label"></input><br />

                <label>Insurance No</label>
                <input type="number" className="label"></input><br />

                <label>Branch Office</label>
                <input type="text" className="label"></input><br />

                <label>Date of appointment</label>
                <input type="date" className="label"></input><br />

                <label>Employers Code no  and Address</label>
                <textarea rows="4" cols="50" className="comment" form="usrform">
                </textarea>
            </div>
            <div>
                <label className="v_date">Validity</label>
                <input type="date" className="v_date"></input><br />

                <label className="v_date">Dated</label>
                <input type="date" className="v_date"></input><br />

                <p className="sign3">Signature/T.I of I.P</p>
                <p className="i_sign">Signature of B.M with Seal</p>
            </div>






        </div>


    );
}

export default Footer;