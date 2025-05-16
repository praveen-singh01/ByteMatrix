"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

// Tech stack icons
const TechIcon = ({ icon, name, delay, x, y }: { icon: string, name: string, delay: number, x: number, y: number }) => (
  <motion.div
    className="absolute hidden sm:block"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay,
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: "easeInOut"
      }}
    >
      <div className="text-primary-600 dark:text-primary-400 font-bold text-xl" aria-label={`${name} technology icon`} role="img">
        {icon}
      </div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {name}
      </div>
    </motion.div>
  </motion.div>
);

// Code animation component
const CodeAnimation = () => {
  const codeLines = [
    "import React from 'react';",
    "import { motion } from 'framer-motion';",
    "",
    "const App = () => {",
    "  return (",
    "    <motion.div",
    "      initial={{ opacity: 0 }}",
    "      animate={{ opacity: 1 }}",
    "      transition={{ duration: 0.5 }}",
    "    >",
    "      <h1>Hello World!</h1>",
    "    </motion.div>",
    "  );",
    "};",
    "",
    "export default App;"
  ];

  return (
    <motion.div
      className="code-block max-w-md mx-auto text-left overflow-hidden bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg text-xs sm:text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          className="whitespace-pre overflow-x-auto"
        >
          <span className="text-gray-500 mr-2">{index + 1}</span>
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Animated text component
const AnimatedText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      className="justify-center md:justify-start"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ marginRight: "0.5rem", marginBottom: "0.25rem" }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCode(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Enhanced Background Blobs */}
      <motion.div
        className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-8 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-64 h-40 sm:h-64 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-60"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <TechIcon icon="⚛️" name="React" delay={0.5} x={15} y={20} />
        <TechIcon icon="🔷" name="TypeScript" delay={0.7} x={80} y={25} />
        <TechIcon icon="📱" name="Flutter" delay={0.9} x={25} y={70} />
        <TechIcon icon="🚀" name="Next.js" delay={1.1} x={75} y={65} />
        <TechIcon icon="🍃" name="MongoDB" delay={1.3} x={85} y={40} />
        <TechIcon icon="🔥" name="Firebase" delay={1.5} x={10} y={40} />
        <TechIcon icon="🟢" name="Node.js" delay={1.7} x={20} y={50} />
        <TechIcon icon="🐍" name="Python" delay={1.9} x={70} y={15} />
        <TechIcon icon="🟩" name="Vue.js" delay={2.1} x={40} y={30} />
        <TechIcon icon="🎨" name="Figma" delay={2.3} x={60} y={80} />
        <TechIcon icon="☁️" name="AWS" delay={2.5} x={30} y={85} />
        <TechIcon icon="🔄" name="Git" delay={2.7} x={50} y={55} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                ByteMatrix Software Solution
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium mb-6 text-gray-700 dark:text-gray-300">
                Full Stack Development Experts
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <AnimatedText
                text="Transforming ideas into exceptional digital experiences"
                delay={0.3}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 sm:mb-8"
            >
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                <span className="typewriter inline-block">Frontend & Backend Development Experts</span>
              </p>
              <p className="mt-3 sm:mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Specializing in contract-based full stack development projects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <Link
                href="#contact"
                className="btn btn-primary px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:scale-105 transition-transform"
              >
                Hire Us
              </Link>
              <Link
                href="#projects"
                className="btn btn-secondary px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:scale-105 transition-transform"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 sm:mt-8"
            >
              <div className="flex justify-center md:justify-start gap-4 sm:gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:scale-110 transform"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:scale-110 transform"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors hover:scale-110 transform"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Code Animation */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            {showCode && <CodeAnimation />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;