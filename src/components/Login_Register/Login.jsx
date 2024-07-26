import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = ({ showRegister }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-box">
      <div className="login-container">
        <h2>J'ai déjà un compte ShopBuilder</h2>
        <form>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input type="email" id="email" required placeholder='Email' />
          </div>
          <div className="input-group password-group">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input type={showPassword ? 'text' : 'password'} id="password" required placeholder='Mot De Passe' />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="toggle-password"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Se souvenir de mon identifiant</label>
          </div>
          <button type="submit" className='Button'>SE CONNECTER</button>
        </form>
        <a href="/forgot-password" className="forgot-password">MOT DE PASSE OUBLIÉ ?</a>
      </div>

      <div className="signup-box">
        <h3>Nouveau Sur ShopBuilder ?</h3>
        <button className='Button_sign_up' onClick={showRegister}>S'INSCRIRE</button>
      </div>
    </div>
  );
}

export default Login;
