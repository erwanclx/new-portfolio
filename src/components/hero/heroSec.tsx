import React, {useState} from 'react';
import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import './heroSec.css';
import Magnetic from '../../animations/magnetic';
import { Preload } from '@react-three/drei';

const heroTitleBottom = 'Developer';
const heroTitleTop = 'Sysadmin';

export default function HeroSec() {

    const [isInProjects, setIsInProjects] = useState(false);

    React.useEffect(() => {
    gsap.to('.hero_title_top_letter', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1,
    })
    gsap.to('.hero_title_bottom_letter', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .05,
        onComplete: function() {
            gsap.to('.hero_title_bottom_context', {
                x: 0,
                stagger: 0.05,
                delay: 0.4,
                duration: .05,
            })
        }
    })

    const section_projects = document.querySelector('.section-projects');
    const section_projects_content = document.querySelectorAll('.pj_ct');
    const section_contact = document.querySelector('.section-contact');
    const section_contact_title = document.querySelector('.section-contact-title');
    const hero_button = document.querySelector('.hero_button');

    const contact_button = document.querySelector('#contact-btn');

    function gotoProjects() {
        gsap.to(section_projects, {
            y: '15%',
            duration: 1,
            borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px", 
        ease: "power1.inOut", 
        onComplete: function() {
            gsap.to(section_projects_content, {
                opacity: 1,
                duration: .5,
                ease: "power1.inOut",
                stagger: .1,
            })
        }
        });
    }    

    document.addEventListener('scroll', function() {
        window.scrollTo(0, 0);
        gotoProjects();
        setIsInProjects(true);
    })

    hero_button?.addEventListener('click', function() {
        gotoProjects();
        setIsInProjects(true);
    })

    function gotoContact() {
        gsap.to(section_contact, {
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
    
    }

    contact_button?.addEventListener('click', function() {
        gotoContact();
        setIsInProjects(false);
    })


}, []);

    return (
        <>
        <div className='hero_container'>
            <div className='hero_title_container'>
                <h1 className='hero_title'>
                    <div className="title-1">
                    {
                        heroTitleTop.split('').map((letter, index) => {
                            return (
                                <span key={index} className='hero_title_top_letter'>{letter}</span>
                            )
                        })
                    } 
                    </div>
                    
                    <div className="title-2">
                    <a href='https://www.flowlinetechnologies.com/' target='_blank' className='hero_title_bottom_context'>
                        Apprentice
                    </a>
                    {
                        heroTitleBottom.split('').map((letter, index) => {
                            return (
                                <span key={index} className='hero_title_bottom_letter'>{letter}</span>
                            )
                        })
                    }
                    </div>
                </h1>
            </div>
            <div className='hero_button_container'>
                <Magnetic>
                <div className='hero_button'>
                    <a href='#projects' className='hero_button_link'>Learn more</a>
                </div>
                </Magnetic>
            </div>

        </div>
        </>
    )
}