"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

interface BlogCardProps {
  post: {
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
  };
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const { frontMatter, slug } = post;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={frontMatter.coverImage}
            alt={frontMatter.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{formatDate(frontMatter.date)}</span>
            {frontMatter.readingTime && (
              <span>{frontMatter.readingTime}</span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {frontMatter.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-2">
            {frontMatter.excerpt}
          </p>

          {frontMatter.tags && frontMatter.tags.length > 0 && (
            <div className="mb-3 sm:mb-4">
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {frontMatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 dark:text-white font-medium">
                {frontMatter.author}
              </p>
              {frontMatter.authorRole && (
                <p className="text-gray-500 dark:text-gray-400">
                  {frontMatter.authorRole}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
