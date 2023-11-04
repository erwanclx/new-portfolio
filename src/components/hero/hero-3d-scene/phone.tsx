import React, { Suspense, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'

// export default function Phone() {
//     const gltf = useLoader(GLTFLoader, '/src/assets/Phonetest.glb')
//     let app
//     return (
//         <>
//             <primitive
//             object={gltf.scene}
//             position={[0, 0, 0]}
//             rotation={[(-15 *  Math.PI / 180), (180 *  Math.PI / 180), (15 *  Math.PI / 180)]}
//             />
            
//         </>
//     )
// }

export default function Phone() {
    const group = useRef()
    const { nodes, materials } = useGLTF('/src/assets/Phonetest.glb')

    const nodetoedit = nodes['group817659832'].children[2]

    return (
        <group ref={group}>
        {/* Use 'nodes' from useGLTF to render the loaded model */}
        {nodes && (
          <>
            {Object.values(nodes).map((node, index) => (
              <primitive object={node} key={index} position={[0, 0, 0]} rotation={[(-15 *  Math.PI / 180), (180 *  Math.PI / 180), (15 *  Math.PI / 180)]} />

            ))}
          </>
        )}
        
        <mesh geometry={nodetoedit.geometry} position={[0, 0, 0]} rotation={[(-15 *  Math.PI / 180), (180 *  Math.PI / 180), (15 *  Math.PI / 180)]}>
            {/* <Html className="content" rotation={[(-15 *  Math.PI / 180), (180 *  Math.PI / 180), (15 *  Math.PI / 180)]} position={[0, 0, 0]} transform occlude>
                <h1>test</h1>
            </Html> */}
            <Html>
                <h1>test</h1>
            </Html>
        </mesh>
      </group>
    )
}