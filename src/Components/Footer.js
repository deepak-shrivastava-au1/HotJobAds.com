import React, {Component} from 'react';
import { render } from '@testing-library/react';
import {  Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";






export default class Footer extends Component{
 
  render() {

      return(
          <>
         <div className = "container">
             <div className = "row footerRow1">
                 <div className = "offset-md-3 col-lg-6">
                 <Link className = "footerMenu" to='/myAccount' >Home</Link> 
                 <Link className = "footerMenu" to='/myAccount' > Contact</Link> 
                 <Link className = "footerMenu" to='/myAccount' >Post Job</Link> 
                 <Link className = "footerMenu" to='/myAccount' >Find Jobs</Link> 
                 </div>
             </div>
             <div className = "row footerRow2">
                 <div className = "col-lg-12">
                     <p>@Copyright 2020 <Link target = "_blank" style = {{color: 'gray'}} to = "www.hotjobads.com">HotJobADS.com</Link></p>
                 </div>
             </div>
         </div>
          </>
      );
  }
};