import React from 'react';
import NavBar from './NavBar';
import '../styles/Header.css';

function Header() {
    return (
        <div className="headerContainer">
            <header className="header">
                <h1>John Gallagher</h1>
                <NavBar/>
            </header>
        </div>
    )
};

export default Header;