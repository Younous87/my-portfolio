'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import { Profile } from '@/types/sanity';
import { urlForImage } from '@/lib/sanity-queries';
import Image from 'next/image';
import Particles from './Particles';
import { useState, useEffect } from 'react';

interface HeroProps {
  profile?: Profile | null;
}

const Hero = ({ profile }: HeroProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Particle Background - Only render on client */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          <Particles
            particleCount={300}
            particleSpread={15}
            speed={0.15}
            particleColors={['#2563EB', '#7C3AED', '#4F46E5', '#3B82F6', '#8B5CF6', '#6366F1']}
            moveParticlesOnHover={true}
            particleHoverFactor={2}
            alphaParticles={false}
            particleBaseSize={150}
            sizeRandomness={2}
            cameraDistance={18}
            disableRotation={false}
            className="opacity-80"
          />
        </div>
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-1"></div>

      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-2">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl backdrop-blur-sm">
              <div className="w-full h-full rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                {profile?.profileImage ? (
                  <Image
                    src={urlForImage(profile.profileImage)}
                    alt={profile.fullName || 'Profile'}
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {profile?.fullName?.split(' ').map(n => n[0]).join('') || '🎮'}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/50 backdrop-blur-sm text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200/20">
              <MapPin size={16} className="mr-2" />
              Available for work
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-white drop-shadow-lg">👋 Hello there! I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 drop-shadow-lg">
              {profile?.fullName || 'Younous'}
            </span>
          </motion.h1>

          {/* Subtitle with typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-200 dark:text-gray-200 mb-8 font-medium"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, delay: 1 }}
              className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-blue-400 drop-shadow-lg"
            >
              {profile?.shortBio || 'CS Student • Game Dev Dreamer • UI Enthusiast'}
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg text-gray-300 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
          >
            Passionate 3rd year Computer Science student with a love for code, creativity, and gaming. 
            Whether it's building sleek UIs, backend wizardry, or spinning up game servers at home! 🎮✨
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 backdrop-blur-sm border border-white/10"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown size={20} />
            </motion.button>
            
            {profile?.resumeURL && (
              <motion.a
                href={profile.resumeURL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 dark:bg-white/10 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 backdrop-blur-sm flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
