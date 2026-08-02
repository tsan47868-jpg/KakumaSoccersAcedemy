import React from 'react';

interface LogoProps {
  size?: number;
  showSlogan?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 64,
  showSlogan = false,
  className = '',
  onClick,
}) => {
  return (
    <div 
      className={`inline-flex flex-col items-center justify-center select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      style={{ width: size, height: showSlogan ? size + size * 0.22 : size }}
    >
      <svg
        viewBox="0 0 500 500"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-md transition-transform duration-300 hover:scale-105"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Path for Top Text: KAKUMA */}
          <path
            id="topTextPath"
            d="M 100,250 A 150,150 0 0,1 400,250"
            fill="none"
          />
          {/* Path for Bottom Text: FOOTBALL ACADEMY */}
          <path
            id="bottomTextPath"
            d="M 80,250 A 170,170 0 0,0 420,250"
            fill="none"
          />
          {/* Drop shadow filter */}
          <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#123764" floodOpacity="0.25"/>
          </filter>
        </defs>

        {/* Outer Ring Shadow Base */}
        <circle cx="250" cy="250" r="235" fill="#123764" filter="url(#badgeShadow)" />

        {/* Golden outer border ring */}
        <circle cx="250" cy="250" r="235" fill="#123764" stroke="#FDBD55" strokeWidth="6" />

        {/* Outer Navy Ring */}
        <circle cx="250" cy="250" r="225" fill="#123764" />

        {/* Inner Gold Circle */}
        <circle cx="250" cy="250" r="150" fill="#FDBD55" stroke="#123764" strokeWidth="8" />

        {/* Left '20' Year Pill Badge */}
        <rect x="35" y="230" width="70" height="40" rx="6" fill="#123764" stroke="#FDBD55" strokeWidth="3" />
        <line x1="15" y1="250" x2="35" y2="250" stroke="#FDBD55" strokeWidth="3" />
        <text
          x="70"
          y="257"
          fill="#FFFFFF"
          fontSize="22"
          fontWeight="900"
          fontFamily="Impact, Arial Black, sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          20
        </text>

        {/* Right '24' Year Pill Badge */}
        <rect x="395" y="230" width="70" height="40" rx="6" fill="#123764" stroke="#FDBD55" strokeWidth="3" />
        <line x1="465" y1="250" x2="485" y2="250" stroke="#FDBD55" strokeWidth="3" />
        <text
          x="430"
          y="257"
          fill="#FFFFFF"
          fontSize="22"
          fontWeight="900"
          fontFamily="Impact, Arial Black, sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          24
        </text>

        {/* TOP TEXT: K A K U M A */}
        <text fill="#FFFFFF" fontSize="42" fontWeight="900" fontFamily="Impact, Arial Black, sans-serif" letterSpacing="12">
          <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
            KAKUMA
          </textPath>
        </text>

        {/* BOTTOM TEXT: SOCCER ACADEMY */}
        <text fill="#FFFFFF" fontSize="36" fontWeight="900" fontFamily="Impact, Arial Black, sans-serif" letterSpacing="6">
          <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
            SOCCER ACADEMY
          </textPath>
        </text>

        {/* WHITE STAR at top of gold inner circle */}
        <polygon
          points="250,120 256,138 275,138 260,149 265,167 250,156 235,167 240,149 225,138 244,138"
          fill="#FFFFFF"
          stroke="#123764"
          strokeWidth="1.5"
        />

        {/* CENTER ILLUSTRATION: Football + Football Boot + Motion Lines */}
        <g id="centerIllustration" transform="translate(0, 10)">
          {/* Top Motion Lines */}
          <path d="M 190,180 Q 230,160 270,180" fill="none" stroke="#123764" strokeWidth="4" strokeLinecap="round" />
          <path d="M 195,190 Q 230,172 265,192" fill="none" stroke="#123764" strokeWidth="3" strokeLinecap="round" />

          {/* Bottom Motion Lines */}
          <path d="M 190,320 Q 240,340 330,310" fill="none" stroke="#123764" strokeWidth="4" strokeLinecap="round" />
          <path d="M 210,332 Q 250,348 310,325" fill="none" stroke="#123764" strokeWidth="3" strokeLinecap="round" />

          {/* FOOTBALL (Left) */}
          <g id="football" transform="translate(190, 260)">
            <circle cx="0" cy="0" r="50" fill="#FFFFFF" stroke="#123764" strokeWidth="5" />
            {/* Pentagon center */}
            <polygon points="0,-18 16,-5 10,15 -10,15 -16,-5" fill="#123764" />
            {/* Seam lines to outer circle */}
            <line x1="0" y1="-18" x2="0" y2="-50" stroke="#123764" strokeWidth="4" />
            <line x1="16" y1="-5" x2="42" y2="-26" stroke="#123764" strokeWidth="4" />
            <line x1="10" y1="15" x2="35" y2="35" stroke="#123764" strokeWidth="4" />
            <line x1="-10" y1="15" x2="-35" y2="35" stroke="#123764" strokeWidth="4" />
            <line x1="-16" y1="-5" x2="-42" y2="-26" stroke="#123764" strokeWidth="4" />

            {/* Inner seam arcs */}
            <polygon points="0,-50 15,-40 28,-45" fill="none" stroke="#123764" strokeWidth="3" />
            <polygon points="42,-26 48,-10 38,-5" fill="none" stroke="#123764" strokeWidth="3" />
            <polygon points="35,35 25,43 15,35" fill="none" stroke="#123764" strokeWidth="3" />
            <polygon points="-35,35 -25,43 -15,35" fill="none" stroke="#123764" strokeWidth="3" />
            <polygon points="-42,-26 -48,-10 -38,-5" fill="none" stroke="#123764" strokeWidth="3" />
          </g>

          {/* FOOTBALL BOOT (Right) */}
          <g id="footballBoot" transform="translate(240, 200)">
            {/* Main Boot Body */}
            <path
              d="M 60,10 
                 C 70,30 65,60 55,75 
                 L 45,95 
                 C 40,105 50,115 70,115 
                 C 90,115 105,95 108,80 
                 C 112,65 100,50 90,45 
                 L 75,20 
                 Z"
              fill="#FDBD55"
              stroke="#123764"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            {/* Boot Collar and Opening */}
            <path d="M 60,10 Q 70,0 80,15 L 75,20 Z" fill="#FFFFFF" stroke="#123764" strokeWidth="4" />

            {/* Boot Sole / Studs base */}
            <path d="M 45,95 C 50,118 75,118 108,80" fill="none" stroke="#123764" strokeWidth="6" />

            {/* Cleat Studs */}
            <circle cx="50" cy="116" r="4" fill="#123764" />
            <circle cx="65" cy="120" r="4" fill="#123764" />
            <circle cx="82" cy="116" r="4" fill="#123764" />
            <circle cx="98" cy="100" r="4" fill="#123764" />

            {/* Laces & Tongue Lines */}
            <path d="M 58,40 Q 66,45 74,40" fill="none" stroke="#123764" strokeWidth="4" strokeLinecap="round" />
            <path d="M 54,55 Q 64,60 72,55" fill="none" stroke="#123764" strokeWidth="4" strokeLinecap="round" />
            <path d="M 50,70 Q 60,75 68,70" fill="none" stroke="#123764" strokeWidth="4" strokeLinecap="round" />

            {/* Heel counter & Toe swoosh details */}
            <path d="M 75,20 Q 82,40 70,60" fill="none" stroke="#123764" strokeWidth="3" />
            <path d="M 85,75 Q 98,82 105,72" fill="none" stroke="#123764" strokeWidth="3" />
          </g>
        </g>
      </svg>

      {/* Slogan underneath badge when showSlogan is true */}
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
