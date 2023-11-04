import React from 'react';
import Link from '../button/link';
import HeroScene from './hero-3d-scene/hero-scene';

import './hero.css';

export default function Hero() {
    return (
        <header className="hero_wrapper">
            <div className="hero_container">
                <h1 className="hero_title">Development & Network <br/> System Administration<br/><span>Erwan Cloux</span></h1>
                <p className="hero_description">I am a student in Network System Administration and Development.<br/>I am a self-taught enjoyer about new technologies. </p>
                <Link type="primary" href="#projects" text="Learn more"/>
            </div>
            <div className="hero_graphic_container">
                <HeroScene/>
            </div>
        </header>
    )
}