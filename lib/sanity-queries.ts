import client from './sanity';
import { Profile, Project } from '@/types/sanity';

// Helper function to build image URLs
export const urlForImage = (source: any) => {
  if (!source?.asset?._ref) return '';
  
  const projectId = 'yva8e1e0';
  const dataset = 'production';
  
  // Extract image details from the reference
  const [, id, dimensions, format] = source.asset._ref.split('-');
  const [width, height] = dimensions.split('x');
  
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
};

// Fetch profile data
export async function getProfile(): Promise<Profile | null> {
  try {
    const profile = await client.fetch(`
      *[_type == "profile"][0]{
        _id,
        _type,
        fullName,
        profileImage,
        shortBio,
        email,
        fullBio,
        resumeURL,
        socialLinks[]{
          platform,
          url
        },
        skills
      }
    `);
    
    return profile;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

// Fetch all projects
export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await client.fetch(`
      *[_type == "project"] | order(_createdAt desc) {
        _id,
        _type,
        name,
        slug,
        logo,
        projectUrl,
        githubUrl,
        coverImage,
        description,
        tags
      }
    `);
    
    return projects || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

// Fetch a single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const project = await client.fetch(`
      *[_type == "project" && slug.current == $slug][0]{
        _id,
        _type,
        name,
        slug,
        logo,
        projectUrl,
        githubUrl,
        coverImage,
        description,
        tags
      }
    `, { slug });
    
    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

// Fetch featured projects (you can add a featured field to your schema)
export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const projects = await client.fetch(`
      *[_type == "project"] | order(_createdAt desc)[0...2] {
        _id,
        _type,
        name,
        slug,
        logo,
        projectUrl,
        githubUrl,
        coverImage,
        description,
        tags
      }
    `);
    
    return projects || [];
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}
