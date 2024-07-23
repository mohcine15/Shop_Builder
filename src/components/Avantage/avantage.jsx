import React, {useEffect} from "react"
import '../Avantage/avantage.css'
import img1 from "../../Assets/pic1.png"

const Avgt = () => {
    return(
      <section className="avantagecont">
        <div className="secTitle">
        <h2 className="title" data-aos="fade-right">
           Pourquoi <br/>  Shop Builder ?
        </h2>
        </div>
        
        <div class="container" >
        <div class="left" data-aos="fade-right">
            <ul>
                <li>. Planification et recherche</li>
                <li>. Enregistrement de domaine</li>
                <li>. Hébergement</li>
                <li>. Design et développement</li>
                <li>. Configuration des fonctionnalités</li>
                <li>. Test et sécurité</li>
            </ul>
        </div>
        <div class="middle" data-aos="fade-right">
            <span>ou</span>
        </div>
        <div class="right" data-aos="fade-right">
            <ul>
                <li>. S’inscrire, se connecter</li>
                <li>. Remplir un simple formulaire</li>
                <li>. Votre site est bien généré</li>
            </ul>
            <img src={img1} className="imgqst"></img>
        </div>
    </div>
    <div className="btnContainer">
        <button data-aos="fade-up" className="btnavt"><a href="#">Créer votre site !</a></button>
    </div>
      </section>
    );
}
export default Avgt;