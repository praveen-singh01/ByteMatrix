# Setting Up the Blog Post Content Type in Strapi

This guide will walk you through creating the Blog Post content type in Strapi with all the required fields.

## Prerequisites

- Strapi CMS installed and running
- Admin account created

## Creating the Blog Post Content Type

1. Log in to the Strapi admin panel at http://localhost:1337/admin
2. Navigate to "Content-Type Builder" in the left sidebar
3. Click "Create new collection type"

### Basic Information

- Display name: `Blog Post`
- API ID: `blog-post` (this will be automatically filled)
- Click "Continue"

### Adding Fields

Add the following fields one by one:

#### 1. Title (Text)

- Field name: `Title`
- Type: `Text`
- Advanced Settings:
  - Required field: Yes
  - Unique field: No
  - Minimum length: 5
  - Maximum length: 150
- Click "Add another field"

#### 2. Slug (UID)

- Field name: `Slug`
- Type: `UID`
- Attached field: `Title` (select from dropdown)
- Advanced Settings:
  - Required field: Yes
  - Unique field: Yes
- Click "Add another field"

#### 3. Content (Rich Text)

- Field name: `Content`
- Type: `Rich Text`
- Advanced Settings:
  - Required field: Yes
- Click "Add another field"

#### 4. Excerpt (Text)

- Field name: `Excerpt`
- Type: `Text`
- Advanced Settings:
  - Required field: Yes
  - Minimum length: 10
  - Maximum length: 300
- Click "Add another field"

#### 5. Author (Enumeration)

- Field name: `Author`
- Type: `Enumeration`
- Values: Add two values:
  - `Pragya`
  - `Praveen`
- Advanced Settings:
  - Required field: Yes
  - Default value: (leave empty)
- Click "Add another field"

#### 6. Published Date (Date)

- Field name: `PublishedAt`
- Type: `Date`
- Advanced Settings:
  - Required field: Yes
  - Default value: Current date
- Click "Add another field"

#### 7. Cover Image (Media)

- Field name: `CoverImage`
- Type: `Media`
- Allowed types of media: `Images`
- Advanced Settings:
  - Required field: Yes
  - Multiple media: No
- Click "Add another field"

#### 8. Tags (JSON)

- Field name: `Tags`
- Type: `JSON`
- Advanced Settings:
  - Required field: No
- Click "Finish"

### Save the Content Type

- Click "Save" to create the content type
- Wait for Strapi to restart

## Setting Up Permissions

To allow public access to blog posts:

1. Navigate to "Settings" in the left sidebar
2. Click on "Roles" under "Users & Permissions plugin"
3. Click on the "Public" role
4. In the permissions section, find "Blog Post"
5. Check the boxes for:
   - `find` (to get all blog posts)
   - `findOne` (to get a single blog post)
6. Click "Save"

## Creating Sample Blog Posts

1. Navigate to "Content Manager" in the left sidebar
2. Click on "Blog Post" collection type
3. Click "Create new entry"
4. Fill in the fields:
   - Title: Enter a blog post title
   - Content: Write or paste the blog post content
   - Excerpt: Write a short summary
   - Author: Select either Pragya or Praveen
   - Published Date: Select the publication date
   - Cover Image: Upload an image
   - Tags: Enter an array of tags, e.g., `["Web Development", "React", "Next.js"]`
5. Click "Save" and then "Publish"
6. Repeat for additional blog posts

## Testing the API

You can test the API endpoints to ensure they're working correctly:

1. Navigate to "Documentation" in the left sidebar
2. Find the "Blog Post" section
3. Test the following endpoints:
   - GET `/api/blog-posts`: Should return all published blog posts
   - GET `/api/blog-posts/:id`: Should return a specific blog post
   - GET `/api/blog-posts?filters[slug][$eq]=:slug`: Should return a blog post by slug

## Next Steps

After setting up the content type and creating some sample blog posts, you can:

1. Deploy your Strapi CMS (see [DEPLOYMENT.md](./DEPLOYMENT.md))
2. Connect your Next.js frontend to the Strapi API
3. Set up webhooks to trigger rebuilds when content changes
