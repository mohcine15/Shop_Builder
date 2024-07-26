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
    </div>
  );
}

export default App;
