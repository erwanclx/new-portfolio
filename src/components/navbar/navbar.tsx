import React from 'react';
import { useState } from 'react';

import './navbar.css';

export default function Navbar() {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    return (
        <nav className="navbar_wrapper">
            <h2 className="navbar_title">Erwan Cloux</h2>
            <ul className="navbar_container">
                <li><a  className="active_link" href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="navbar_contact"><a href="https://github.com/erwanclx" target="_blank"><img src="/src/assets/github.png"/></a></li>
            </ul>

            <button className="navbar_burger" onClick={() => setToggleMobileMenu(true)} >
                <div className="navbar_burger_line"></div>
                <div className="navbar_burger_line"></div>
                <div className="navbar_burger_line"></div>
            </button>

            <div className={toggleMobileMenu ? "navbar_mobile_container active" : "navbar_mobile_container"} onClick={() => setToggleMobileMenu(false)}>
                <button className="navbar_mobile_close">
                    <div className="navbar_mobile_close_line"></div>
                    <div className="navbar_mobile_close_line"></div>
                </button>
                <ul className="navbar_mobile_list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li className="navbar_contact"><a href="https://github.com/erwanclx" target="_blank"><img src="/src/assets/github.png"/></a></li>
                </ul>
            </div>

        </nav>
    );
}