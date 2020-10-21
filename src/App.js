import React from 'react';
import './App.css';
import Navibar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import CandidateRegister from './Pages/Registration/CandidateRegister';
import EmployerRegister from './Pages/Registration/EmployerRegister';
import Registration from './Pages/Registration/Register';
import SignIn from './Pages/SignIn/SignIn';
import MyAccount from './Pages/MyAccount/CandidateAccount';
import MyResumes from './Pages/MyAccount/MyResume';



function App() {
  return (
    <BrowserRouter > 
        <Navibar />
        <Route exact path='/' component = {Home} />
        <Route exact path='/registration' component = {Registration} />
        <Route exact path='/candidateRegister' component = {CandidateRegister} />
        <Route exact path='/employerRegister' component = {EmployerRegister} />
        <Route exact path='/signIn' component = {SignIn} />

        <Route exact path='/myAccount' component = {MyAccount} />
        <Route exact path='/myResume' component = {MyResumes} />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
