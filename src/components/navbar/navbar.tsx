import React from 'react';
import { useState } from 'react';
import gsap from 'gsap';
import Magnetic from '../../animations/magnetic';

import './navbar.css';

export default function Navbar() {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const links = [
        {
            name: "Home",
            url: "#home"
        },
        {
            name: "Projects",
            url: "#projects"
        },
        {
            name: "Contact",
            url: "#contact"
        }
    ];
    
    function fillNavLinks(index) {
        const letters = document.querySelectorAll(`.navbar_link_${index} .letter`);
        letters.forEach((letter, index) => {
            gsap.to(letter, {
                color: 'var(--secondary)',
                duration: 0.3,
                delay: 0.1 * index,
                ease: 'power2.out',
                fontSize: '1.3rem',
                onComplete: function() {
                    // Reset the scale after the animation
                    gsap.to(letter, { scale: 1, duration: 0 });
                }
            });
        });
    }

    function resetNavLinks(index) {
        const letters = document.querySelectorAll(`.navbar_link_${index} .letter`);
        letters.forEach((letter, index) => {
            gsap.to(letter, {
                color: 'var(--disabled)',
                fontSize: '1.2rem',
                duration: 0.2,
                ease: 'power2.out',
              delay: 0.1 * index
            });
        });
    }

    // On load animation
    React.useEffect(() => {
        

    gsap.fromTo(
        document.querySelectorAll('.letter'),
        { 
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: 'power4.out',
        }
      )
    }, []);

    return (
        <nav className="navbar_wrapper">
            <h2 className="navbar_title">Erwan Cloux</h2>
            <ul className="navbar_container">
                {links.map((link, index) => (
                    <Magnetic>
                        <li key={index} onMouseEnter={() => fillNavLinks(index)} onMouseLeave={() => resetNavLinks(index)} ><a className={`navbar_link_${index}`} style={{scale: 2}} href={link.url}>{link.name.split('').map((letter, index) => <span className={`letter`} key={index}>{letter}</span>)}</a></li>
                    </Magnetic>
                    ))}
                <Magnetic>
                    <li className="navbar_contact"><a href="https://github.com/erwanclx" target="_blank"><img src="/src/assets/github.png"/></a></li>
                </Magnetic>
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
                    {links.map((link, index) => (
                        <li key={index}><a href={link.url}>{link.name.split('').map((letter, index) => <span key={index}>{letter}</span>)}</a></li>
                    ))}
                    <li className="navbar_contact"><a href="https://github.com/erwanclx" target="_blank"><img src="/src/assets/github.png"/></a></li>
                </ul>
            </div>

        </nav>
    );
}