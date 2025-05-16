"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import imageLoader from "@/utils/imageLoader";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
    image: "https://picsum.photos/seed/ecommerce/800/600",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    demo: "https://demo-ecommerce.com",
    github: "https://github.com/username/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, built using React, Firebase, and Material-UI.",
    image: "https://picsum.photos/seed/taskapp/800/600",
    tech: ["React", "Firebase", "Material-UI", "Redux"],
    demo: "https://demo-taskapp.com",
    github: "https://github.com/username/taskapp",
  },
  {
    title: "Social Media Dashboard",
    description: "A responsive dashboard for social media analytics, featuring data visualization and real-time updates.",
    image: "https://picsum.photos/seed/dashboard/800/600",
    tech: ["React", "D3.js", "Node.js", "Express"],
    demo: "https://demo-dashboard.com",
    github: "https://github.com/username/dashboard",
  },
  {
    title: "Mobile Fitness App",
    description: "A Flutter-based fitness tracking application with workout plans, progress tracking, and social features.",
    image: "https://picsum.photos/seed/fitness/800/600",
    tech: ["Flutter", "Firebase", "Dart", "Provider"],
    demo: "https://demo-fitness.com",
    github: "https://github.com/username/fitness",
  },
  {
    title: "Real Estate Platform",
    description: "A comprehensive real estate platform with property listings, search functionality, and agent management.",
    image: "https://picsum.photos/seed/realestate/800/600",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    demo: "https://demo-realestate.com",
    github: "https://github.com/username/realestate",
  },
  {
    title: "AI Chat Application",
    description: "An AI-powered chat application with natural language processing and real-time communication features.",
    image: "https://picsum.photos/seed/aichat/800/600",
    tech: ["Python", "TensorFlow", "WebSocket", "React"],
    demo: "https://demo-aichat.com",
    github: "https://github.com/username/aichat",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-40 sm:h-48 w-full overflow-hidden">
        <Image
          loader={project.image.startsWith('http') ? undefined : imageLoader}
          src={project.image}
          alt={`ByteMatrix Software Solution - ${project.title} - Full Stack Development Project`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="mb-3 sm:mb-4">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-xs sm:text-sm flex items-center gap-1"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </Link>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-xs sm:text-sm flex items-center gap-1"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View Code
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="section-title">Our Full Stack Development Projects</h2>
          <p className="section-subtitle">
            Explore our portfolio of frontend, backend, and full stack development projects
          </p>
          <p className="max-w-3xl mx-auto text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            ByteMatrix Software Solution specializes in contract-based development, delivering high-quality software solutions for businesses across various industries.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;