// FormSteps.js
import React from 'react';
import './FormSteps.css';

const FormSteps = ({ currentStep }) => {
    return (
        <div className="form-steps">
            <button className={`form-step ${currentStep === 1 ? 'active' : ''}`}>Form 1</button>
            <button className={`form-step ${currentStep === 2 ? 'active' : ''}`}>Form 2</button>
            <button className={`form-step ${currentStep === 3 ? 'active' : ''}`}>Form 3</button>
            <button className={`form-step ${currentStep === 4 ? 'active' : ''}`}>Form 4</button>

        </div>
    );
}

export default FormSteps;
