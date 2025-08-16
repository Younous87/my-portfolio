# 🎨 Portfolio CMS Integration Guide

Your portfolio is now fully integrated with Sanity CMS! Here's how to add and manage your content.

## 🚀 Quick Start

1. **Sanity Studio**: Open [http://localhost:3333](http://localhost:3333)
2. **Portfolio Website**: Visit [http://localhost:3001](http://localhost:3001)

## 📝 Adding Content to Your Portfolio

### 1. Profile Information

In Sanity Studio, create a **Profile** document:

**Required Fields:**
- **Full Name**: Your display name
- **Profile Image**: Your professional photo
- **Short Bio**: One-line description (appears in hero section)
- **Email**: Your contact email

**Optional Fields:**
- **Full Bio**: Rich text for the About section
- **Resume URL**: Link to your downloadable resume
- **Social Links**: Add multiple social media profiles
- **Skills**: Array of your technical skills

### 2. Projects

Create **Project** documents for each of your projects:

**Required Fields:**
- **Project Name**: Display name
- **Slug**: URL-friendly identifier (auto-generated)
- **GitHub URL**: Link to your repository
- **Cover Image**: Main project image
- **Description**: Rich text describing your project
- **Tags**: Technologies used (e.g., "React", "Node.js")

**Optional Fields:**
- **Project Logo**: Small logo/icon for the project
- **Project URL**: Link to live demo/deployed site

### 3. Adding Social Links

In your Profile, add Social Links:
- **Platform**: Name (e.g., "GitHub", "LinkedIn", "Twitter")
- **URL**: Full URL to your profile

## 🎯 Content Strategy Tips

### Profile Setup
1. **Profile Image**: Use a professional, high-quality photo (512x512px recommended)
2. **Short Bio**: Keep it concise and impactful (e.g., "Full-Stack Developer & UI/UX Enthusiast")
3. **Skills**: Add 10-15 relevant technologies
4. **Full Bio**: Write 2-3 paragraphs about your background and passion

### Project Showcase
1. **Cover Images**: Use high-quality screenshots (1200x800px recommended)
2. **Descriptions**: Include:
   - What the project does
   - Technologies used
   - Your role/contributions
   - Challenges solved
3. **Tags**: Use consistent naming (e.g., "Next.js" not "nextjs")
4. **Order**: Projects appear by creation date (newest first)

## 🔧 Technical Details

### Data Flow
```
Sanity CMS → API → Next.js (Server Components) → React Components
```

### Key Files
- `lib/sanity.ts` - Sanity client configuration
- `lib/sanity-queries.ts` - Data fetching functions
- `types/sanity.ts` - TypeScript interfaces
- `components/*WithCMS.tsx` - CMS-enabled components

### Image Handling
- Images are automatically optimized via Sanity's CDN
- Next.js Image component provides lazy loading and responsive images
- Hotspot cropping is supported for better image composition

## 🎨 Customization Options

### Adding New Fields

1. **Update Schema** (`studio-my-portfolio/schemaTypes/`)
2. **Update Types** (`types/sanity.ts`)
3. **Update Queries** (`lib/sanity-queries.ts`)
4. **Update Components** (use new fields in React components)

### Featured Projects
- First 2 projects are automatically featured
- To customize, modify the query in `sanity-queries.ts`

### Skills Categorization
Skills are automatically grouped by technology type:
- **Frontend**: React, Vue, TypeScript, etc.
- **Backend**: Node.js, Python, databases, etc.
- **Tools**: Git, Docker, AWS, etc.

## 📱 Content Management Workflow

### Adding a New Project
1. Go to Sanity Studio → Create → Project
2. Fill in all required fields
3. Upload a cover image
4. Add relevant tags
5. Publish the document
6. Check your portfolio website (updates automatically)

### Updating Your Profile
1. Go to Sanity Studio → Profile
2. Edit existing fields or add new information
3. Upload new images if needed
4. Publish changes
5. Refresh your portfolio to see updates

## 🔍 SEO & Performance

### Automatic Optimizations
- **Images**: WebP conversion, lazy loading, responsive sizes
- **Content**: Server-side rendering for better SEO
- **Performance**: Efficient queries, cached content delivery

### SEO Best Practices
- Use descriptive project names and descriptions
- Include relevant keywords in your bio and project descriptions
- Optimize images before uploading (compress file sizes)

## 🐛 Troubleshooting

### Common Issues
1. **Images not loading**: Check Next.js image configuration in `next.config.ts`
2. **Content not updating**: Verify Sanity studio is publishing changes
3. **Build errors**: Check TypeScript types match your schema

### Support
- Check browser console for detailed error messages
- Verify Sanity project ID and dataset in configuration
- Ensure all required fields are filled in Sanity

---

## 🎉 You're All Set!

Your portfolio now automatically updates whenever you make changes in Sanity Studio. Focus on creating great content, and your portfolio will showcase it beautifully!

**Next Steps:**
1. Add your real profile information
2. Upload your best projects
3. Customize the design if needed
4. Deploy to production when ready

Happy coding! 🚀
