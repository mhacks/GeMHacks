

import React from 'react';
import '../Header.css';
import {Link } from 'react-scroll';


const Header = () => (
        <header>
            <div className="header-content">
                <img src={process.env.PUBLIC_URL + '/images/logos/mhacks_logo.svg'} alt="MHacksLogo" style={{'marginRight': "auto"}} className="header-logo"/>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#about" className="text-white"><Link to="home" smooth={true} duration={500}>ABOUT</Link></a></li>
                        <li><a href="#sponsor" className="text-white"><Link to="new-blank-page" smooth={true} duration={500}>SPONSOR</Link></a></li>
                        <li><a href="#about" className="text-white"><Link to="faq" smooth={true} duration={500}>FAQ</Link></a></li>

                    </ul>
                </nav>
                <img src={process.env.PUBLIC_URL + '/images/logos/google_logo.svg'} alt="GoogleLogo" style={{'marginLeft': "auto"}} className="header-logo"/>
            </div>
        </header>
    );
    

export default Header;