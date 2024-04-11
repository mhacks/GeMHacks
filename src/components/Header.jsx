import React from 'react';
import { Link } from "react-scroll";
import '../Header.css';

const Header = () => (
        <header>
            <div className="header-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <img onClick={() => window.location.reload()} src={process.env.PUBLIC_URL + '/images/logos/mhacks_logo.svg'} alt="MHacksLogo" style={{'marginRight': "auto"}} className="header-logo header-logo-mhacks"/>
                <nav style={{ flexGrow: 1 }}>
                    <ul className="nav-links flex justify-center lg:space-x-20">
                        <li><Link to="about" activeClass='active' smooth={true} spy={true} duration={500} className="text-white hover:underline-custom font-bold text-xl font-archivo">ABOUT</Link></li>
                        <li><Link to="prizes" activeClass='active' smooth={true} spy={true} duration={750} className="text-white hover:underline-custom font-bold font-archivo text-xl">PRIZES</Link></li>
                        <li><Link to='faq' activeClass='active' className="text-white hover:underline-custom font-bold font-archivo text-xl" smooth={true} spy={true} duration={1000} >FAQ</Link></li>
                    </ul>
                </nav>
                <a href="https://www.google.com/search?q=mhacks&oq=mhacks" target="_blank" rel="noopener noreferrer">
                  <img src={process.env.PUBLIC_URL + '/images/logos/google_logo.png'} alt="GoogleLogo" className="header-logo header-logo-google"/>
                </a>
            </div>
        </header>
    );

export default Header;
