"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const profileData = [
  {
    name: "Praveen Singh",
    role: "Full Stack Developer",
    bio: "Experienced developer with a focus on scalable applications and clean code. Expert in Flutter, Firebase, cloud technologies, and DevOps practices.",
    image: "/praveen.jpeg",
    skills: ["Flutter", "Firebase", "Dart", "AWS", "Git", "Node.js", "MongoDB", "Docker"],
    social: {
      github: "https://github.com/praveen",
      linkedin: "https://www.linkedin.com/in/praveensingh9240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Pragya Aditya",
    role: "FrontEnd Developer",
    bio: "Passionate about creating beautiful and functional web applications. Specializes in React, Node.js, and modern web technologies with expertise in UI/UX design.",
    image: "/pragya.png",
    skills: ["React", "Node.js", "TypeScript", "UI/UX", "Vue.js", "Python", "AWS", "Figma"],
    social: {
      github: "https://www.linkedin.com/in/pragya-aditya-9260261bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      linkedin: "https://linkedin.com/in/pragya",
    },
  },
  {
    name: "Mihir Jadhav",
    role: "AI Specialist",
    bio: "Expert in artificial intelligence and machine learning with a deep understanding of modern AI frameworks. Passionate about implementing AI solutions to solve complex problems.",
    image: "/mihir.png",
    skills: ["AI", "Machine Learning", "Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Data Science"],
    social: {
      github: "https://www.linkedin.com/in/-mihirjadhav?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      linkedin: "https://linkedin.com/in/mihir",
    },
  },
];

const ProfileCard = ({ profile, index }: { profile: typeof profileData[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 relative"
    >
      {/* Decorative gradient border */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 z-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: "linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))",
          filter: "blur(8px)",
          transform: "scale(1.02)"
        }}
      />

      <div className="relative z-10">
        <div className="relative h-72 w-full overflow-hidden">
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
            className="h-full w-full"
          >
            <Image
              src={profile.image}
              alt={`${profile.name} - ${profile.role} at ByteMatrix Software Solution - Expert in ${profile.skills.slice(0, 3).join(', ')}`}
              fill
              className="object-cover object-top transition-transform duration-500 hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              style={{
                objectPosition: profile.name === "Praveen Singh"
                  ? "center 40%"
                  : "center 2%"
              }}
            />
          </motion.div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

          {/* Name overlay on image */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold">
              {profile.name}
            </h3>
            <p className="text-primary-300 font-medium">
              {profile.role}
            </p>
          </motion.div>
        </div>

        <div className="p-6 relative z-10">
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
            viewport={{ once: true }}
          >
            {profile.bio}
          </motion.p>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Key Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + skillIndex * 0.05 + 0.7,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(59, 130, 246, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
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
            </motion.a>
            <motion.a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Animated background element
const BackgroundElement = ({ x, y, size, color, delay }: { x: number; y: number; size: number; color: string; delay: number }) => (
  <motion.div
    className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      backgroundColor: color,
    }}
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 0.7 }}
    transition={{
      duration: 1,
      delay,
      ease: "easeOut"
    }}
    viewport={{ once: true }}
  />
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <BackgroundElement x={-5} y={20} size={300} color="rgba(59, 130, 246, 0.1)" delay={0.2} />
        <BackgroundElement x={85} y={10} size={250} color="rgba(147, 51, 234, 0.1)" delay={0.4} />
        <BackgroundElement x={10} y={70} size={200} color="rgba(59, 130, 246, 0.1)" delay={0.6} />
        <BackgroundElement x={75} y={80} size={180} color="rgba(147, 51, 234, 0.1)" delay={0.8} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            className="section-title relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            About Us
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-500"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "100%", left: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Get to know the team behind ByteMatrix Software Solution - experts in frontend, backend, and full stack development
          </motion.p>
          <motion.p
            className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We specialize in contract-based development projects, delivering high-quality software solutions for businesses of all sizes.
            Our team combines expertise in frontend and backend technologies to create seamless full stack development experiences.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {profileData.map((profile, index) => (
            <ProfileCard key={profile.name} profile={profile} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;