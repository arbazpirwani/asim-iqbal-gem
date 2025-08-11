'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function DiamondMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const geometry = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1, 0)
    geo.scale(1, 1.5, 1)
    return geo
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0}
          roughness={0}
          transmission={1}
          thickness={0.5}
          envMapIntensity={3}
          clearcoat={1}
          clearcoatRoughness={0}
          ior={2.4}
          reflectivity={1}
        />
      </mesh>
    </Float>
  )
}

interface Diamond3DProps {
  className?: string
}

const Diamond3D: React.FC<Diamond3DProps> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight position={[5, 5, 5]} intensity={0.5} angle={0.3} penumbra={1} />
        
        <DiamondMesh />
        
        <Environment preset="studio" />
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.3}
          scale={10}
          blur={2}
          far={10}
        />
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default Diamond3D