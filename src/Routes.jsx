import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/components/Pages/Home"


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Home" element={<Home />} />

            </Routes>
        </Router>
    );
}

export default AppRoutes;