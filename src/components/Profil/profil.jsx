import React, { useState } from 'react';
import '../Profil/profil.css';
import img1 from '../../assets/hihi.png';
import img2 from '../../assets/po.jpg';
import webcamIcon from '../../assets/vv.jpg'; 

function UserProfileCard({ onClose }) {
  const handleWebcamClick = () => {
    console.log('Webcam icon clicked!');
  };

  return (
    <div className="user-profile-card">
      <button className="close-button" onClick={onClose} aria-label="Close">&times;</button>
      <div className="profile-container">
        <img src={img2} alt="Profile" className="profile-pic" />
        <button className="webcam-button" onClick={handleWebcamClick} aria-label="Webcam">
          <img src={webcamIcon} alt="Webcam Icon" className="webcam-icon" />
        </button>
      </div>
      <div className="user-info">
        <h2>Nom et prénom</h2>
        <p>Nomprenom@gmail.com</p>
        <div className="user-actions">
          <button>Informations</button>
          <button>Aide</button>
          <button>Déconnexion</button>
          <button>Mode Sombre</button>
        </div>
      </div>
    </div>
  );
}

function Prof() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleShowCard = () => {
    setIsCardVisible(true);
  };

  const handleCloseCard = () => {
    setIsCardVisible(false);
  };

  return (
    <div className="container">
      {isCardVisible && <UserProfileCard onClose={handleCloseCard} />}
      <header className="header">
        <h1>Votre Espace Client</h1>
        <div className="greeting-stats-container">
          <img src={img1} alt="Descriptive Text" className="left-image" />
          <div className="greeting-stats">
            <p className="greeting">Bonjour, Nizar Hakouane</p>
            <p className="member-since">Membre depuis : .....</p>
            <p className="stats">Stats : 4 sites créés, 0 annulés.</p>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="personal-info">
          <button className="button3" onClick={handleShowCard}>Infos Personnelles</button>
        </section>
        <section className="config-panel">
          <div className="config-header">
            <h2>Panneau de configurations</h2>
          </div>
          <div className="content">
            <div className="buttons">
              <div className="button-container">
                <button className="button1">Créer un nouveau Site Web</button>
                <p className="subtext1">Une nouvelle idée ou Un nouveau projet ?<br /> Développer votre présence en Ligne !</p>
              </div>
              <div className="button-container">
                <button className="button2">Voir Vos Sites Web</button>
                <p className="subtext2">Voir Vos Projets Réalisés!</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>Besoin d'aide ? Consultez notre guide d'utilisation.</p>
      </footer>
    </div>
  );
}

export default Prof;
