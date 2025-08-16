import Header from '@/components/Header';
import HeroWithCMS from '@/components/HeroWithCMS';
import AboutWithCMS from '@/components/AboutWithCMS';
import ProjectsWithCMS from '@/components/ProjectsWithCMS';
import ContactWithCMS from '@/components/ContactWithCMS';
import Footer from '@/components/Footer';
import { getProfile, getProjects } from '@/lib/sanity-queries';

export default async function Home() {
  // Fetch data from Sanity CMS
  const [profile, projects] = await Promise.all([
    getProfile(),
    getProjects(),
  ]);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroWithCMS profile={profile} />
      <AboutWithCMS profile={profile} />
      <ProjectsWithCMS projects={projects} />
      <ContactWithCMS profile={profile} />
      <Footer />
    </main>
  );
}
