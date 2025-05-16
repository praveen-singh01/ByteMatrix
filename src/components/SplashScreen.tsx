"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [matrixChars, setMatrixChars] = useState<string[][]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);

  // Check if this is the first visit
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const hasSeenSplash = localStorage.getItem('byteMatrixSplashSeen');

      if (hasSeenSplash) {
        // If user has seen splash before, hide it immediately
        setIsVisible(false);
      } else {
        // Mark that user has seen the splash screen
        localStorage.setItem('byteMatrixSplashSeen', 'true');
      }
    }
  }, []);

  // Generate matrix characters
  useEffect(() => {
    const rows = 15;
    const cols = 30;
    const chars = "01";

    const matrix = Array(rows).fill(0).map(() =>
      Array(cols).fill(0).map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    );

    setMatrixChars(matrix);

    // Start animation sequence
    const timer1 = setTimeout(() => setShowMatrix(true), 500);
    const timer2 = setTimeout(() => setShowLogo(true), 1800);
    const timer3 = setTimeout(() => setShowText(true), 2500);

    // Progress bar animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(interval);
    };
  }, []);

  // 3D matrix effect with canvas
  useEffect(() => {
    if (!canvasRef.current || !showMatrix) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    const drops: number[] = Array(columns).fill(0);

    const binary = "01";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, [showMatrix]);

  // Hexagon grid for ByteMatrix logo
  const HexGrid = () => {
    const hexagons = Array(7).fill(0);

    return (
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          {hexagons.map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-24 h-24"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: index * 60,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
              >
                <motion.path
                  d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
                  fill="none"
                  stroke="rgba(14, 165, 233, 0.7)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.2 * index }}
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  // 3D cube animation
  const Cube = () => {
    return (
      <motion.div
        className="w-32 h-32 relative preserve-3d"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Front */}
        <motion.div
          className="absolute w-full h-full bg-primary-600/30 border border-primary-400"
          style={{
            transform: "translateZ(64px)",
            backfaceVisibility: "hidden",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />

        {/* Back */}
        <motion.div
          className="absolute w-full h-full bg-primary-600/30 border border-primary-400"
          style={{
            transform: "rotateY(180deg) translateZ(64px)",
            backfaceVisibility: "hidden",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        {/* Left */}
        <motion.div
          className="absolute w-full h-full bg-primary-600/30 border border-primary-400"
          style={{
            transform: "rotateY(-90deg) translateZ(64px)",
            backfaceVisibility: "hidden",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        />

        {/* Right */}
        <motion.div
          className="absolute w-full h-full bg-primary-600/30 border border-primary-400"
          style={{
            transform: "rotateY(90deg) translateZ(64px)",
            backfaceVisibility: "hidden",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        {/* Top */}
        <motion.div
          className="absolute w-full h-full bg-primary-600/30 border border-primary-400"
          style={{
            transform: "rotateX(90deg) translateZ(64px)",
            backfaceVisibility: "hidden",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />

        {/* Bottom */}
        <motion.div
          className="absolute w-full h-full bg-primary-600/30 border border-primary-400"
          style={{
            transform: "rotateX(-90deg) translateZ(64px)",
            backfaceVisibility: "hidden",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        />
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Matrix background effect */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-30"
          />

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo animation */}
            {showLogo && (
              <motion.div
                className="relative mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              >
                <div className="relative">
                  <HexGrid />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cube />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ByteMatrix text */}
            {showText && (
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-primary-500">Byte</span>
                  <span className="text-white">Matrix</span>
                </motion.h1>
                <motion.p
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Software Solution
                </motion.p>
              </motion.div>
            )}

            {/* Progress bar */}
            <motion.div
              className="w-64 h-1 bg-gray-800 rounded-full mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-primary-500"
                style={{ width: `${progress}%` }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
