"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

interface BlogListProps {
  posts: Array<{
    slug: string;
    frontMatter: {
      title: string;
      date: string;
      excerpt: string;
      author: string;
      authorRole?: string;
      coverImage: string;
      tags?: string[];
      readingTime?: string;
    };
  }>;
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <BackgroundElement x={-5} y={20} size={300} color="rgba(59, 130, 246, 0.1)" delay={0.2} />
        <BackgroundElement x={85} y={10} size={250} color="rgba(147, 51, 234, 0.1)" delay={0.4} />
        <BackgroundElement x={10} y={70} size={200} color="rgba(59, 130, 246, 0.1)" delay={0.6} />
        <BackgroundElement x={75} y={80} size={180} color="rgba(147, 51, 234, 0.1)" delay={0.8} />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h1
            className="section-title relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Blog
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-500"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "100%", left: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h1>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Technical insights and articles from our team
          </motion.p>
          <motion.p
            className="max-w-3xl mx-auto text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore our collection of articles on web development, mobile apps, and software engineering best practices.
          </motion.p>
        </motion.div>

        {posts.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-300">
              No blog posts found. Check back soon for new content!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Background animation element
const BackgroundElement = ({ x, y, size, color, delay }: { x: number, y: number, size: number, color: string, delay: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      backgroundColor: color,
      filter: 'blur(80px)',
    }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay }}
  />
);

export default BlogList;
