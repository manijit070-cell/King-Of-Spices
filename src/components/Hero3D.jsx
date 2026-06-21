import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, args, type }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {type === 'torus' ? (
          <torusGeometry args={args} />
        ) : type === 'sphere' ? (
          <sphereGeometry args={args} />
        ) : (
          <octahedronGeometry args={args} />
        )}
        <meshPhysicalMaterial 
          color={color} 
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0088ff" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={100} scale={12} size={2} speed={0.4} color="#ffaa00" />
        
        {/* Abstract "Spice" and "Ambiance" elements */}
        <FloatingShape type="octahedron" position={[-3, 1, -2]} args={[1, 0]} color="#ffaa00" />
        <FloatingShape type="torus" position={[3, -1, -1]} args={[1.5, 0.4, 16, 100]} color="#0088ff" />
        <FloatingShape type="sphere" position={[0, 2, -4]} args={[1, 32, 32]} color="#ff4400" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Hero3D;
