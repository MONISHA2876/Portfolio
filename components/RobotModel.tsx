"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Model } from "./Robot";
import { useEffect, useState } from "react";

export default function RobotModel() {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' }); 
    const [isDark, setIsDark] = useState(true);
        
    // Check dark mode from HTML class
    useEffect(() => {
        const checkDarkMode = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setIsDark(isDarkMode);
        };
        checkDarkMode();
            
        // Listen for theme changes
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
            
        return () => observer.disconnect();
    }, []);
    
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="w-full h-full">
            <ambientLight intensity={isDark ? 0.2 : 0.5} color='#1a1a40' />
            <ambientLight intensity={isDark ? 0.5 : 2} color='#eedde7' />
            <directionalLight position={[5,5,5]} intensity={isDark ? 1 : 5} />
            <directionalLight position={[-5,-5,-5]} intensity={isDark ? 1 : 2} />
            <OrbitControls 
                makeDefault 
                enableZoom={false}
                enablePan={true}
                enableRotate={true}
                maxDistance={10}
                minDistance={4}
            />
            <Model 
                scale={isTablet ? 2 : 3} 
                position={isTablet ? [0, -1.2, 0] : [0, -1.2, 0]}
                rotation={[0, Math.PI /1.2, 0]} 
            />
        </Canvas>
    )
}