'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const UserProfile = () => {
  const features = [
    { icon: 'ℹ️', label: 'Basic Information', path: '/profile/basic-info' },
    { icon: '🩺', label: 'Health Background', path: '/profile/health' },
    { icon: '🏃', label: 'Lifestyle Information', path: '/profile/lifestyle' },
    { icon: '📞', label: 'Emergency Information', path: '/profile/emergency' },
    { icon: '🔐', label: 'Privacy and Security', path: '/profile/privacy' },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0b1026] via-[#2c1250] to-[#4a1259] relative overflow-hidden">
      {/* Snow Ground Effect */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#ff69b445] to-transparent"></div>
      
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            initial={{ opacity: Math.random() * 0.7 + 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#00ffff' : '#ff69b4',
              boxShadow: i % 2 === 0 
                ? '0 0 10px #00ffff, 0 0 20px #00ffff'
                : '0 0 10px #ff69b4, 0 0 20px #ff69b4',
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto h-screen flex items-center justify-center relative z-10">
        <div className="relative">
          {/* Snowflake */}
          <div className="w-96 h-96 relative">
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full"
                style={{
                  filter: 'drop-shadow(0 0 20px #ff69b4) drop-shadow(0 0 40px #ff69b4)',
                }}
              >
                {/* Five-pointed Snowflake Structure */}
                {[0, 72, 144, 216, 288].map((rotation) => (
                  <g key={rotation} transform={`rotate(${rotation} 100 100)`}>
                    {/* Main Branch */}
                    <path
                      d="M100 30 L100 170"
                      stroke="#ff69b4"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-glow"
                    />
                    {/* Diamond at the tip */}
                    <path
                      d="M100 30 L90 45 L100 60 L110 45 Z"
                      stroke="#00ffff"
                      strokeWidth="2"
                      fill="none"
                      className="animate-glow"
                    />
                    {/* Side Branches with Diamonds */}
                    <g transform="translate(100 80)">
                      <path
                        d="M0 0 L-25 -15 M-25 -15 L-35 -10 L-25 -5 L-15 -10 Z"
                        stroke="#ff69b4"
                        strokeWidth="2"
                        fill="none"
                        className="animate-glow"
                      />
                      <path
                        d="M0 0 L25 -15 M25 -15 L35 -10 L25 -5 L15 -10 Z"
                        stroke="#ff69b4"
                        strokeWidth="2"
                        fill="none"
                        className="animate-glow"
                      />
                    </g>
                    <g transform="translate(100 120)">
                      <path
                        d="M0 0 L-30 -10 M-30 -10 L-40 -5 L-30 0 L-20 -5 Z"
                        stroke="#00ffff"
                        strokeWidth="2"
                        fill="none"
                        className="animate-glow"
                      />
                      <path
                        d="M0 0 L30 -10 M30 -10 L40 -5 L30 0 L20 -5 Z"
                        stroke="#00ffff"
                        strokeWidth="2"
                        fill="none"
                        className="animate-glow"
                      />
                    </g>
                  </g>
                ))}
                {/* Center Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="8"
                  fill="#ff69b4"
                  className="animate-pulse"
                  style={{
                    filter: 'drop-shadow(0 0 10px #ff69b4)',
                  }}
                />
              </svg>
            </motion.div>

            {/* Feature Icons */}
            {features.map((feature, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180); // Start from top (-90 degrees) and space evenly
              const radius = 140; // Distance from center, adjusted to match snowflake tips
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <Link
                  key={feature.path}
                  href={feature.path}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl cursor-pointer hover:bg-white/20 transition-colors relative"
                    style={{
                      boxShadow: '0 0 15px #ff69b4, 0 0 30px #00ffff',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                  >
                    {feature.icon}
                    <span className="absolute w-max text-sm text-white/90 font-medium mt-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {feature.label}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
