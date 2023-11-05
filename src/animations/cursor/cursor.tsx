import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

import './cursor.css';
import { is } from '@react-three/fiber/dist/declarations/src/core/utils';

export default function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHoveringLink, setIsHoveringLink] = useState(false);
    const [isHoveringHero, setIsHoveringHero] = useState(false);
    const [isHoveringExt, setIsHoveringExt] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setCursorPosition({ x, y });

      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.3,
      });
    };

    const onLinkHover = () => {
        setIsHoveringLink(true);
        gsap.to(cursor, {
            width: '90px',
            height: '90px',
            top: -1 * 90 / 2,
            left: -1 * 90 / 2,

            // top: calc(-1 * var(--cursor-size) / 2);
            // left: calc(-1 * var(--cursor-size) / 2);
            duration: 0.3,
          });
      };
  
      const onLinkLeave = () => {
        setIsHoveringLink(false);
        gsap.to(cursor, {
            width: '50px',
            height: '50px',
            top: -1 * 50 / 2,
            left: -1 * 50 / 2,
            duration: 0.3,
          });
      };

      const onExtHover = () => {
        setIsHoveringExt(true);
        gsap.to(cursor, {
            width: '90px',
            height: '90px',
            top: -1 * 90 / 2,
            left: -1 * 90 / 2,
            duration: 0.3,
          });
      }

      const onExtLeave = () => {
        setIsHoveringExt(false);
        gsap.to(cursor, {
            width: '50px',
            height: '50px',
            top: -1 * 50 / 2,
            left: -1 * 50 / 2,
            duration: 0.3,
          });
      }
  
      window.addEventListener('mousemove', onMouseMove);
      const links = document.querySelectorAll('a');
      const hero_button = document.querySelector('.hero_button');
      const contact_submit = document.querySelector('.contact-submit');

      const external_links = [
        document.querySelector('.hero_title_bottom_context'),
        document.querySelector('.navbar_contact'),
        document.querySelector('.section-projects-button.ext'),
      ]
  
      links.forEach((link) => {
        link.addEventListener('mouseenter', onLinkHover);
        link.addEventListener('mouseleave', onLinkLeave);
      });

      contact_submit?.addEventListener('mouseenter', onLinkHover);
      contact_submit?.addEventListener('mouseleave', onLinkLeave);

     external_links.forEach((link) => {
        link?.addEventListener('mouseenter', onExtHover);
        link?.addEventListener('mouseleave', onExtLeave);
      });
  

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onLinkHover);
        link.removeEventListener('mouseleave', onLinkLeave);
      });
      hero_button?.removeEventListener('mouseenter', onLinkHover);
      hero_button?.removeEventListener('mouseleave', onLinkLeave);
      contact_submit?.removeEventListener('mouseenter', onLinkHover);
      contact_submit?.removeEventListener('mouseleave', onLinkLeave);

      external_links.forEach((link) => {
        link?.removeEventListener('mouseenter', onExtHover);
        link?.removeEventListener('mouseleave', onExtLeave);
      });

    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHoveringExt ? 'link' : ''}`}
      style={{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
      }}
    >    
    </div>
  );
}