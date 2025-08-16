// Sanity types matching your schemas

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SocialLink {
  _type: 'socialLink';
  platform: string;
  url: string;
}

export interface Profile {
  _id: string;
  _type: 'profile';
  fullName: string;
  profileImage: SanityImage;
  shortBio: string;
  email: string;
  fullBio: any[]; // Rich text blocks
  resumeURL?: string;
  socialLinks: SocialLink[];
  skills: string[];
}

export interface Project {
  _id: string;
  _type: 'project';
  name: string;
  slug: {
    current: string;
  };
  logo?: SanityImage;
  projectUrl?: string;
  githubUrl: string;
  coverImage: SanityImage;
  description: any[]; // Rich text blocks
  tags: string[];
}
