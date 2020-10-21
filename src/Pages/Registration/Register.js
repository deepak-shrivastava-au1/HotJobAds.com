import React, {Component} from 'react';
import {  Link } from "react-router-dom";







export default class Registration extends Component{
 
  render() {

      return(
          <>
         <div className = "container">
             <div className = "row RegisterRow1">
                 <div className = "col-lg-12">
                     <h5 id = "registerHeading">Registration</h5>
                     <br/>
                     <p>Select One Of The Following :</p>
                 </div>
             </div>
             <div className = "row RegisterRow2">
                 <div className = "col-lg-12">
                 <Link className = "registrationOption" to='/candidateRegister' >Candidate</Link> 
                 <br/>
                 <Link className = "registrationOption" to='/employerRegister' > Employer</Link> 
                 </div>
             </div>
         </div>
          </>
      );
  }
};