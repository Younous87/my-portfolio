'use client';

import { motion } from 'framer-motion';
import { Code2, Gamepad2, Server, Heart } from 'lucide-react';
import { Profile } from '@/types/sanity';
import { urlForImage } from '@/lib/sanity-queries';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import SpotlightCard from './SpotlightCard';
import TiltedCard from './TiltedCard';

interface AboutProps {
  profile?: Profile | null;
}

const About = ({ profile }: AboutProps) => {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with a focus on best practices and elegant solutions.',
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Passionate about game development and creating interactive experiences that bring joy.',
    },
    {
      icon: Server,
      title: 'Home Lab & Servers',
      description: 'Running self-hosted services and game servers - perfect for learning and epic gaming sessions.',
    },
    {
      icon: Heart,
      title: 'UI Design Focus',
      description: 'Love making interfaces that are not just functional but also beautiful and intuitive.',
    },
  ];

  // Group skills into categories based on your tech stack
  const groupSkills = (skills: string[]) => {
    const languages = skills.filter(skill => 
      ['c#', 'java', 'kotlin', 'javascript', 'typescript', 'html', 'css', 'python'].some(tech => 
        skill.toLowerCase().includes(tech)
      )
    );
    
    const frameworks = skills.filter(skill => 
      ['.net', 'react', 'next.js', 'vue', 'android', 'unity', 'spring'].some(tech => 
        skill.toLowerCase().includes(tech)
      )
    );
    
    const tools = skills.filter(skill => 
      !languages.includes(skill) && !frameworks.includes(skill)
    );

    return [
      {
        category: 'Languages',
        technologies: languages.length > 0 ? languages : ['C#', 'Java', 'Kotlin', 'HTML5', 'CSS3', 'JavaScript'],
        color: 'from-blue-400 to-blue-600',
      },
      {
        category: 'Frameworks & Tools',
        technologies: frameworks.length > 0 ? frameworks : ['.NET', 'Android Dev', 'UI/UX Design', 'Game Development'],
        color: 'from-green-400 to-green-600',
      },
      {
        category: 'Specialties',
        technologies: tools.length > 0 ? tools : ['Self-hosting', 'Server Management', 'Home Lab', 'Git'],
        color: 'from-purple-400 to-purple-600',
      },
    ];
  };

  const skills = profile?.skills ? groupSkills(profile.skills) : [
    {
      category: 'Languages',
      technologies: ['C#', 'Java', 'Kotlin', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'from-blue-400 to-blue-600',
    },
    {
      category: 'Frameworks & Tools',
      technologies: ['.NET', 'Android Dev', 'UI/UX Design', 'Game Development'],
      color: 'from-green-400 to-green-600',
    },
    {
      category: 'Specialties',
      technologies: ['Self-hosting', 'Server Management', 'Home Lab', 'Git'],
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {profile?.shortBio || '3rd year CS student passionate about code, creativity, and gaming'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Image and intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto">
                {profile?.profileImage ? (
                  <TiltedCard
                    imageSrc={urlForImage(profile.profileImage)}
                    altText={profile.fullName || 'Profile'}
                    captionText="Boo!"
                    containerHeight="400px"
                    containerWidth="100%"
                    imageHeight="400px"
                    imageWidth="400px"
                    scaleOnHover={1.05}
                    rotateAmplitude={12}
                    showMobileWarning={false}
                    showTooltip={true}
                  />
                ) : (
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                      <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        👨‍💻
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Code2 className="text-white" size={24} />
              </motion.div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Gamepad2 className="text-white" size={24} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Building digital worlds, one line of code at a time 🎮
            </h3>
            
            {profile?.fullBio ? (
              <div className="space-y-4">
                <PortableText 
                  value={profile.fullBio}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {children}
                        </p>
                      ),
                      h1: ({ children }) => (
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {children}
                        </h3>
                      ),
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong className="font-semibold text-gray-900 dark:text-white">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-gray-700 dark:text-gray-300">
                          {children}
                        </em>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                          {children}
                        </ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => (
                        <li className="text-gray-600 dark:text-gray-400">
                          {children}
                        </li>
                      ),
                      number: ({ children }) => (
                        <li className="text-gray-600 dark:text-gray-400">
                          {children}
                        </li>
                      ),
                    },
                  }}
                />
              </div>
            ) : (
              <>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a passionate 3rd year Computer Science student with a love for all things code, creativity, and gaming. 
                  When I'm not exploring virtual worlds or dreaming up my own games, I'm busy building sleek user interfaces 
                  and experimenting with backend wizardry.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I run a small home lab where I self-host services and game servers—perfect for learning and epic gaming 
                  sessions with friends! Game development is a big dream of mine, and I'm working towards building something epic. 
                  I also have a soft spot for UI design and love making interfaces that are both functional and beautiful.
                </p>
              </>
            )}
            
            <div className="flex flex-wrap gap-3 pt-4">
              {['🎮 Gaming Enthusiast', '🖥️ Home Lab Tinkerer', '✨ UI Design Fan', '🎯 Always Learning'].map((trait, index) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="overflow-hidden"
            >
              <SpotlightCard
                className="!p-6 !border-gray-200 dark:!border-gray-700 !bg-gray-50 dark:!bg-gray-800 !rounded-xl text-center group"
                spotlightColor="rgba(59, 130, 246, 0.08)"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My Toolbox 🛠️
          </h3>
          <div className="text-center mb-8">
            <blockquote className="text-gray-600 dark:text-gray-400 italic">
              "Great things are done by a series of small things brought together."
            </blockquote>
            <cite className="text-sm text-gray-500 dark:text-gray-500 mt-1 block">
              – Vincent Van Gogh
            </cite>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="overflow-hidden"
              >
                <SpotlightCard
                  className="!p-6 !border-gray-200 dark:!border-gray-700 !bg-white dark:!bg-gray-800 !rounded-xl group"
                  spotlightColor={
                    index === 0 
                      ? "rgba(59, 130, 246, 0.12)" // Blue for Languages
                      : index === 1 
                      ? "rgba(34, 197, 94, 0.12)" // Green for Frameworks & Tools
                      : "rgba(139, 92, 246, 0.12)" // Purple for Specialties
                  }
                >
                  <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + techIndex * 0.1 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
