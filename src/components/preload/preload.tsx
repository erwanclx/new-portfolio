import React, {useRef, useState, useEffect} from 'react'
import './preload.css'
import gsap from 'gsap'

export default function Preload() {

    const timeset = 1.2;

    const [isLoaded, setIsLoaded] = useState(false);

    const preload = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            gsap.to(preload.current, {
                x: '-100vw',
                ease: 'power1.inOut',
                duration: timeset,
                onComplete: function() {
                    setIsLoaded(true);
                }
            })
        }
        , timeset * 1000);
    }, [])

    return (
        <div ref={preload} id='preload'>
            <p className='preload_text'>Welcome !</p>
        </div>
    ) 
}