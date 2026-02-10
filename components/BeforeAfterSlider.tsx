
import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e 
      ? e.touches[0].clientX - rect.left 
      : (e as React.MouseEvent).clientX - rect.left;
    
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden cursor-ew-resize select-none group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Modern) */}
      <img 
        src="/images/before-after/After.jpg" 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (Old) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src="/images/before-after/Before.jpeg" 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover brightness-75 grayscale"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center">
          <svg className="w-6 h-6 text-[#1A1A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l-4 4m0 0l4 4m-4-4h16" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/40 text-white px-3 py-1 text-xs tracking-widest uppercase backdrop-blur-sm">Before</div>
      <div className="absolute top-4 right-4 bg-black/40 text-white px-3 py-1 text-xs tracking-widest uppercase backdrop-blur-sm">After</div>
    </div>
  );
};

export default BeforeAfterSlider;
