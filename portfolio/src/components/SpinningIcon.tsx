'use client';
import { useRef, useEffect } from 'react';

export function SpinningIcon() {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const span = spanRef.current;
    if (!span) return;

    let currentRotation = 0;
    let animationFrame: number;
    let targetSpeed = 8; // seconds per rotation
    let currentSpeed = 8;
    
    const animate = () => {
      // Smoothly transition speed
      currentSpeed += (targetSpeed - currentSpeed) * 0.05;
      
      // Calculate rotation increment based on current speed
      const increment = 360 / (currentSpeed * 60); // 60fps
      currentRotation = (currentRotation + increment) % 360;
      
      span.style.transform = `rotate(${currentRotation}deg)`;
      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      targetSpeed = 1.5;
    };

    const handleMouseLeave = () => {
      targetSpeed = 8;
    };

    span.addEventListener('mouseenter', handleMouseEnter);
    span.addEventListener('mouseleave', handleMouseLeave);
    
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      span.removeEventListener('mouseenter', handleMouseEnter);
      span.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <span
      ref={spanRef}
      className="inline-block text-2xl mr-3 cursor-pointer"
      style={{ 
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      ✦
    </span>
  );
}
