import React from 'react';
import './header.css';
import logo from './logo.png'

function Header(props) {
    return (
        <div className="heads">

            <div className="Header">




                <img src={logo} alt="logo"></img>


                <div className="head">
                    <h1>Employees State Insurance Cooperation</h1>
                </div>
            </div>
            <h5 className="side">FORM-1</h5>
            <p className="para">To filled in by the employee after reading instructions overleaf. Two Postcard Size photographs are to be attached with this form is free of cost</p>
        </div>
    );
}

export default Header;