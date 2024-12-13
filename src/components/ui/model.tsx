import { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import * as THREE from 'three'
import { ContactShadows, OrbitControls } from '@react-three/drei'

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

export function Model() {
  const materials = useLoader(MTLLoader, '/model.mtl')
  materials.preload()

  const obj = useLoader(OBJLoader, '/model.obj', (loader) => {
    loader.setMaterials(materials)
  })

  obj.traverse((child: any) => {
    if (child.isMesh) {
      child.receiveShadow = true
      child.castShadow = true
    }
  })

  return <primitive object={obj} scale={0.5} position={[0, 0, 0]} />
}

export function Scene() {
  const { camera } = useThree()
  const controlsRef = useRef<any>()
  const [isAnimating, setIsAnimating] = useState(true)
  const frameRef = useRef(0)  // Use ref to persist frame count across renders

  const initialCameraPosition = new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    10,
    20 * Math.cos(0.2 * Math.PI)
  )
  const target = new THREE.Vector3(-0.5, 1.2, 0)

  useEffect(() => {
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)
  }, [camera])

  useFrame(() => {
    if (frameRef.current <= 100) {
      const rotSpeed = -easeOutCirc(frameRef.current / 120) * Math.PI * 20

      camera.position.y = 10
      camera.position.x = initialCameraPosition.x * Math.cos(rotSpeed) +
        initialCameraPosition.z * Math.sin(rotSpeed)
      camera.position.z = initialCameraPosition.z * Math.cos(rotSpeed) -
        initialCameraPosition.x * Math.sin(rotSpeed)
      camera.lookAt(target)
      
      frameRef.current++

      if (frameRef.current === 100) {
        setIsAnimating(false)
      }
    } else {
      if (controlsRef.current) {
        controlsRef.current.update()
      }
    }
  })

  return (
    <>
      <Model />
      <OrbitControls
        ref={controlsRef}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        enabled={!isAnimating}
        autoRotate={!isAnimating}
        autoRotateSpeed={1}
        target={target}
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.4} />
      </mesh>

      <ContactShadows
        opacity={0.4}
        scale={10}
        blur={1}
        far={4}
        resolution={256}
        color="#000000"
      />


      {/* Lighting */}
      <ambientLight intensity={Math.PI} color="#cccccc" />
      <directionalLight
        position={[-2, 8, -4]}
        intensity={1.5}
      />
      <pointLight intensity={3} color={"#000090"} position={[-0.6, 1, 0]} />
    </>
  )
}
