

import React from 'react';
import { Link } from "react-scroll";
import '../Header.css';

const Header = () => (
        <header>
            <div className="header-content">
                <img onClick={() => window.location.reload()} src={process.env.PUBLIC_URL + '/images/logos/mhacks_logo.svg'} alt="MHacksLogo" style={{'marginRight': "auto"}} className="header-logo header-logo-mhacks"/>
                <nav>
                    <ul className="nav-links flex lg:space-x-20">
                        <li><Link to="about" activeClass='active' smooth={true} spy={true} duration={500} className="text-white hover:underline-custom font-bold text-xl font-archivo">ABOUT</Link></li>
                        <li><Link to="prizes" activeClass='active' smooth={true} spy={true} duration={500} className="text-white hover:underline-custom font-bold font-archivo text-xl">PRIZES</Link></li>
                        <li><Link to='faq' activeClass='active' className="text-white hover:underline-custom font-bold font-archivo text-xl" smooth={true} spy={true} duration={500} >FAQ</Link></li>
                    </ul>
                </nav>
                <img src={process.env.PUBLIC_URL + '/images/logos/google_logo.png'} alt="GoogleLogo" style={{'marginLeft': "auto"}} className="header-logo header-logo-google"/>
            </div>
        </header>
    );
    

export default Header;