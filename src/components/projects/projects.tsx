import React, {useRef} from 'react';
import { Canvas, useThree } from "@react-three/fiber"
import gsap from 'gsap';
import { Image, Text } from "@react-three/drei";


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
      duration: 1, // Adjust the duration as needed
      x: 0.1, // Adjust the desired movement along the x-axis
      y: 0.6, // Adjust the desired movement along the y-axis
      z: 0.2, // Adjust the desired movement along the z-axis
      ease: "power2.inOut", // Choose the easing function
    });
    gsap.to(groupRef.current.rotation, {
        duration: 1, // Adjust the duration as needed
        x: 0, // Adjust the desired movement along the x-axis
        y: 0, // Adjust the desired movement along the y-axis
        z: 0, // Adjust the desired movement along the z-axis
        ease: "power2.inOut", // Choose the easing function
        });
  };

  const handlePointerLeave = (e) => {
    gsap.to(imageRef.current.position, {
      duration: 1, // Adjust the duration as needed
      x: 0, // Adjust the desired movement along the x-axis
      y: 0.3, // Adjust the desired movement along the y-axis
      z: 0.2, // Adjust the desired movement along the z-axis
      ease: "power2.inOut", // Choose the easing function
    });
    gsap.to(groupRef.current.rotation, {
        duration: 1, // Adjust the duration as needed
        x: -0.2, // Adjust the desired movement along the x-axis
        y: 0.2, // Adjust the desired movement along the y-axis
        z: 0, // Adjust the desired movement along the z-axis
        ease: "power2.inOut", // Choose the easing function
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
                <boxGeometry args={[2.2, 2, 0.3]} />
                <meshBasicMaterial color='#494eb2' transparent opacity={1} />
            </mesh>
            <Image ref={imageRef} scale={[2, 1.2]} url={project.image} toneMapped={false} position-y={0.3} position-z={0.2} />
            <Text
                maxWidth={2}
                anchorX='left'
                anchorY='top'
                fontSize={0.2}
                color='#fffce1'
                position={[-1, -0.4, 0.2]}
                
            >
                {project.title}
            </Text>
            <Text
              maxWidth={2}
              anchorX="left"
              anchorY="top"
              color="#fffce1"
              fontSize={0.1}
              position={[-1, -0.6, 0.2]}
            >
              {project.description}
            </Text>
        </group>
    )
}

export const Projects = () => {

    return (
        <Canvas className='project-scene pj_ct' camera={{fov: 30,
            // position: [0, 0, 0],
        }}>
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