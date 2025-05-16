/**
 * Strapi API utilities for fetching blog data
 */

// Define the base URL for Strapi API
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
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
  content: string;
  excerpt: string;
  publishedAt: string;
  author: 'Pragya' | 'Praveen';
  coverImage: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
        alternativeText?: string;
      };
    };
  };
  tags?: string[];
}

/**
 * Fetch all published blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${API_URL}/blog-posts?populate=*&sort=publishedAt:desc&pagination[pageSize]=100`,
      { next: { revalidate: 60 } } // Revalidate every minute
    );

    console.log('Fetching from URL:', `${API_URL}/blog-posts?populate=*&sort=publishedAt:desc&pagination[pageSize]=100`);

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status}`);
    }

    const { data }: StrapiResponse<BlogPost> = await response.json();

    return data.map(item => ({
      ...item.attributes,
      id: item.id,
    })) as BlogPost[];
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
    const response = await fetch(
      `${API_URL}/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
      { next: { revalidate: 60 } } // Revalidate every minute
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.status}`);
    }

    const { data }: StrapiResponse<BlogPost> = await response.json();

    if (data.length === 0) {
      return null;
    }

    return {
      ...data[0].attributes,
      id: data[0].id,
    } as BlogPost;
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

  // Otherwise, prepend the Strapi URL
  return `${STRAPI_URL}${url}`;
}

/**
 * Get all blog post slugs for static generation
 */
export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const response = await fetch(
      `${API_URL}/blog-posts?fields[0]=slug&pagination[pageSize]=100`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blog slugs: ${response.status}`);
    }

    const { data }: StrapiResponse<{ slug: string }> = await response.json();

    return data.map(item => item.attributes.slug);
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
}
