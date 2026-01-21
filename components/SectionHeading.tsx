
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-[#D4AF37] mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
