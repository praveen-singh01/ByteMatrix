import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

// Path to our blog posts
const POSTS_PATH = path.join(process.cwd(), 'content/blog');

// Get all post slugs
export const getPostSlugs = (): string[] => {
  return fs.readdirSync(POSTS_PATH).filter(file => /\.mdx?$/.test(file));
};

// Get post by slug
export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
    scope: data,
  });

  return {
    slug: realSlug,
    frontMatter: data,
    content: mdxSource,
  };
};

// Get all posts with frontmatter
export const getAllPosts = async () => {
  const slugs = getPostSlugs();
  const posts = [];

  for (const slug of slugs) {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(POSTS_PATH, slug);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    posts.push({
      slug: realSlug,
      frontMatter: data,
    });
  }

  // Sort posts by date in descending order
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontMatter.date);
    const dateB = new Date(b.frontMatter.date);
    return dateB.getTime() - dateA.getTime();
  });
};
