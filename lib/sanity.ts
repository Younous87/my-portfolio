import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'yva8e1e0', // Your project ID from sanity.config.ts
  dataset: 'production',
  useCdn: false, // Set to false for better performance when editing
  apiVersion: '2023-05-03',
});

export default client;
