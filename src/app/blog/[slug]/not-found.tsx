import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
          404 - Post Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
