import React, {useRef, useState} from 'react'
import './preload.css'
import gsap from 'gsap'

export default function Preload() {

    const timeset = 1.2;

    const [isLoaded, setIsLoaded] = useState(false);

    const preload = useRef(null);

    React.useEffect(() => {
        gsap.to(preload.current, {
            width: '0vw',
            ease: 'power1.inOut',
            duration: timeset,
            onComplete: function() {
                setIsLoaded(true);
            }
        })
    }, [])

    return <div ref={preload} id='preload'></div>
}