import React from 'react';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import Magnetic from '../../animations/magnetic';

import './navbar.css';

export default function Navbar() {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const links = [
        {
            name: "Home",
            url: "#home",
            action: () => gotoHome()
        },
        {
            name: "Projects",
            url: "#projects",
            action: () => gotoProjects()
        },
        {
            name: "Contact",
            url: "#contact",
            action: () => gotoContact()
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

    const timeset = 1.2;

    useEffect(() => {
        setTimeout(() => {
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
              );
        }, timeset * 1000);
          
    }, []);

    function gotoHome() {
        gsap.to(document.querySelectorAll('.pj_ct'), {
            opacity: 0,
            duration: .5,
            ease: "power1.inOut",
            stagger: .1,
            onComplete: function() {
                gsap.to(document.querySelector('.section-projects'), {
                    y: '100%',
                    duration: 1,
                    borderTopLeftRadius: "70%", 
                    borderTopRightRadius: "70%", 
                ease: "power1.inOut", 
                });
            }
        })

        gsap.to(document.querySelectorAll('.contact_ct'), {
            opacity: 0,
            duration: .5,
            ease: "power1.inOut",
            stagger: .1,
            onComplete: function() {
                gsap.to(document.querySelector('.section-contact'), {
                    y: '100%',
                    duration: 1,
                    borderTopLeftRadius: "70%", 
                    borderTopRightRadius: "70%",
                ease: "power1.inOut", 
                });
            }
        })
    }

    function gotoProjects() {
        gsap.to(document.querySelector('.section-projects'), {
            y: '15%',
            duration: 1,
            borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px", 
        ease: "power1.inOut", 
        onComplete: function() {
            gsap.to(document.querySelectorAll('.pj_ct'), {
                opacity: 1,
                duration: .5,
                ease: "power1.inOut",
                stagger: .1,
            })
        }
        });
    } 

    function gotoContact() {
        gotoProjects();
        setTimeout(() => {
            gsap.to(document.querySelector('.section-contact'), {
                y: '15%',
                duration: 1,
                borderTopLeftRadius: "0", 
            borderTopRightRadius: "0", 
            ease: "power1.inOut", 
            onComplete: function() {
                gsap.to(document.querySelectorAll('.contact_ct'), {
                    opacity: 1,
                    duration: .5,
                    ease: "power1.inOut",
                    stagger: .1,
                })
            }
            });
        }, 200);
    
    }



    return (
        <nav className="navbar_wrapper">
            <Magnetic>
                <h2 className="navbar_title" onClick={() => gotoHome()} >Erwan Cloux</h2>
            </Magnetic>
            <ul className="navbar_container">
                {links.map((link, index) => (
                    <Magnetic key={index}>
                        <li onMouseEnter={() => fillNavLinks(index)} onMouseLeave={() => resetNavLinks(index)} onClick={link.action} ><a className={`navbar_link_${index}`} style={{scale: 2}} href={link.url}>{link.name.split('').map((letter, index) => <span className={`letter`} key={index}>{letter}</span>)}</a></li>
                    </Magnetic>
                    ))}
                <Magnetic>
                    <li className="navbar_contact"><a href="https://github.com/erwanclx" target="_blank"><img src="/github.png"/></a></li>
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
                        <li key={index} onClick={link.action}><a href={link.url}>{link.name.split('').map((letter, index) => <span key={index}>{letter}</span>)}</a></li>
                    ))}
                    <li className="navbar_contact"><a href="https://github.com/erwanclx" target="_blank"><img src="/github.png"/></a></li>
                </ul>
            </div>

        </nav>
    );
}