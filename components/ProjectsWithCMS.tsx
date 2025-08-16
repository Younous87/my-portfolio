'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '@/types/sanity';
import { urlForImage } from '@/lib/sanity-queries';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import SpotlightCard from './SpotlightCard';
import LightRays from './LightRays';
import { useState, useEffect } from 'react';

interface ProjectsProps {
  projects?: Project[];
}

const Projects = ({ projects = [] }: ProjectsProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Split projects into featured (first 2) and regular
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Fallback data if no projects from Sanity
  const fallbackProjects = [
    {
      _id: '1',
      _type: 'project' as const,
      name: 'E-Commerce Platform',
      slug: { current: 'ecommerce-platform' },
      githubUrl: '#',
      projectUrl: '#',
      coverImage: null,
      description: [{ _type: 'block', children: [{ text: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.' }] }],
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    },
    {
      _id: '2',
      _type: 'project' as const,
      name: 'Task Management App',
      slug: { current: 'task-management' },
      githubUrl: '#',
      projectUrl: '#',
      coverImage: null,
      description: [{ _type: 'block', children: [{ text: 'A collaborative task management application with real-time updates and team collaboration features.' }] }],
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    },
  ];

  const displayProjects = projects.length > 0 ? projects : fallbackProjects;
  const displayFeatured = displayProjects.slice(0, 2);
  const displayOthers = displayProjects.slice(2);

  const getGradientClass = (index: number) => {
    const gradients = [
      'gradient-1',
      'gradient-2', 
      'gradient-3',
      'gradient-4',
      'gradient-5'
    ];
    return gradients[index % gradients.length];
  };

  const renderDescription = (description: any[]) => {
    if (!description || description.length === 0) return '';
    
    // Simple text extraction from portable text
    return description
      .filter(block => block._type === 'block')
      .map(block => block.children?.map((child: any) => child.text).join('') || '')
      .join(' ');
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Light Rays Background - Only render on client */}
      {isClient && (
        <div className="absolute inset-0 opacity-80">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.3}
            lightSpread={0.5}
            rayLength={3}
            pulsating={false}
            fadeDistance={1.2}
            saturation={1.0}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="opacity-100"
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        {displayFeatured.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            >
              🌟 Featured Projects
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid lg:grid-cols-2 gap-8"
            >
              {displayFeatured.map((project, index) => (
                <motion.div
                  key={project._id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="overflow-hidden"
                >
                  <SpotlightCard
                    className="!p-0 !border-gray-200 dark:!border-gray-700 !bg-white dark:!bg-gray-900 !rounded-2xl group"
                    spotlightColor="rgba(59, 130, 246, 0.15)"
                  >
                    <div className="relative overflow-hidden">
                      {project.coverImage ? (
                        <div className="h-48 sm:h-64 relative">
                          <Image
                            src={urlForImage(project.coverImage)}
                            alt={project.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                      ) : (
                        <div className={`${getGradientClass(index)} h-48 sm:h-64 relative`}>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                              <h4 className="text-2xl font-bold mb-2">{project.name}</h4>
                              <p className="text-white/90 text-sm">Click to view details</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Overlay with links */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.githubUrl}
                          className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={24} />
                        </motion.a>
                        {project.projectUrl && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.projectUrl}
                            className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={24} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {renderDescription(project.description)}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags?.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <a
                            href={project.githubUrl}
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={20} />
                          </a>
                          {project.projectUrl && (
                            <a
                              href={project.projectUrl}
                              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                        >
                          Learn more <ArrowRight size={16} className="ml-1" />
                        </motion.button>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Other Projects */}
        {displayOthers.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            >
              📚 Other Projects
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayOthers.map((project, index) => (
                <motion.div
                  key={project._id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden"
                >
                  <SpotlightCard
                    className="!p-0 !border-gray-200 dark:!border-gray-700 !bg-white dark:!bg-gray-900 !rounded-xl group"
                    spotlightColor="rgba(139, 92, 246, 0.12)"
                  >
                    {project.coverImage ? (
                      <div className="h-32 relative">
                        <Image
                          src={urlForImage(project.coverImage)}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className={`${getGradientClass(index + 2)} h-32 relative`}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>

                    <div className="p-4">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {project.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                        {renderDescription(project.description)}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags?.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tags && project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded text-xs">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* View All Projects CTA */}
        {displayProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
