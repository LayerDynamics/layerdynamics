import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './LoadingAnimation.css'; // If you have additional styles

const LoadingAnimation = () => {
  useEffect(() => {
    // Animation for the "Layer Dynamics" text
    gsap.fromTo("#textPath",
      { strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 5, ease: "power1.out" }
    );

    // Optional: Animate the tool head alongside the text
    // Assuming the tool head moves along the x-axis from start to end of the text
    gsap.to("#toolHead",
      { x: 500, // Adjust based on your SVG and desired effect
        duration: 5, ease: "power1.out",
        onUpdate: () => {
          // Update logic if needed during the animation
        }
      }
    );
  }, []);

  return (
    <div className="loadingAnimation">
      {/* Inline SVG or an img tag if you prefer */}
      <svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
          {/* SVG paths here */}
      </svg>
    </div>
  );
};

export default LoadingAnimation;
