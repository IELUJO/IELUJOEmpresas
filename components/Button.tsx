import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 uppercase tracking-widest text-sm font-bold transition-all duration-300 ease-in-out border";
  
  const variants = {
    primary: "bg-gold-500 border-gold-500 text-black hover:bg-white hover:border-white hover:text-black",
    outline: "bg-transparent border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};