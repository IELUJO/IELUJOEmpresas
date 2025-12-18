import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, align = 'center', light = true }) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const textColor = light ? 'text-white' : 'text-luxury-black';
  const subtitleColor = light ? 'text-gold-500' : 'text-gold-700';

  return (
    <div className={`mb-16 max-w-4xl ${alignClass}`}>
      <span className={`block text-sm font-bold tracking-[0.2em] uppercase mb-4 ${subtitleColor}`}>
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-5xl font-serif leading-tight ${textColor}`}>
        {title}
      </h2>
      <div className={`w-24 h-1 bg-gold-500 mt-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};