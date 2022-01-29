import React from 'react';
import BurgerMenu from '../components/BurgerMenu';

function LandingPage() {
    function showSettings(event) {
        event.preventDefault();
    }
    return (
        <div>
            <BurgerMenu />
        </div>
    );
}

export default LandingPage;