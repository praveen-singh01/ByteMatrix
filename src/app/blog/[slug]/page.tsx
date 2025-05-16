import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogSlugs, getStrapiMediaUrl } from "@/utils/strapi/api";
import { formatDate } from "@/utils/formatDate";
import Footer from "@/components/Footer";
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | ByteMatrix Software Solution",
    };
  }

  const coverImageUrl = post.coverImage?.data?.attributes?.url
    ? getStrapiMediaUrl(post.coverImage.data.attributes.url)
    : "https://picsum.photos/seed/default/1200/630";

  return {
    title: `${post.title} | ByteMatrix Software Solution Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : undefined,
      images: [
        {
          url: coverImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [coverImageUrl],
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const slugs = await getAllBlogSlugs();

    return slugs.map((slug) => ({
      slug,
    }));
  } catch (error) {
    console.error("Error generating static params for blog posts:", error);
    // Return an empty array if we can't fetch the slugs
    // This will be handled at runtime with ISR (Incremental Static Regeneration)
    return [];
  }
}

// Revalidate the page every 60 seconds
export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
      notFound();
    }

    // Log the post data to see what we're getting
    console.log('Post data:', JSON.stringify(post, null, 2));

    const coverImageUrl = post.coverImage?.data?.attributes?.url
      ? getStrapiMediaUrl(post.coverImage.data.attributes.url)
      : "https://picsum.photos/seed/default/1200/630";

    console.log('Cover image URL:', coverImageUrl);

    const readingTime = `${Math.ceil((post.content?.length || 0) / 1000)} min read`;

  return (
    <main className="min-h-screen pt-16 md:pt-24" itemScope itemType="https://schema.org/BlogPosting">
      <article className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
        {/* Hero section */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white"
            itemProp="headline"
          >
            {post.title}
          </h1>

          <div className="flex items-center mb-6">
            <div className="mr-4">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                By <span itemProp="author">{post.author}</span>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                <time itemProp="datePublished" dateTime={post.publishedAt || ''}>
                  {post.publishedAt ? formatDate(post.publishedAt) : 'Date not available'}
                </time>
                {` · ${readingTime}`}
              </p>
            </div>
          </div>

          <div className="relative h-64 sm:h-96 w-full mb-8 rounded-xl overflow-hidden">
            <Image
              src={coverImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              priority
              itemProp="image"
            />
          </div>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          itemProp="articleBody"
        >
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]}
            remarkPlugins={[remarkGfm]}
          >
            {post.content || 'No content available.'}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-display font-bold mb-3 text-gray-900 dark:text-white">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
  } catch (error) {
    console.error(`Error rendering blog post page for slug ${params.slug}:`, error);
    return (
      <main className="min-h-screen pt-16 md:pt-24">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Available</h1>
            <p className="text-gray-600 dark:text-gray-300">
              This blog post is currently unavailable. Please check back later.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}
