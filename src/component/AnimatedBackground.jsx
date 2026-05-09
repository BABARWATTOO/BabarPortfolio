// AnimatedBackground.jsx
import React from 'react';
import './Splash.css'; // reuse the same styles

const AnimatedBackground = () => {
    return (
        <>
            {/* Particle Containers */}
            <div className="particle-container layer-1-particles">
                {[...Array(30)].map((_, i) => (
                    <span key={`p1-${i}`} className="dot" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 5}s`,
                        opacity: 0.3
                    }}></span>
                ))}
            </div>
            <div className="particle-container layer-2-particles">
                {[...Array(25)].map((_, i) => (
                    <span key={`p2-${i}`} className="dot" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 5}s`,
                        opacity: 0.4
                    }}></span>
                ))}
            </div>
            <div className="particle-container layer-3-particles">
                {[...Array(20)].map((_, i) => (
                    <span key={`p3-${i}`} className="dot" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 5}s`,
                        opacity: 0.5
                    }}></span>
                ))}
            </div>

            {/* Circle Layers */}
            <div className="circle-layer layer-1"></div>
            <div className="circle-layer layer-2"></div>
            <div className="circle-layer layer-3"></div>
            <div className="circle-layer layer-4"></div>
            <div className="circle-layer layer-5"></div>
        </>
    );
};

export default AnimatedBackground;
