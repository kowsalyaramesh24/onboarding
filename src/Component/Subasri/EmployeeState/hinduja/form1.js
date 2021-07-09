import React from 'react';
import Header from './header';
import NomineeDetails from './nomineeDetails';
import Two_tables from './two_tables';
import FamParticular from './famParticular';
import Footer from './footer';
function Form1(props) {
    return (
        <div>

            <div>
                <Header />
            </div>
            <div>
                <Two_tables />
            </div>
            <div>
                <NomineeDetails />
            </div>
            <div>
                <FamParticular />
            </div>
            <div>
                <Footer />
            </div>
            
        </div>
    );
}

export default Form1;