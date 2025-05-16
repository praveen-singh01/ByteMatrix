# Deploying Strapi CMS to Render or Railway

This guide provides instructions for deploying your Strapi CMS to either Render or Railway, which both offer free tiers suitable for a blog CMS.

## Prerequisites

- A GitHub account
- Your Strapi CMS project pushed to a GitHub repository
- A PostgreSQL database (both Render and Railway offer free PostgreSQL databases)

## Option 1: Deploying to Render

### Step 1: Create a PostgreSQL Database on Render

1. Sign up or log in to [Render](https://render.com/)
2. From the dashboard, click on "New" and select "PostgreSQL"
3. Configure your database:
   - Name: `bytematrix-strapi-db` (or any name you prefer)
   - Database: `strapi`
   - User: `strapi`
   - Choose the free plan
4. Click "Create Database"
5. Once created, note down the following information:
   - Internal Database URL
   - External Database URL
   - PostgreSQL Password

### Step 2: Prepare Your Strapi Project for Deployment

1. Create a `render.yaml` file in the root of your Strapi project:

```yaml
services:
  - type: web
    name: bytematrix-strapi
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_VERSION
        value: 18.20.8
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        fromDatabase:
          name: bytematrix-strapi-db
          property: connectionString
      - key: JWT_SECRET
        generateValue: true
      - key: ADMIN_JWT_SECRET
        generateValue: true
      - key: APP_KEYS
        generateValue: true
      - key: API_TOKEN_SALT
        generateValue: true

databases:
  - name: bytematrix-strapi-db
    databaseName: strapi
    user: strapi
    plan: free
```

2. Update your `config/database.js` file to use PostgreSQL:

```javascript
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL', false) && {
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
      },
    },
    debug: false,
  },
});
```

3. Install the PostgreSQL client:

```bash
npm install pg
```

### Step 3: Deploy to Render

1. Push your changes to GitHub
2. In Render dashboard, click "New" and select "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file and set up your service
5. Click "Apply" to start the deployment

## Option 2: Deploying to Railway

### Step 1: Set Up Railway Project

1. Sign up or log in to [Railway](https://railway.app/)
2. Create a new project
3. Add a PostgreSQL database to your project
4. Note down the database connection details from the "Connect" tab

### Step 2: Deploy Strapi to Railway

1. In your project, click "New" and select "GitHub Repo"
2. Connect your Strapi GitHub repository
3. Configure the deployment:
   - Set the root directory if your Strapi project is in a subdirectory
   - Add the following environment variables:
     - `NODE_ENV=production`
     - `DATABASE_CLIENT=postgres`
     - `DATABASE_URL=` (from your PostgreSQL service)
     - `JWT_SECRET=` (generate a random string)
     - `ADMIN_JWT_SECRET=` (generate a random string)
     - `APP_KEYS=` (comma-separated random strings)
     - `API_TOKEN_SALT=` (generate a random string)
4. Deploy the service

## Configuring Strapi After Deployment

After deploying your Strapi CMS, you'll need to:

1. Access the admin panel at `https://your-app-url/admin`
2. Create an admin user
3. Create the "Blog Post" content type with the required fields:
   - Title (Text)
   - Slug (UID, generated from Title)
   - Author (Enumeration: "Pragya", "Praveen")
   - Published Date (Date)
   - Cover Image (Media)
   - Content (Rich Text)
   - Excerpt (Text)
   - Tags (JSON)
4. Configure permissions to allow public access to blog posts:
   - Go to Settings > Roles > Public
   - Under "Blog Post", enable "find" and "findOne" permissions
   - Save your changes

## Updating Your Next.js Application

After deploying Strapi, update your `.env.local` file in your Next.js project:

```
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-app-url
```

Then rebuild and deploy your Next.js application to reflect the changes.

## Automating Rebuilds

To automatically rebuild your Next.js site when content changes in Strapi:

1. In Strapi, go to Settings > Webhooks
2. Create a new webhook:
   - Name: "Rebuild Next.js site"
   - URL: Your GitHub Actions or Vercel webhook URL
   - Events: Select all "Create", "Update", and "Delete" events for your content types
3. Save the webhook

This will trigger a rebuild of your Next.js site whenever content is updated in Strapi.
