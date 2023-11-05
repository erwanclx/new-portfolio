import React, {useRef} from 'react';
import { Canvas, useThree } from "@react-three/fiber"
import gsap from 'gsap';
import { Image, Text, Text3D, RoundedBox } from "@react-three/drei";
import Montserrat from './fonts/Montserrat Light_Regular.json';
import Hind_Madurai from './fonts/Hind Madurai_Bold.json';


export const projects = [
    {
        id: 1,
        title: 'VMBoost',
        status: 'In Progress',
        for: 'Personal',
        image: 'src/components/projects/vmboost.png',
        description: 'VMBoost is a web application that allows users to create, manage, and deploy virtual machines on the cloud.',
        stack: ['React', 'TypeScript', 'Rust', 'Vagrant'],
        url: "https://github.com/erwanclx/vmboost-tauri"
    },
    {
        id: 2,
        title: 'IT-Discover',
        status: 'In Progress',
        for: 'Personal',
        image: 'src/components/projects/itdiscover.png',
        description: 'IT-Discover is a blog that aims to share my knowledge and experience in the IT field, on development, devops, security, and more.',
        stack: ['React', 'TypeScript', 'NextJS'],
    },
    {
        id: 3,
        title: 'Dreaming Places',
        status: 'In Progress',
        for: 'Business',
        image: 'src/components/projects/dreamingplaces.png',
        description: 'Dreaming Places is a travel agency that offers luxury villas to dream destinations.',
        stack: ['Wordpress', 'PHP']
    }
]

const Project = (props) => {
    const { project } = props;

    const imageRef = useRef();
    const groupRef = useRef();

  const handlePointerEnter = (e) => {
    gsap.to(imageRef.current.position, {
      duration: 1, 
      x: 0.1, 
      y: 0.6, 
      z: 0.2, 
      ease: "power2.inOut", 
    });
    gsap.to(groupRef.current.rotation, {
        duration: 1, 
        x: 0, 
        y: 0, 
        z: 0, 
        ease: "power2.inOut", 
        });
  };

  const handlePointerLeave = (e) => {
    gsap.to(imageRef.current.position, {
      duration: 1, 
      x: 0, 
      y: 0.3, 
      z: 0.21, 
      ease: "power2.inOut", 
    });
    gsap.to(groupRef.current.rotation, {
        duration: 1, 
        x: -0.2, 
        y: 0.2, 
        z: 0,
        ease: "power2.inOut",
        });
    }

    return (
        <group
        ref={groupRef}
        onPointerEnter={handlePointerEnter} 
        onPointerLeave={handlePointerLeave}
        rotation={[-0.2, 0.2, 0]}
        >
            <mesh position-z={-0.001} onClick={() => window.open(project.url, "blank") } >
                <RoundedBox radius={0.1} smoothness={4} args={[2.2, 2, 0.3]}>
                    <meshBasicMaterial color='#494eb2' transparent opacity={1} />
                </RoundedBox>
            </mesh>
            <Image ref={imageRef} scale={[2, 1.2]} url={project.image} toneMapped={false} position-y={0.3} position-z={0.21} />

            <Text
                maxWidth={2}
                anchorX='left'
                anchorY='top'
                fontSize={0.1}
                color='#fffce1'
                position={[-1, -0.2, 0.2]}
                font={Montserrat}
                
            >
                Stack : 
                {project.stack.map((tech) => {
                    tech = ' ' + tech + ' |' 
                    return tech
                })}
            </Text>

            <Text
                maxWidth={2}
                anchorX='left'
                anchorY='top'
                fontSize={0.1}
                color='#fffce1'
                position={[-1, -0.1, 0.2]}
                font={Montserrat}
            >
                Status : {project.status}
            </Text>

            <Text3D
                maxWidth={2}
                anchorX='left'
                anchorY='top'
                scale={[0.15, 0.15, 0.15]}
                color='#fffce1'
                position={[-1, -0.5, 0.2]}
                font={'/fonts/Hind_Madurai_Bold.json'}
                
            >
                {project.title}
            </Text3D>
            <Text
              maxWidth={2}
              anchorX="left"
              anchorY="top"
              color="#fffce1"
              fontSize={0.1}
              position={[-1, -0.6, 0.2]}
              font={Montserrat}
            >
              {project.description}
            </Text>
            
            <RoundedBox
              radius={0.1}
              smoothness={4}
              args={[1.5, 0.2, 0.3]}
              position={[0, -1, 0.05]}
            >
                <meshBasicMaterial color="#646cff" transparent opacity={1} />
                <Text
                    maxWidth={2}
                    anchorX="left"
                    anchorY="top"
                    color="#fffce1"
                    fontSize={0.1}
                    position={[-0.2, 0.02, 0.15]}
                >
                    {project.for}
                </Text>
            </RoundedBox>
        </group>
    )
}

export const Projects = () => {

    return (
        <Canvas className='project-scene pj_ct' camera={{fov: 30}}>
        <group position={[-2.5,1,-2]}>
            {
                projects.map((project, index) => {
                    return (
                        <group key={index} position={[index * 2.5, 0, -3]} >
                            <Project project={project}/>
                        </group>
                    )
                })
            }
        </group>
        </Canvas>
    )
}