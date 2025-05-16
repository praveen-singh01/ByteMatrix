# Strapi CMS Integration Guide for ByteMatrix Portfolio

This guide explains how to set up and use the Strapi CMS for managing the blog section of your ByteMatrix portfolio website.

## Overview

We've set up a complete solution for managing your blog content using Strapi CMS:

1. A local Strapi CMS installation in the `strapi-cms` directory
2. Integration with your Next.js portfolio website
3. Deployment instructions for hosting the CMS on Render or Railway

## Getting Started

### 1. Running the Strapi CMS Locally

```bash
# Navigate to the Strapi CMS directory
cd strapi-cms

# Start the Strapi development server
source ~/.nvm/nvm.sh && nvm use 18 && npm run develop
```

This will start the Strapi server at http://localhost:1337/admin

### 2. Setting Up the Admin Account

1. Open http://localhost:1337/admin in your browser
2. Create a new administrator account
3. Log in to the admin panel

### 3. Creating the Blog Post Content Type

Follow the instructions in `strapi-cms/CONTENT_TYPE_SETUP.md` to create the Blog Post content type with all required fields:

- Title (Text)
- Slug (UID, generated from Title)
- Author (Enumeration: "Pragya", "Praveen")
- Published Date (Date)
- Cover Image (Media)
- Content (Rich Text)
- Excerpt (Text)
- Tags (JSON)

### 4. Setting Up Permissions

1. In the Strapi admin panel, go to Settings > Roles > Public
2. Enable "find" and "findOne" permissions for the Blog Post content type
3. Save your changes

### 5. Creating Sample Blog Posts

1. In the Strapi admin panel, go to Content Manager > Blog Posts
2. Create new blog posts with all the required fields
3. Publish your posts

## Running the Next.js Frontend with Strapi Integration

We've already updated your Next.js code to fetch blog data from the Strapi API. To run the frontend:

```bash
# Make sure you're in the main portfolio directory
cd /Users/praveensingh/Documents/portfolio

# Start the Next.js development server
npm run dev
```

Visit http://localhost:3000/blog to see your blog posts fetched from Strapi.

## How It Works

### API Integration

We've created a utility file at `src/utils/strapi/api.ts` that handles all communication with the Strapi API. This includes:

- Fetching all blog posts
- Fetching a single blog post by slug
- Handling image URLs from Strapi

### Blog Pages

The blog pages have been updated to use the Strapi API:

- `src/app/blog/page.tsx`: Lists all blog posts
- `src/app/blog/[slug]/page.tsx`: Displays a single blog post

### Environment Variables

The Strapi URL is configured in `.env.local`:

```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

For production, you'll need to update this to your deployed Strapi URL.

## Deployment

### Deploying Strapi CMS

Follow the instructions in `strapi-cms/DEPLOYMENT.md` to deploy your Strapi CMS to either Render or Railway. Both platforms offer free tiers suitable for a blog CMS.

### Updating Your Next.js Deployment

After deploying Strapi, update your Next.js deployment:

1. Update the `.env.local` file with your production Strapi URL
2. Rebuild and deploy your Next.js site
3. Set up a webhook in Strapi to trigger rebuilds when content changes

## Content Management Workflow

1. Log in to your Strapi admin panel
2. Create or edit blog posts
3. Publish your changes
4. Your Next.js site will automatically fetch the latest content

## Troubleshooting

### Common Issues

- **Images not displaying**: Make sure your Strapi media URLs are correctly configured in the Next.js image configuration
- **API errors**: Check that your Strapi permissions are correctly set for public access
- **Deployment issues**: Refer to the deployment guide for platform-specific troubleshooting

### Getting Help

If you encounter any issues:

1. Check the Strapi documentation: https://docs.strapi.io
2. Check the Next.js documentation: https://nextjs.org/docs
3. Consult the deployment platform's documentation (Render or Railway)

## Next Steps

- Set up a custom domain for your Strapi CMS
- Implement more advanced content types (e.g., projects, testimonials)
- Add authentication for protected content
- Set up a CDN for media files

## Resources

- Strapi Documentation: https://docs.strapi.io
- Next.js Documentation: https://nextjs.org/docs
- Render Documentation: https://render.com/docs
- Railway Documentation: https://docs.railway.app
