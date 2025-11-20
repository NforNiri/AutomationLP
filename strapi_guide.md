# Strapi CMS Setup Guide

This guide will help you connect your "Code and Core" landing page to a Strapi CMS backend.

## 1. Accessing the Strapi Admin Panel

If you have deployed Strapi locally or on a server, you can access the admin panel at:

- **Local Development**: `http://localhost:1337/admin`
- **Production**: `https://your-strapi-url.com/admin`

**First Time Login:**
If this is a fresh installation, you will be prompted to create an **Administrator** account. Enter your name, email, and a strong password.

## 2. Finding Your Strapi URL

Your Strapi URL is the base address of your API.

- **Local**: `http://localhost:1337`
- **Production**: The domain where you deployed Strapi (e.g., `https://api.codeandcore.com`)

You will need this URL for your environment variables.

## 3. Generating an API Token

To allow your Next.js frontend to fetch data, you need to create an API Token.

1.  Log in to the **Strapi Admin Panel**.
2.  Navigate to **Settings** (bottom left of the sidebar).
3.  Under **Global Settings**, click on **API Tokens**.
4.  Click the **+ Create new API Token** button (top right).
5.  **Name**: Enter a name (e.g., `Landing Page Read-Only`).
6.  **Description**: Optional.
7.  **Token duration**: Select **Unlimited** (or your preferred duration).
8.  **Token type**: Select **Read-only** (this is safer for frontend usage).
9.  Click **Save**.

**IMPORTANT:** Copy the generated token immediately. You won't be able to see it again!

## 4. Connecting to the Frontend

1.  Open your Next.js project.
2.  Create or edit the `.env.local` file in the root directory.
3.  Add the following variables:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_TOKEN=your_generated_token_here
```

*Replace `http://localhost:1337` with your production URL if applicable.*

## 5. Creating Content Types

You need to create "Single Types" in Strapi to match the data structure expected by the frontend.

1.  Go to **Content-Type Builder**.
2.  Click **Create new single type**.
3.  Create types that match the interfaces in `types/index.ts` (e.g., `LandingPage`, `Hero`, `Pricing`).
4.  Add fields (Text, Rich Text, Number, Boolean, Component) to match the props.
5.  **Save** and **Publish** your content types.

## 6. Populating Content

1.  Go to **Content Manager**.
2.  Select your new Single Types.
3.  Fill in the content (Headlines, Subtitles, etc.).
4.  Click **Publish**.

Your landing page will now fetch this data dynamically!
