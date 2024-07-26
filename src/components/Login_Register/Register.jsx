import React, { useState } from 'react';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash, faUser, faPhone, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Register = ({ showLogin }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="register-box">
      <div className="login-container">
        <h3>J'ai déjà un compte ShopBuilder </h3>
        <button className='Button_sign_up' onClick={showLogin}>SE CONNECTER</button>
      </div>
      <div className="register-container">
        <h2>Saisissez vos informations pour continuer.</h2>
        <form>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input type="text" id="firstName" required placeholder='Prénom'/>
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input type="text" id="lastName" required placeholder='Nom de famille'/>
          </div>
          <div className="input-group">
            <label htmlFor="gender">Genre :</label>
            <div className="gender-options">
              <label>
                <input type="radio" name="gender" value="M" required /> M
              </label>
              <label>
                <input type="radio" name="gender" value="F" required /> F
              </label>
            </div>
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <input type="date" id="dob" required placeholder='Date de naissance'/>
          </div>
          <div className="input-group">
            <label htmlFor="type">Type :</label>
            <div className="type-options">
              <label>
                <input type="radio" name="type" value="Individu" required /> Individu
              </label>
              <label>
                <input type="radio" name="type" value="Entreprise" required /> Entreprise
              </label>
            </div>
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input type="email" id="email" required placeholder='Adresse e-mail'/>
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <input type="tel" id="phone" required placeholder='Téléphone portable'/>
          </div>
          <div className="input-group password-group">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input type={passwordVisible ? 'text' : 'password'} id="password" required placeholder='Mot de passe'/>
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className="toggle-password"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="input-group password-group">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input type={confirmPasswordVisible ? 'text' : 'password'} id="confirmPassword" required placeholder='Confirmer le mot de passe'/>
            <FontAwesomeIcon
              icon={confirmPasswordVisible ? faEyeSlash : faEye}
              className="toggle-password"
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="terms" required/>
            <label htmlFor="terms">J'accepte les Conditions d'Utilisation</label>
          </div>
          <button type="submit" className='Button'>S'INSCRIRE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
