

import React from 'react';
import '../Header.css';

const Header = () => (
        <header>
            <div className="header-content">
                <img src={process.env.PUBLIC_URL + '/images/logos/mhacks_logo.svg'} alt="MHacksLogo" style={{'marginRight': "auto"}} className="header-logo header-logo-mhacks"/>
                <nav>
                    <ul className="nav-links flex lg:space-x-20">
                        <li><a href="#about" className="text-white hover:underline-custom font-bold text-xl font-archivo">ABOUT</a></li>
                        <li><a href="#prizes" className="text-white hover:underline-custom font-bold font-archivo text-xl">PRIZES</a></li>
                        <li><a href="#faq" className="text-white hover:underline-custom font-bold font-archivo text-xl">FAQ</a></li>
                    </ul>
                </nav>
                <img src={process.env.PUBLIC_URL + '/images/logos/google_logo.png'} alt="GoogleLogo" style={{'marginLeft': "auto"}} className="header-logo header-logo-google"/>
            </div>
        </header>
    );
    

export default Header;