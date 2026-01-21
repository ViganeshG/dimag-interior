
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button'
}) => {
  const baseStyles = "px-8 py-3 transition-all duration-300 font-medium tracking-wider text-sm uppercase flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#1A1A1A] text-white hover:bg-[#D4AF37]",
    outline: "border border-[#1A1A1A] text-[#1A1A1A] hover:border-[#D4AF37] hover:text-[#D4AF37]",
    ghost: "text-[#1A1A1A] hover:text-[#D4AF37]"
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
