"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// Import icons from different icon sets to ensure compatibility
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaPython, FaVuejs, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma } from "react-icons/si";
import { SiExpress, SiMongodb, SiPostgresql, SiDjango } from "react-icons/si";
import { SiFlutter, SiDart, SiFirebase, SiSwift, SiKotlin } from "react-icons/si";
import { SiGithubactions, SiKubernetes, SiGooglecloud } from "react-icons/si";

// Define skill categories with icons
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90, icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", level: 85, icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", level: 80, icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vue.js", level: 82, icon: FaVuejs, color: "#4FC08D" },
      { name: "Figma", level: 88, icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85, icon: FaNodeJs, color: "#339933" },
      { name: "Express", level: 80, icon: SiExpress, color: "#000000" },
      { name: "MongoDB", level: 75, icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", level: 70, icon: SiPostgresql, color: "#4169E1" },
      { name: "Python", level: 78, icon: FaPython, color: "#3776AB" },
      { name: "Django", level: 72, icon: SiDjango, color: "#092E20" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", level: 85, icon: SiFlutter, color: "#02569B" },
      { name: "Dart", level: 80, icon: SiDart, color: "#0175C2" },
      { name: "React Native", level: 75, icon: FaReact, color: "#61DAFB" },
      { name: "Firebase", level: 80, icon: SiFirebase, color: "#FFCA28" },
      { name: "Swift", level: 65, icon: SiSwift, color: "#F05138" },
      { name: "Kotlin", level: 68, icon: SiKotlin, color: "#7F52FF" },
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      { name: "Git", level: 85, icon: FaGitAlt, color: "#F05032" },
      { name: "Docker", level: 70, icon: FaDocker, color: "#2496ED" },
      { name: "AWS", level: 75, icon: FaAws, color: "#FF9900" },
      { name: "CI/CD", level: 75, icon: SiGithubactions, color: "#2088FF" },
      { name: "Kubernetes", level: 65, icon: SiKubernetes, color: "#326CE5" },
      { name: "Google Cloud", level: 70, icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
];

// Animated skill card component
const SkillCard = ({
  skill,
  index
}: {
  skill: {
    name: string;
    level: number;
    icon: React.ElementType;
    color: string
  };
  index: number
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center relative overflow-hidden group h-full"
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{ backgroundColor: skill.color }}
      />

      {/* Icon */}
      <motion.div
        className="text-4xl sm:text-5xl mb-3 sm:mb-4 relative"
        animate={{
          y: isHovered ? [0, -10, 0] : 0,
          rotate: isHovered ? [0, -5, 5, -5, 0] : 0
        }}
        transition={{
          duration: isHovered ? 1 : 0.5,
          ease: "easeInOut"
        }}
        style={{ color: skill.color }}
      >
        <Icon />
      </motion.div>

      {/* Skill name */}
      <h3 className="text-base sm:text-lg font-display font-bold text-gray-900 dark:text-white mb-2 text-center">
        {skill.name}
      </h3>

      {/* Skill level */}
      <div className="w-full mt-2">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            Proficiency
          </span>
          <span className="text-xs font-medium" style={{ color: skill.color }}>
            {skill.level}%
          </span>
        </div>
        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full rounded-full"
            style={{ backgroundColor: skill.color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Category section component
const CategorySection = ({
  category,
  items
}: {
  category: string;
  items: {
    name: string;
    level: number;
    icon: React.ElementType;
    color: string
  }[]
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16 last:mb-0"
    >
      <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 text-center">
        {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {items.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

// Decorative floating element
const FloatingElement = ({
  delay,
  x,
  y,
  size,
  color
}: {
  delay: number;
  x: number;
  y: number;
  size: number;
  color: string
}) => (
  <motion.div
    className="absolute rounded-full opacity-30"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      backgroundColor: color,
    }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1.2, 1],
      opacity: [0, 0.3, 0.2]
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 3,
    }}
  />
);

// Main Skills component
const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <FloatingElement delay={0} x={5} y={20} size={100} color="#3B82F6" />
        <FloatingElement delay={0.5} x={85} y={10} size={150} color="#8B5CF6" />
        <FloatingElement delay={1} x={20} y={70} size={120} color="#EC4899" />
        <FloatingElement delay={1.5} x={70} y={80} size={80} color="#10B981" />
        <FloatingElement delay={2} x={40} y={40} size={100} color="#F59E0B" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Tech Stack</h2>
          <p className="section-subtitle">
            Technologies we've mastered to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Display each category */}
        {skills.map((skillGroup) => (
          <CategorySection
            key={skillGroup.category}
            category={skillGroup.category}
            items={skillGroup.items}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;