import React, { useState } from 'react';
import './Form3.css';

const Form3 = () => {
    const [packages, setPackages] = useState([]);
    const [currentPackage, setCurrentPackage] = useState({ name: '', products: [], image: null, price: '', description: '' });
    const [availableProducts] = useState([
        { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 30, image: 'product3.jpg' }
    ]);
    const [showForm, setShowForm] = useState(true);
    const [showHideButton, setShowHideButton] = useState(false);

    const handleInputChange = (event) => {
        const { name, value, files } = event.target;
        setCurrentPackage(prev => ({ ...prev, [name]: name === 'image' ? files[0] : value }));
    };

    const handleProductChange = (productId) => {
        setCurrentPackage(prev => {
            const newProducts = prev.products.includes(productId)
                ? prev.products.filter(id => id !== productId)
                : [...prev.products, productId];
            return { ...prev, products: newProducts };
        });
    };

    const savePackage = () => {
        if (!currentPackage.name || currentPackage.products.length === 0 || !currentPackage.image || !currentPackage.price || !currentPackage.description) {
            alert("Veuillez remplir tous les champs avant de soumettre.");
            return;
        }
        setPackages(prev => [...prev, currentPackage]);
        setCurrentPackage({ name: '', products: [], image: null, price: '', description: '' });
        setShowForm(false);
        setShowHideButton(true);
    };

    const addAnotherPackage = () => {
        setShowForm(true);
        setShowHideButton(true);
    };

    const hideForm = () => {
        setShowForm(false);
        setShowHideButton(true);
    };

    const deletePackage = (index) => {
        setPackages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Packages:', packages);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {showForm && (
                <div className="form-content">
                    <div className="form-group">
                        <label>Nom du Package</label>
                        <input
                            type="text"
                            name="name"
                            value={currentPackage.name}
                            onChange={handleInputChange}
                            placeholder="Nom du Package"
                        />
                    </div>
                    <div className="form-group">
                        <label>Choisir les Produits</label>
                        <div className="dropdown">
                            <button type="button" className="dropdown-button">Sélectionner les Produits</button>
                            <div className="dropdown-content">
                                {availableProducts.map(product => (
                                    <div key={product.id} className="dropdown-item">
                                        <input
                                            type="checkbox"
                                            checked={currentPackage.products.includes(product.id)}
                                            onChange={() => handleProductChange(product.id)}
                                        />
                                        <img src={product.image} alt={product.name} className="product-image"/>
                                        <span>{product.name} - ${product.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Image du Package</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Prix du Package</label>
                        <input
                            type="number"
                            name="price"
                            value={currentPackage.price}
                            onChange={handleInputChange}
                            placeholder="Prix du Package"
                        />
                    </div>
                    <div className="form-group">
                        <label>Description du Package</label>
                        <textarea
                            name="description"
                            value={currentPackage.description}
                            onChange={handleInputChange}
                            placeholder="Description du Package"
                        />
                    </div>
                    <div className="form-buttons">
                        <button type="button" className="save-button" onClick={savePackage}>Enregistrer le Package</button>
                        {showHideButton && showForm && (
                            <button type="button" className="hide-button" onClick={hideForm}>Masquer le Formulaire</button>
                        )}
                    </div>
                </div>
            )}
            <div className="packages-list">
                {packages.map((pkg, index) => (
                    <div key={index} className="package-item">
                        <h3>{pkg.name}</h3>
                        <p><strong>Produits:</strong> {pkg.products.map(id => {
                            const product = availableProducts.find(p => p.id === id);
                            return product ? product.name : '';
                        }).join(', ')}</p>
                        <p><strong>Prix:</strong> ${pkg.price}</p>
                        <p><strong>Description:</strong> {pkg.description}</p>
                        {pkg.image && <img src={URL.createObjectURL(pkg.image)} alt={pkg.name} className="package-image" />}
                        <button type="button" className="delete-button" onClick={() => deletePackage(index)}>Supprimer</button>
                    </div>
                ))}
            </div>
            {!showForm && (
                <div className="form-buttons">
                    <button type="button" className="add-button" onClick={addAnotherPackage}>Ajouter un autre package</button>
                </div>
            )}
        </form>
    );
};

export default Form3;
