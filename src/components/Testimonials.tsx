"use client";

import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "https://i.pravatar.cc/150?img=1",
    content: "Working with Praveen, Pragya, and Mihir was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded our expectations in terms of quality and performance.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupX",
    image: "https://i.pravatar.cc/150?img=2",
    content: "The team's expertise in React, Node.js, and AI helped us build a scalable and intelligent application. Their attention to detail and problem-solving skills are exceptional.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "DesignHub",
    image: "https://i.pravatar.cc/150?img=3",
    content: "The team transformed our mobile app with Flutter and integrated AI features. The performance improvements and new features they implemented have significantly increased user engagement.",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    company: "InnovateTech",
    image: "https://i.pravatar.cc/150?img=4",
    content: "Their full-stack development and AI skills are impressive. They helped us migrate our legacy system to a modern tech stack with intelligent features, making it more efficient and easier to maintain.",
  },
  {
    name: "Jennifer Lee",
    role: "AI Research Director",
    company: "FutureTech",
    image: "https://i.pravatar.cc/150?img=5",
    content: "Mihir's AI expertise combined with Praveen and Pragya's development skills created a powerful synergy. They built an AI-powered analytics dashboard that transformed our business intelligence capabilities.",
  },
];

// Animated decorative element
const DecorativeCircle = ({ delay, x, y, size, color }: { delay: number; x: number; y: number; size: number; color: string }) => (
  <motion.div
    className="absolute rounded-full opacity-70"
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
      opacity: [0, 0.7, 0.5]
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

// Animated quote icon
const QuoteIcon = ({ isActive }: { isActive: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotate: -45 }}
    animate={{
      opacity: isActive ? 1 : 0,
      scale: isActive ? 1 : 0,
      rotate: isActive ? 0 : -45
    }}
    transition={{
      duration: 0.5,
      type: "spring",
      stiffness: 200
    }}
    className="absolute -top-6 -left-6 text-primary-500 dark:text-primary-400 z-10"
  >
    <svg
      className="w-12 h-12"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  </motion.div>
);

// Staggered text animation for testimonial content
const StaggeredText = ({ text, isActive, delay = 0 }: { text: string; isActive: boolean; delay?: number }) => {
  const words = text.split(" ");

  return (
    <p className="text-gray-700 dark:text-gray-300 italic">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 10
          }}
          transition={{
            duration: 0.3,
            delay: isActive ? delay + (i * 0.02) : 0,
            ease: "easeOut"
          }}
          className="inline-block mr-1"
        >
          {word}{" "}
        </motion.span>
      ))}
    </p>
  );
};

const TestimonialCard = ({
  testimonial,
  isActive,
  direction
}: {
  testimonial: typeof testimonials[0];
  isActive: boolean;
  direction: number;
}) => {
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.8,
      transition: {
        duration: 0.4
      }
    })
  };

  return (
    <motion.div
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl p-10 transform-gpu"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <QuoteIcon isActive={isActive} />

      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-50"
        style={{
          background: `linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))`,
          filter: "blur(8px)",
          zIndex: -1
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />

      <div className="flex items-center mb-6">
        <motion.div
          className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            delay: 0.2
          }}
        >
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </motion.div>
        <div>
          <motion.h3
            className="text-xl font-display font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {testimonial.name}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {testimonial.role} at {testimonial.company}
          </motion.p>
        </div>
      </div>

      <StaggeredText text={testimonial.content} isActive={isActive} delay={0.5} />

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-primary-500/10 z-0"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
    </motion.div>
  );
};

const Testimonials = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Handle navigation
  const nextTestimonial = () => {
    setActiveIndex(prev => [(prev[0] + 1) % testimonials.length, 1]);
    setAutoplay(false);
  };

  const prevTestimonial = () => {
    setActiveIndex(prev => [(prev[0] - 1 + testimonials.length) % testimonials.length, -1]);
    setAutoplay(false);
  };

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay && isInView) {
      interval = setInterval(() => {
        setActiveIndex(prev => [(prev[0] + 1) % testimonials.length, 1]);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay, isInView]);

  // Animate section when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <DecorativeCircle delay={0} x={10} y={20} size={100} color="rgba(59, 130, 246, 0.1)" />
        <DecorativeCircle delay={0.5} x={85} y={30} size={150} color="rgba(147, 51, 234, 0.1)" />
        <DecorativeCircle delay={1} x={20} y={70} size={120} color="rgba(59, 130, 246, 0.1)" />
        <DecorativeCircle delay={1.5} x={70} y={80} size={80} color="rgba(147, 51, 234, 0.1)" />
      </div>

      <div className="container">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title relative inline-block">
              Testimonials
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-500"
                initial={{ width: 0, left: "50%" }}
                whileInView={{ width: "100%", left: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </h2>
          </motion.div>
          <p className="section-subtitle">
            What people say about our work
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[350px] perspective">
            <AnimatePresence custom={direction} mode="wait">
              <TestimonialCard
                key={activeIndex}
                testimonial={testimonials[activeIndex]}
                isActive={true}
                direction={direction}
              />
            </AnimatePresence>
          </div>

          <motion.div
            className="flex justify-center items-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setActiveIndex([index, activeIndex > index ? -1 : 1]);
                    setAutoplay(false);
                  }}
                  className={`relative h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-primary-500" : "w-3 bg-gray-300 dark:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index === activeIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary-400 opacity-50"
                      animate={{
                        scale: [1, 1.4, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror"
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;