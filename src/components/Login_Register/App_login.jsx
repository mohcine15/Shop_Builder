import React, { useState } from 'react';
import './App.css';
import Login from './Login.jsx';
import Footer from '../Footer/Footer.jsx';
import NavBar from './NavBar_log_reg/NavBar.jsx';
import Register from './Register.jsx';

function App_log_reg() {
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
    </div>
  );
}

export default App_log_reg;
