// Form.js
import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <form className="form">
            <div className="form-group">
                <label>Nom du Website</label>
                <input type="text" placeholder="Nom du Site Web" />
            </div>
            <div className="form-group">
                <label>Logo du Website</label>
                <input type="file" />
            </div>
            <div className="form-group">
                <label>Nom de Domaine</label>
                <input type="text" placeholder="Nom de Domaine" />
            </div>
            <div className="form-group">
                <label>Schéma de couleurs du site web</label>
                <input type="color" />
            </div>
            <div className="form-group">
                <label>Police du site web</label>
                <input type="color" />
            </div>
            <div className="form-group">
                <label>Statut du site web</label>
                <select>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            <div className="form-group">
                <label>URL de la bannière d'image de la page d'accueil</label>
                <input type="file" />
            </div>
            <div className="form-group">
                <label>Description de la page d'accueil</label>
                <textarea placeholder="Description de la page d'accueil"></textarea>
            </div>
            <div className="form-group">
                <label>URL de la bannière d'image de la page à propos</label>
                <input type="file" />
            </div>
            <div className="form-group">
                <label>Description de la page à propos</label>
                <textarea placeholder="Description de la page à propos"></textarea>
            </div>
            <div className="form-group">
                <label>URL de la bannière d'image de la page contact</label>
                <input type="file" />
            </div>
            <div className="form-group">
                <label>Description de la page contact</label>
                <textarea placeholder="Description de la page contact"></textarea>
            </div>
            <div className="form-group">
                <label>Contact via numéro du téléphone</label>
                <input type="text" placeholder="Numéro de téléphone" />
            </div>
            <div className="form-group">
                <label>Contact par e-mail</label>
                <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <label>Lien Instagram</label>
                <input type="text" placeholder="Lien Instagram" />
            </div>
            <div className="form-buttons">
                <button type="button" className="prev-button">Précédent</button>
                <button type="submit" className="next-button">Suivant</button>
            </div>
        </form>
    );
}

export default Form;
