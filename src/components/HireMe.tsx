"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HireMe = () => {

  return (
    <div className="relative z-10 -mt-16 mb-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <motion.div
                className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-white/10 mix-blend-overlay"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-10 right-10 w-24 h-24 rounded-full bg-white/10 mix-blend-overlay"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute bottom-10 left-1/3 w-32 h-32 rounded-full bg-white/10 mix-blend-overlay"
                animate={{
                  scale: [1, 1.15, 1],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              {/* Animated code lines */}
              <motion.div
                className="absolute top-5 left-1/4 text-white/20 font-mono text-xs whitespace-nowrap"
                animate={{ x: [-100, -500] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                const HireUs = () =&gt; &#123; return &lt;div&gt;We build amazing web experiences&lt;/div&gt; &#125;
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-1/4 text-white/20 font-mono text-xs whitespace-nowrap"
                animate={{ x: [300, -200] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              >
                import &#123; Skills, Passion, Innovation &#125; from &apos;@/our-team&apos;;
              </motion.div>

              {/* Additional code line */}
              <motion.div
                className="absolute top-1/2 right-10 text-white/20 font-mono text-xs whitespace-nowrap"
                animate={{ x: [200, -300] }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear", delay: 5 }}
              >
                function createAmazingExperience() &#123; /* Your vision + our expertise */ &#125;
              </motion.div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute top-20 left-1/4 text-white/30 text-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                &lt;/&gt;
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-1/4 text-white/30 text-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1 }}
              >
                {}
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative">
              {/* Left side: Hire Us content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-white font-medium">Available for new projects</p>
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                  Let&apos;s build something
                  <span className="block text-primary-200">amazing together</span>
                </h2>

                <p className="text-primary-100 max-w-md">
                  We specialize in creating beautiful, high-performance web applications
                  that help businesses grow. Our team is ready to turn your ideas into reality.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <motion.a
                    href="mailto:contact@example.com?subject=New%20Project%20Inquiry"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    Start a Project
                  </motion.a>

                  <motion.a
                    href="tel:+15551234567"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-primary-700 text-white font-medium rounded-lg border border-primary-500 hover:bg-primary-600 transition-colors"
                  >
                    Call Us
                  </motion.a>
                </div>

                <div className="pt-4">
                  <div className="flex items-center gap-4 text-primary-100">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
                        contact@example.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side: Quick stats */}
              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary-500/20" />
                    <div className="text-4xl font-bold text-white mb-2">50+</div>
                    <div className="text-primary-100">Projects Completed</div>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary-500/20" />
                    <div className="text-4xl font-bold text-white mb-2">100%</div>
                    <div className="text-primary-100">Client Satisfaction</div>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary-500/20" />
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-primary-100">Support</div>
                  </motion.div>

                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-primary-500/20" />
                    <div className="text-4xl font-bold text-white mb-2">3+</div>
                    <div className="text-primary-100">Years Experience</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HireMe;
