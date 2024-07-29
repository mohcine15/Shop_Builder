<<<<<<< HEAD
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login_Register/Login.jsx';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/Login_Register/NavBar_log_reg/NavBar.jsx';
import Register from './components/Login_Register/Register.jsx';

function App() {
  const [currentComponent, setCurrentComponent] = useState('register');

  const showLogin = () => {
    setCurrentComponent('login');
  };

  const showRegister = () => {
    setCurrentComponent('register');
  };

  return (
    <div className="App">
      <div className="main-content">
      <NavBar showLogin={showLogin} showRegister={showRegister} />
        {currentComponent === 'register' ? (
          <Register showLogin={showLogin} />
        ) : (
          <Login showRegister={showRegister} />
        )}
        <Footer />
      </div>
=======
import React from "react";
import Nav from "./components/Navbar/navbar";
import Head from "./components/Header/header"
import Avt from "./components/Avantage/avantage"
import Tmp from "./components/Template/template"
import Ctc from "./components/Contact/Contact"
import Foot from "./components/Footer/Footer"


import { SliderData } from "./components/Template/sliderData";

function App(){
  return(
    <div>
      <Nav />
      <Head/>
      <Avt />
      <Tmp slides={SliderData}/>
      <Ctc />
      <Foot />
 
>>>>>>> login_register
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App ;
>>>>>>> login_register
