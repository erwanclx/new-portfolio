import React, { Suspense, useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls, RoundedBox, Image } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import gsap from 'gsap'

export const networks = [
    {
        id: 1,
        name: 'Github',
        url: 'https://github.com/erwanclx',
        icon: 'src/components/contact/contact-3d-scene/assets/github.png',
        color: '#0e100f',
        position: [0,0.4,0]
    },
    {
        id: 2,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/erwan-clx/',
        icon: 'src/components/contact/contact-3d-scene/assets/linkedin.png',
        color: '#126bc4',
        position: [0,0,0]
    },
    {
        id: 3,
        name: 'Mail',
        url: 'mailto:hi@erwancloux.fr',
        icon: 'src/components/contact/contact-3d-scene/assets/mail.png',
        color: '#ffffff',
        position: [0,-0.4,0]
    },
]

const App = (props) => {
    const { network } = props;
    const groupRef = useRef();
    const boxRef = useRef();
    
    const handlePointerEnter = (e) => {
        gsap.to(boxRef.current.position, {
            duration: 1,
            z: -0.4,
            ease: "elastic.out(1, 0.6)",
          });
    
        };
    
      const handlePointerLeave = (e) => {
        gsap.to(boxRef.current.position, {
            duration: 1,
            z: 0,
            ease: "power2.inOut",
            
          });
        }

        return (
        <group
        ref={groupRef}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={() => window.open(network.url, "blank")}
        >

            <RoundedBox ref={boxRef} position={network.position} args={[0.6, 0.3, 0.2]} radius={0.05} smoothness={4} >
                    <meshStandardMaterial color={network.color} transparent opacity={1} />
                    <Image scale={[0.2, 0.2]} url={network.icon} transparent position={[0, 0, -0.101]} rotation={[0, Math.PI, 0]} />
            </RoundedBox>

        </group>
        )

        
}

export default function Phone() {
    const group = useRef()
    const { nodes, materials } = useGLTF('/src/assets/Phonetest.glb')

    const nodetoedit = nodes['group817659832'].children[2]

    return (
        <group ref={group}>
        {nodes && (
          <>
            {Object.values(nodes).map((node, index) => (
              <primitive object={node} key={index} position={[0, 0, 0]} rotation={[(-15 *  Math.PI / 180), (180 *  Math.PI / 180), (15 *  Math.PI / 180)]} />

            ))}
          </>
        )}
        
        <mesh geometry={nodetoedit.geometry} position={[0, 0, 0]} rotation={[(-15 *  Math.PI / 180), (180 *  Math.PI / 180), (15 *  Math.PI / 180)]}>

                {
                    networks.map((network, index) => {
                        return (
                            <App key={index} network={network} />
                        )
                    })
                }
        </mesh>
      </group>
    )
}