

import React from 'react';
import '../Header.css';

const Header = () => (
        <header>
            <div className="header-content">
                <img src={process.env.PUBLIC_URL + '/images/logos/mhacks_logo.svg'} alt="MHacksLogo" style={{'marginRight': "auto"}} className="header-logo"/>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#about" className="text-white">ABOUT</a></li>
                        <li><a href="#sponsor" className="text-white">SPONSOR</a></li>
                        <li><a href="#faq" className="text-white">FAQ</a></li>
                    </ul>
                </nav>
                <img src={process.env.PUBLIC_URL + '/images/logos/google_logo.svg'} alt="GoogleLogo" style={{'marginLeft': "auto"}} className="header-logo"/>
            </div>
        </header>
    );
    

export default Header;