import React from 'react';
import { Canvas } from '@react-three/fiber';
import Phone from './phone';
import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'

export default function HeroScene() {
    return (
        <Canvas camera={{fov: 20,
        }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
                <Phone />

            {/* <OrbitControls target={[0, 1, 0]} /> */}
        {/* <axesHelper args={[5]} /> */}
        {/* <Stats /> */}
        </Canvas>
    )
}