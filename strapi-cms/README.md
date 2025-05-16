# ByteMatrix Blog CMS

This is the Strapi CMS for the ByteMatrix Software Solution blog. It provides a headless CMS to manage blog content that is displayed on the ByteMatrix portfolio website.

## Features

- Content management for blog posts
- Media library for images
- User management for content creators
- API endpoints for the Next.js frontend

## Content Types

### Blog Post

The main content type with the following fields:

- **Title** (Text): The title of the blog post
- **Slug** (UID): A unique identifier generated from the title
- **Author** (Enumeration): The author of the post (Pragya or Praveen)
- **Published Date** (Date): When the post was published
- **Cover Image** (Media): The featured image for the post
- **Content** (Rich Text): The main content of the blog post
- **Excerpt** (Text): A short summary of the post
- **Tags** (JSON): Categories or tags for the post

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run develop
# or
yarn develop
```

4. Access the admin panel at http://localhost:1337/admin

### Creating Content

1. Log in to the admin panel
2. Navigate to "Content Manager" > "Blog Posts"
3. Click "Create new entry"
4. Fill in the required fields
5. Save and publish your post

## API Endpoints

The following API endpoints are available:

- **GET /api/blog-posts**: Get all blog posts
- **GET /api/blog-posts/:id**: Get a specific blog post by ID
- **GET /api/blog-posts?filters[slug][$eq]=:slug**: Get a blog post by slug

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for instructions on deploying this Strapi CMS to Render or Railway.

## Integration with Next.js

The Strapi CMS is designed to work with the ByteMatrix Next.js portfolio website. The Next.js site fetches blog data from the Strapi API and displays it in the blog section.

### Environment Variables

Make sure to set the following environment variable in your Next.js project:

```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

For production, update this to your deployed Strapi URL.
