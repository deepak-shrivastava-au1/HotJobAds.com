import React, {Component} from 'react';
import { render } from '@testing-library/react';
import {  Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";






export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            jobTitle: '',
            location: ''
        }
    }


  render() {

      return(
          <>
         <div className = "container">
             <div className = "row">
                 <div className = "offset-md-3 col-lg-6">
                     <img src = "hotjobads.png" className = "hotjobads"></img>
                 </div>
             </div>
             <div className = "row jobSearch">
                 <div className = "offset-md-1 col-lg-4">
                     <i className = "fa fa-search"></i>
                     <input id = "jobTitle" type = "text" placeholder = "Job Title" value = '' />
                 </div>
                 <div className = "col-lg-4">
                     <i className = "fa fa-map-marker-alt"></i>
                     <input id = "jobTitle" type = "text" placeholder = "City Or State" value = '' />
                 </div>
                 <div className = "col-lg-2">
                     <button type = "submit" className = "findJobs">Find Jobs</button>
                 </div>
             </div>
         </div>
          </>
      );
  }
};