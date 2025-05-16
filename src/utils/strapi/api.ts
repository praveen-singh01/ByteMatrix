/**
 * Strapi API utilities for fetching blog data
 */

// Define the base URL for Strapi API
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://bytematrix.onrender.com';
const API_URL = `${STRAPI_URL}/api`;

// Types for Strapi API responses
export interface StrapiResponse<T> {
  data: StrapiData<T>[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface StrapiSingleResponse<T> {
  data: StrapiData<T>;
  meta: {};
}

export interface BlogPost {
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  publishedAt?: string;
  author?: string; // Changed from union type to allow any string
  coverImage?: {
    data?: {
      attributes?: {
        url?: string;
        width?: number;
        height?: number;
        alternativeText?: string;
      };
    };
  };
  tags?: string[];
  id?: number;
}

/**
 * Fetch all published blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${API_URL}/praveen-s-first-blogs?populate=*&sort=publishedAt:desc&pagination[pageSize]=100`,
      { next: { revalidate: 60 } } // Revalidate every minute
    );

    console.log('Fetching from URL:', `${API_URL}/praveen-s-first-blogs?populate=*&sort=publishedAt:desc&pagination[pageSize]=100`);

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status}`);
    }

    const responseData = await response.json();

    // Log the full response for debugging
    console.log('Full Strapi response:', JSON.stringify(responseData, null, 2));

    // Check if the response has the expected structure
    if (!responseData || !responseData.data) {
      console.log('Unexpected API response structure:', responseData);
      return [];
    }

    const { data } = responseData;

    // Handle case where data is not an array
    if (!Array.isArray(data)) {
      console.log('API response data is not an array:', data);
      return [];
    }

    // Log a sample item to see its structure
    if (data.length > 0) {
      console.log('Sample item structure:', JSON.stringify(data[0], null, 2));
    }

    // Map Strapi fields to our BlogPost interface
    return data.map(item => {
      // Extract content from Flutter blocks if available
      let content = '';
      let title = '';

      if (item.Flutter && Array.isArray(item.Flutter)) {
        // Extract the first paragraph as title if available
        const firstParagraph = item.Flutter.find((block: any) =>
          block.type === 'paragraph' &&
          block.children &&
          block.children.length > 0 &&
          block.children[0].text
        );

        if (firstParagraph && firstParagraph.children[0].text) {
          title = firstParagraph.children[0].text;
        }

        // Combine all paragraph texts for content
        content = item.Flutter
          .filter((block: any) => block.type === 'paragraph')
          .map((block: any) => {
            if (block.children && block.children.length > 0) {
              return block.children.map((child: any) => child.text).join('');
            }
            return '';
          })
          .join('\n\n');
      }

      // Extract author name from the "Author: Name" format
      let author = 'ByteMatrix Team';
      if (item.Author && typeof item.Author === 'string') {
        const authorMatch = item.Author.match(/Author:\s*(.+)/);
        if (authorMatch && authorMatch[1]) {
          author = authorMatch[1].trim();
        }
      }

      // Use Flutter_text as excerpt if available, otherwise use first 150 chars of content
      const excerpt = item.Flutter_text || (content ? content.substring(0, 150) + '...' : 'No excerpt available');

      // Log the flutterimage field to see what we're getting
      console.log('flutterimage field:', JSON.stringify(item.flutterimage, null, 2));

      const blogPost = {
        id: item.id,
        title: title || 'Flutter Development in 2025',
        slug: `post-${item.id}`,
        content: content || item.Flutter_text || 'No content available',
        excerpt: excerpt,
        publishedAt: item.publishedAt || item.date || new Date().toISOString(),
        author: author,
        coverImage: item.flutterimage ? {
          data: {
            attributes: {
              url: item.flutterimage.url || '',
              width: item.flutterimage.width,
              height: item.flutterimage.height,
              alternativeText: item.flutterimage.alternativeText || 'Flutter blog image',
            }
          }
        } : {
          data: {
            attributes: {
              url: 'https://picsum.photos/seed/flutter/1200/630',
            }
          }
        },
        tags: ['Flutter', 'Mobile Development', 'Cross-Platform', 'Dart', 'UI/UX'],
      };

      // Log the constructed blog post
      console.log('Constructed blog post:', JSON.stringify({
        id: blogPost.id,
        title: blogPost.title,
        coverImage: blogPost.coverImage
      }, null, 2));

      return blogPost;
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Extract ID from slug if it's in the format "post-123"
    const idMatch = slug.match(/^post-(\d+)$/);
    let queryParam = '';

    if (idMatch && idMatch[1]) {
      // If slug is in format post-123, use ID filter
      const id = idMatch[1];
      queryParam = `filters[id][$eq]=${id}`;
    } else {
      // Otherwise try to use slug filter (though our schema doesn't have a slug field)
      queryParam = `filters[slug][$eq]=${slug}`;
    }

    const response = await fetch(
      `${API_URL}/praveen-s-first-blogs?${queryParam}&populate=*`,
      { next: { revalidate: 60 } } // Revalidate every minute
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.status}`);
    }

    const responseData = await response.json();

    // Check if the response has the expected structure
    if (!responseData || !responseData.data) {
      console.log('Unexpected API response structure:', responseData);
      return null;
    }

    const { data } = responseData;

    // Handle case where data is not an array
    if (!Array.isArray(data) || data.length === 0) {
      console.log('API response data is not an array or is empty:', data);
      return null;
    }

    // Map Strapi fields to our BlogPost interface
    const item = data[0];

    // Log the full item for debugging
    console.log('Full blog post item from Strapi:', JSON.stringify(item, null, 2));

    // Extract content from Flutter blocks if available
    let content = '';
    let title = '';

    if (item.Flutter && Array.isArray(item.Flutter)) {
      // Extract the first paragraph as title if available
      const firstParagraph = item.Flutter.find((block: any) =>
        block.type === 'paragraph' &&
        block.children &&
        block.children.length > 0 &&
        block.children[0].text
      );

      if (firstParagraph && firstParagraph.children[0].text) {
        title = firstParagraph.children[0].text;
      }

      // Combine all paragraph texts for content
      content = item.Flutter
        .filter((block: any) => block.type === 'paragraph')
        .map((block: any) => {
          if (block.children && block.children.length > 0) {
            return block.children.map((child: any) => child.text).join('');
          }
          return '';
        })
        .join('\n\n');
    }

    // Extract author name from the "Author: Name" format
    let author = 'ByteMatrix Team';
    if (item.Author && typeof item.Author === 'string') {
      const authorMatch = item.Author.match(/Author:\s*(.+)/);
      if (authorMatch && authorMatch[1]) {
        author = authorMatch[1].trim();
      }
    }

    // Use Flutter_text as excerpt if available, otherwise use first 150 chars of content
    const excerpt = item.Flutter_text || (content ? content.substring(0, 150) + '...' : 'No excerpt available');

    // Log the flutterimage field specifically
    console.log('flutterimage field in single post:', JSON.stringify(item.flutterimage, null, 2));

    const blogPost = {
      id: item.id,
      title: title || 'Flutter Development in 2025',
      slug: `post-${item.id}`,
      content: content || item.Flutter_text || 'No content available',
      excerpt: excerpt,
      publishedAt: item.publishedAt || item.date || new Date().toISOString(),
      author: author,
      coverImage: item.flutterimage ? {
        data: {
          attributes: {
            url: item.flutterimage.url || '',
            width: item.flutterimage.width,
            height: item.flutterimage.height,
            alternativeText: item.flutterimage.alternativeText || 'Flutter blog image',
          }
        }
      } : {
        data: {
          attributes: {
            url: 'https://picsum.photos/seed/flutter/1200/630',
          }
        }
      },
      tags: ['Flutter', 'Mobile Development', 'Cross-Platform', 'Dart', 'UI/UX'],
    };

    // Log the constructed blog post
    console.log('Constructed single blog post:', JSON.stringify({
      id: blogPost.id,
      title: blogPost.title,
      coverImage: blogPost.coverImage
    }, null, 2));

    return blogPost;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Get the URL for a Strapi media asset
 */
export function getStrapiMediaUrl(url: string): string {
  if (!url) return '';

  // If the URL is already absolute, return it as is
  if (url.startsWith('http')) {
    return url;
  }

  // Make sure the URL starts with a slash
  const formattedUrl = url.startsWith('/') ? url : `/${url}`;

  // Otherwise, prepend the Strapi URL
  return `${STRAPI_URL}${formattedUrl}`;
}

/**
 * Get all blog post slugs for static generation
 */
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const response = await fetch(
      `${API_URL}/praveen-s-first-blogs?fields[0]=id&pagination[pageSize]=100`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blog slugs: ${response.status}`);
    }

    const responseData = await response.json();

    // Check if the response has the expected structure
    if (!responseData || !responseData.data) {
      console.log('Unexpected API response structure:', responseData);
      return [];
    }

    const { data } = responseData;

    // Handle case where data is not an array
    if (!Array.isArray(data)) {
      console.log('API response data is not an array:', data);
      return [];
    }

    // Generate slugs in the format "post-{id}" from the IDs
    return data.map(item => `post-${item.id}`);
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
}
