import React, { useState, useEffect } from 'react';
import './Form4.css';

const Form4 = () => {
    const [promotions, setPromotions] = useState([]);
    const [currentPromotion, setCurrentPromotion] = useState({ productId: '', discount: '', newPrice: '' });
    const [availableProducts] = useState([
        { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 30, image: 'product3.jpg' }
    ]);
    const [showForm, setShowForm] = useState(true);
    const [showHideButton, setShowHideButton] = useState(false);

    useEffect(() => {
        const product = availableProducts.find(p => p.id === parseInt(currentPromotion.productId));
        if (product && currentPromotion.discount) {
            const discountAmount = (product.price * currentPromotion.discount) / 100;
            const newPrice = product.price - discountAmount;
            setCurrentPromotion(prev => ({ ...prev, newPrice: newPrice.toFixed(2) }));
        } else {
            setCurrentPromotion(prev => ({ ...prev, newPrice: '' }));
        }
    }, [currentPromotion.productId, currentPromotion.discount, availableProducts]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentPromotion(prev => ({ ...prev, [name]: value }));
    };

    const savePromotion = () => {
        if (!currentPromotion.productId || !currentPromotion.discount) {
            alert("Veuillez remplir tous les champs avant de soumettre.");
            return;
        }
        const product = availableProducts.find(p => p.id === parseInt(currentPromotion.productId));
        const newPromotion = { product, discount: parseFloat(currentPromotion.discount), newPrice: currentPromotion.newPrice };
        setPromotions(prev => [...prev, newPromotion]);
        setCurrentPromotion({ productId: '', discount: '', newPrice: '' });
        setShowForm(false);
        setShowHideButton(true);
    };

    const addAnotherPromotion = () => {
        setShowForm(true);
        setShowHideButton(true);
    };

    const hideForm = () => {
        setShowForm(false);
        setShowHideButton(true);
    };

    const deletePromotion = (index) => {
        setPromotions(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Promotions:', promotions);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {showForm && (
                <div className="form-content">
                    <div className="form-group">
                        <label>Choisir un Produit</label>
                        <div className="dropdown">
                            <button type="button" className="dropdown-button">
                                {availableProducts.find(p => p.id === parseInt(currentPromotion.productId))?.name || 'Sélectionner un produit'}
                            </button>
                            <div className="dropdown-content">
                                {availableProducts.map(product => (
                                    <div
                                        key={product.id}
                                        className="dropdown-item"
                                        onClick={() => setCurrentPromotion(prev => ({ ...prev, productId: product.id }))}
                                    >
                                        <img src={product.image} alt={product.name} className="product-image"/>
                                        <div className="product-details">
                                            <span>{product.name}</span>
                                            <span>${product.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Pourcentage de Réduction</label>
                        <input
                            type="number"
                            name="discount"
                            value={currentPromotion.discount}
                            onChange={handleInputChange}
                            placeholder="Pourcentage de Réduction"
                        />
                    </div>
                    {currentPromotion.newPrice && (
                        <div className="form-group">
                            <label>Prix après Réduction</label>
                            <input
                                type="text"
                                name="newPrice"
                                value={currentPromotion.newPrice}
                                readOnly
                                placeholder="Prix après Réduction"
                            />
                        </div>
                    )}
                    <div className="form-buttons">
                        <button type="button" className="save-button" onClick={savePromotion}>Enregistrer la Promotion</button>
                        {showHideButton && showForm && (
                            <button type="button" className="hide-button" onClick={hideForm}>Masquer le Formulaire</button>
                        )}
                    </div>
                </div>
            )}
            <div className="promotions-list">
                {promotions.map((promo, index) => (
                    <div key={index} className="promotion-item">
                        <h3>{promo.product.name}</h3>
                        <p><strong>Réduction:</strong> {promo.discount}%</p>
                        <p><strong>Prix après Réduction:</strong> ${promo.newPrice}</p>
                        <button type="button" className="delete-button" onClick={() => deletePromotion(index)}>Supprimer</button>
                    </div>
                ))}
            </div>
            {!showForm && (
                <div className="form-buttons">
                    <button type="button" className="add-button" onClick={addAnotherPromotion}>Ajouter une autre promotion</button>
                </div>
            )}
        </form>
    );
};

export default Form4;
