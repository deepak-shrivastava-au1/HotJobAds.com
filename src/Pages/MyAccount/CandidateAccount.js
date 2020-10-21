import React, {Component} from 'react';
import {  Link } from "react-router-dom";
import $ from "jquery";
import MyResumes from './MyResume';




export default class MyAccount extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'My Resume'
        }
    }

    myResume = () =>{
        $("#myProfile")
        .removeClass()
        .addClass("d-none");

        $("#myResume")
        .removeClass()
        .addClass("d-block");

        this.setState({
            title: 'My Resume'
        })
    }
    myProfile = () =>{
        $("#myResume")
        .removeClass()
        .addClass("d-none");

        $("#myProfile")
        .removeClass()
        .addClass("d-block");

        this.setState({
            title: 'My Profile'
        })
    }
 
  render() {

      return(
          <>
         <div className = "container">
             <div className = "row CandidateAccountRow1">
                 <div className = "col-lg-12">
                <h4 id = "heading">My Account</h4>
                 </div>
             </div>
             <div className="row CandidateAccountRow2">
                <div id="sideMenu" className="col-lg-3 ">
                    <button className="Newtask">My Account</button>
                    <br />
                    <br/>
                    <Link to="/myAccount">
                    <div onClick = {this.myResume} className = "myAccountMenu1"> <i className="fa fa-document"></i> My Resumes</div>
                    </Link>
                    <br />
                    <br />
                   <Link to="/myAccount">
                   <div onClick = {this.myProfile} className = "myAccountMenu2"> <i className="fa fa-people"></i> My Profile </div>
                    </Link>     
                </div>

             <div className = "col-lg-9">
                 <div id = "myAccountTitle" className = "row">
                    <div className = "col-sm-12">
                    <h5 style = {{textAlign:'center'}}>{this.state.title}</h5>
                    </div>
                 </div>
                 <div id = "myResume" >
                     <MyResumes />
                 </div>

                 {/* OR */}

                 <div id = "myProfile">
                     {/* <CandidateProfile /> */}
                 </div>
             </div>
            </div>
         </div>
          </>
      );
  }
};