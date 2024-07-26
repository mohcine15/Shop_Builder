// Form.js
import React, { useState } from 'react';
import './Form2.css';


const Form2 = () => {
    // Déclaration de l'état local pour le nombre de produits
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);

    // State for price
    const [price, setPrice] = useState(0);

    // Function to increase price
    const increasePrice = () => {
        setPrice((prevPrice) => (Number(prevPrice) + 1).toFixed(2));
    };

    // Function to decrease price
    const decreasePrice = () => {
        setPrice((prevPrice) => (Math.max(0, Number(prevPrice) - 1)).toFixed(2));
    };


    // Fonction pour mettre à jour la quantité
    const handleChange = (event) => {
        setQuantity(Number(event.target.value));
    };
    // Handle file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <form className="form">
            <div className="form-group">
                <label>Nom du Produit:</label>
                <input type="text" placeholder="Nom du Produit" />
            </div>
            <div className="form-group">
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="fileInput" style={{ display: 'block', marginBottom: '10px' }}>Upload a Photo:</label>
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ marginBottom: '10px' }}
                    />
                    {selectedImage && (
                        <div>
                            <img
                                src={selectedImage}
                                alt="Selected Preview"
                                style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="form-group">
                <h2>Nombre de produits:</h2>
                <input
                    type="range"
                    min="1"
                    max="1000"
                    value={quantity}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                />
                <p>Quantité sélectionnée : {quantity}</p>
            </div>
            <div className="form-group">
                <label>Catégorie du Produit:</label>
                <input type="text" placeholder="Catégorie du Produit" />
            </div>
            <div className="form-group">
                <label>Price:</label>
                <div className="price-box-container">
                    <button
                        type="button"
                        className="adjust-button"
                        onClick={decreasePrice}
                    >
                        -
                    </button>
                    <div className="price-input-container">
                        <span className="dollar-sign">$</span>
                        <input
                            type="text"
                            value={price}
                            readOnly
                            className="price-input"
                        />
                    </div>
                    <button
                        type="button"
                        className="adjust-button"
                        onClick={increasePrice}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label>Description du produit:</label>
                <textarea placeholder="Description de la page d'accueil"></textarea>
            </div>

            <div className="form-group">
                <label>Guide de l'utilisation:</label>
                <textarea placeholder="Description de la page à propos"></textarea>
            </div>
            <div className="button-container">
                <button type = "button" className='styled-button'>Ajouter Produit</button>
            </div>

            <div className="form-buttons">
                <button type="button" className="prev-button">Précédent</button>
                <button type="submit" className="next-button">Suivant</button>
            </div>
        </form>
    );
}

export default Form2;
