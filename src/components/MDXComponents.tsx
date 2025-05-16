import Image from 'next/image';
import Link from 'next/link';

// Custom components for MDX content
const MDXComponents = {
  // Override default elements
  h1: (props: any) => (
    <h1 
      className="text-3xl sm:text-4xl font-display font-bold mt-8 mb-4 text-gray-900 dark:text-white" 
      {...props} 
    />
  ),
  h2: (props: any) => (
    <h2 
      className="text-2xl sm:text-3xl font-display font-bold mt-8 mb-4 text-gray-900 dark:text-white" 
      {...props} 
    />
  ),
  h3: (props: any) => (
    <h3 
      className="text-xl sm:text-2xl font-display font-bold mt-6 mb-3 text-gray-900 dark:text-white" 
      {...props} 
    />
  ),
  h4: (props: any) => (
    <h4 
      className="text-lg sm:text-xl font-display font-bold mt-6 mb-3 text-gray-900 dark:text-white" 
      {...props} 
    />
  ),
  p: (props: any) => (
    <p 
      className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed" 
      {...props} 
    />
  ),
  a: (props: any) => (
    <a 
      className="text-primary-600 dark:text-primary-400 hover:underline" 
      {...props} 
    />
  ),
  ul: (props: any) => (
    <ul 
      className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300" 
      {...props} 
    />
  ),
  ol: (props: any) => (
    <ol 
      className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300" 
      {...props} 
    />
  ),
  li: (props: any) => (
    <li 
      className="mb-1" 
      {...props} 
    />
  ),
  blockquote: (props: any) => (
    <blockquote 
      className="border-l-4 border-primary-500 pl-4 italic my-4 text-gray-700 dark:text-gray-300" 
      {...props} 
    />
  ),
  code: (props: any) => (
    <code 
      className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 text-sm font-mono text-gray-800 dark:text-gray-200" 
      {...props} 
    />
  ),
  pre: (props: any) => (
    <pre 
      className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto mb-4 text-sm font-mono" 
      {...props} 
    />
  ),
  hr: (props: any) => (
    <hr 
      className="my-8 border-gray-200 dark:border-gray-700" 
      {...props} 
    />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-6">
      <table 
        className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" 
        {...props} 
      />
    </div>
  ),
  th: (props: any) => (
    <th 
      className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-800" 
      {...props} 
    />
  ),
  td: (props: any) => (
    <td 
      className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700" 
      {...props} 
    />
  ),
  // Custom components
  Image: (props: any) => (
    <div className="relative h-64 sm:h-96 my-6">
      <Image
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  ),
  Link: (props: any) => (
    <Link
      className="text-primary-600 dark:text-primary-400 hover:underline"
      {...props}
    />
  ),
  // Add more custom components as needed
};

export default MDXComponents;
