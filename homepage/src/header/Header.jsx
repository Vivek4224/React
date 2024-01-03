import React from 'react';
import './Header.css';
import Logo from '../img/logo.webp';

export default function Header() {
    return (
        <div>
            <header className='header'>
                <div className="logo">
                    <img src={Logo} alt="" /> <h3>Lamborghini</h3>
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#modal">Models</a>
                        </li>
                        <li>
                            <a href="#beyond">Beyond</a>
                        </li>
                        <li>
                            <a href="#ownership">ownwrship</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
