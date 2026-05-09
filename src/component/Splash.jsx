import React, { useEffect } from 'react';
import './Splash.css';
import AnimatedBackground from './AnimatedBackground';

const Splash = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 4000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="splash-container">
            <AnimatedBackground /> {/* Reusable Background Component */}

            {/* Welcome Text */}
            <div className="welcome-text">
                <div className="mountain-text animate">
                    {'Welcome'.split('').map((char, i) => (
                        <span key={`w${i}`} style={{ animationDelay: `${i * 0.1}s` }}>{char}</span>
                    ))}
                     &nbsp;
                    {'To'.split('').map((char, i) => (
                        <span key={`to${i}`} style={{ animationDelay: `${(i + 7) * 0.1}s` }}>{char}</span>
                    ))}
                </div>
                <div className="mountain-text animate">
                    {'MY'.split('').map((char, i) => (
                        <span key={`my${i}`} style={{ animationDelay: `${i * 0.1}s` }}>{char}</span>
                    ))}
                    &nbsp;
                    {'PORTFOLIO'.split('').map((char, i) => (
                        <span key={`p${i}`} style={{ animationDelay: `${(i + 2) * 0.1}s` }}>{char}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Splash;
