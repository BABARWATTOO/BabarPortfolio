// src/components/FeaturesLine.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './FeatureLine.css';

const items = [
  'Maintainable',
  'Optimizable',
  'Usable',
  'Reliable',
  'Performance',
  'Secure',
  'Accessible',
  'Interactive',
];

export default function FeatureLine() {
  return (
    <div className="features-container">
      <div className="features-scroll">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
