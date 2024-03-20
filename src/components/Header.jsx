import React from 'react';
import '../Header.css';

const Header = () => (
    <header>
        <div className="header-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Left Logo */}
            <img src={process.env.PUBLIC_URL + '/images/logos/mhacks_logo.svg'} alt="MHacksLogo" className="header-logo header-logo-mhacks"/>

            {/* Navigation Links */}
            <nav style={{ flexGrow: 1 }}>
                <ul className="nav-links flex justify-center lg:space-x-20">
                    <li><a href="#about" className="text-white hover:underline-custom font-bold text-xl font-archivo">ABOUT</a></li>
                    <li><a href="#prizes" className="text-white hover:underline-custom font-bold font-archivo text-xl">PRIZES</a></li>
                    <li><a href="#faq" className="text-white hover:underline-custom font-bold font-archivo text-xl">FAQ</a></li>
                </ul>
            </nav>

            {/* Right Logo */}
            <a href="https://www.google.com/search?q=mhacks&oq=mhacks" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + '/images/logos/google_logo.png'} alt="GoogleLogo" className="header-logo header-logo-google"/>
            </a>
        </div>
    </header>
);

export default Header;
