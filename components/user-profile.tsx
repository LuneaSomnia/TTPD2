'use client';

import { Snowflake } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const UserProfile = () => {
  const features = [
    { icon: 'ℹ️', label: 'Basic Information', path: '/profile/basic-info' },
    { icon: '🩺', label: 'Health Background', path: '/profile/health' },
    { icon: '🏃', label: 'Lifestyle Information', path: '/profile/lifestyle' },
    { icon: '📞', label: 'Emergency Information', path: '/profile/emergency' },
    { icon: '🔐', label: 'Privacy and Security', path: '/profile/privacy' },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 relative overflow-hidden">
      {/* Background Snowflakes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 2 + 0.5})`,
            }}
          >
            <Snowflake size={32} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto h-screen flex items-center justify-center relative">
        <div className="relative">
          {/* Center Snowflake */}
          <div className="w-96 h-96 relative">
            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Snowflake className="w-full h-full text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </motion.div>

            {/* Feature Icons */}
            {features.map((feature, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const radius = 160; // Distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <Link
                  key={feature.path}
                  href={feature.path}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                  style={{
                    left: `50%`,
                    top: `50%`,
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl cursor-pointer hover:bg-white/30 transition-colors"
                  >
                    {feature.icon}
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
