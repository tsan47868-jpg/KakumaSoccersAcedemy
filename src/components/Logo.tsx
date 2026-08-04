import React from 'react';

interface LogoProps {
  size?: number;
  showSlogan?: boolean;
  className?: string;
  onClick?: () => void;
  src?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 64,
  showSlogan = false,
  className = '',
  onClick,
  src = '/images/logo.jpg',
}) => {
  return (
    <div
      className={`hidden lg:inline-flex flex-col items-center justify-center select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      style={{ width: size, height: showSlogan ? size + size * 0.22 : size }}
    >
      <img
        src={src}
        alt="Kakuma Soccer Academy logo"
        className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
      />

      {showSlogan && (
        <span
          className="mt-1 font-bold tracking-wider text-center text-[#123764] uppercase text-xs"
          style={{ fontSize: Math.max(10, size * 0.16) }}
        >
          Nurturing Dreams
        </span>
      )}
    </div>
  );
};

export default Logo;
