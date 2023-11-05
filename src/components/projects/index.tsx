import './index.css';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import Magnetic from '../../animations/magnetic';
import {Projects} from './projects';

export default function ProjectsSection() {

    return (
        <div className='section-projects'>
        <h2 className='section-title pj_ct'>Projects</h2>
        <Projects />
        <div className='section-projects-button-container pj_ct'>
                <Magnetic>
                <div id='contact-btn' className='section-projects-button'>
                    <a href='#contact' className='hero_button_link'>Contact me</a>
                </div>
                </Magnetic>
                <Magnetic>
                <div className='section-projects-button ext'>
                    <a href='https://github.com/erwanclx' target='_blank' className='hero_button_link'>See more</a>
                </div>
                </Magnetic>
            </div>

        </div>
    )
}