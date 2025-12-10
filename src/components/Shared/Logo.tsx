import React from 'react'

interface LogoProps {
  className?: string
  size?: number
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="#0a1628" />
      
      {/* Outer geometric pattern - dark blue frame */}
      <g opacity="0.95">
        {/* Octagonal/star-like geometric pattern */}
        <path
          d="M50 15 L60 20 L70 28 L78 38 L82 50 L78 62 L70 72 L60 80 L50 85 L40 80 L30 72 L22 62 L18 50 L22 38 L30 28 L40 20 Z"
          fill="#1a2f4f"
          stroke="#2a4f7a"
          strokeWidth="0.5"
        />
        
        {/* Inner geometric details */}
        <path
          d="M50 22 L56 25 L62 30 L67 36 L70 43 L70 50 L67 57 L62 63 L56 68 L50 71 L44 68 L38 63 L33 57 L30 50 L30 43 L33 36 L38 30 L44 25 Z"
          fill="#0f1f3a"
        />
        
        {/* Light blue glowing accents - strategically placed */}
        {/* Top */}
        <rect x="48" y="22" width="2.5" height="2.5" fill="#26d0ce" opacity="0.9" rx="0.3" />
        <rect x="52" y="22" width="2.5" height="2.5" fill="#26d0ce" opacity="0.9" rx="0.3" />
        
        {/* Right */}
        <rect x="72" y="48" width="2.5" height="2.5" fill="#26d0ce" opacity="0.9" rx="0.3" />
        <rect x="72" y="52" width="2.5" height="2.5" fill="#26d0ce" opacity="0.9" rx="0.3" />
        
        {/* Bottom */}
        <rect x="48" y="75" width="2.5" height="2.5" fill="#26d0ce" opacity="0.9" rx="0.3" />
        <rect x="52" y="75" width="2.5" height="2.5" fill="#26d0ce" opacity="0.9" rx="0.3" />
        
        {/* Left */}
        <rect x="25" y="48" width="2.5" height="2.5" fill="#26d0ce" opacity="0.9" rx="0.3" />
        <rect x="25" y="52" width="2.5" height="2.5" fill="#26d0ce" opacity="0.9" rx="0.3" />
        
        {/* Diagonal accents */}
        <rect x="61" y="32" width="2" height="2" fill="#26d0ce" opacity="0.8" transform="rotate(45 62 33)" rx="0.2" />
        <rect x="37" y="32" width="2" height="2" fill="#26d0ce" opacity="0.8" transform="rotate(45 38 33)" rx="0.2" />
        <rect x="61" y="65" width="2" height="2" fill="#26d0ce" opacity="0.8" transform="rotate(45 62 66)" rx="0.2" />
        <rect x="37" y="65" width="2" height="2" fill="#26d0ce" opacity="0.8" transform="rotate(45 38 66)" rx="0.2" />
      </g>
      
      {/* TR Letters - dark blue/navy */}
      <text
        x="50"
        y="60"
        fontSize="38"
        fontWeight="900"
        fill="#1e3a5f"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="system-ui, -apple-system, Arial, sans-serif"
        letterSpacing="-1.5"
      >
        TR
      </text>
      
      {/* Subtle highlight on TR for depth */}
      <text
        x="50"
        y="58.5"
        fontSize="38"
        fontWeight="900"
        fill="#2a4f7a"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="system-ui, -apple-system, Arial, sans-serif"
        letterSpacing="-1.5"
        opacity="0.4"
      >
        TR
      </text>
    </svg>
  )
}

