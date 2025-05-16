import { Metadata } from "next";
import { getAllBlogPosts, getStrapiMediaUrl } from "@/utils/strapi/api";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Blog | ByteMatrix Software Solution",
  description: "Technical articles and insights from the ByteMatrix Software Solution team on web development, mobile apps, and software engineering.",
  keywords: ["ByteMatrix blog", "tech blog", "software development blog", "web development articles", "programming tutorials"],
};

// Generate static page at build time, but revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogPage() {
  try {
    // Fetch blog posts from Strapi
    const strapiPosts = await getAllBlogPosts();

    // Transform Strapi data to match the format expected by BlogList component
    const posts = strapiPosts && strapiPosts.length > 0
      ? strapiPosts.map(post => ({
          slug: post.slug || `post-${post.id || Math.random().toString(36).substring(2, 9)}`,
          frontMatter: {
            title: post.title || 'Untitled Post',
            date: post.publishedAt || new Date().toISOString(),
            excerpt: post.excerpt || 'No excerpt available',
            author: post.author || 'ByteMatrix Team',
            coverImage: post.coverImage?.data?.attributes?.url
              ? getStrapiMediaUrl(post.coverImage.data.attributes.url)
              : "https://picsum.photos/seed/default/1200/630",
            tags: post.tags || [],
            readingTime: `${Math.ceil((post.content?.length || 0) / 1000)} min read`,
          },
        }))
      : [];

    return (
      <main className="min-h-screen pt-16 md:pt-24" itemScope itemType="https://schema.org/Blog">
        <BlogList posts={posts} />
      </main>
    );
  } catch (error) {
    console.error("Error rendering blog page:", error);

    // Fallback content when Strapi is not available
    return (
      <main className="min-h-screen pt-16 md:pt-24" itemScope itemType="https://schema.org/Blog">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-center">
            Our Blog
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Technical articles and insights from the ByteMatrix Software Solution team.
          </p>
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">
              Blog posts are currently being loaded. Please check back soon!
            </p>
          </div>
        </div>
      </main>
    );
  }
}
