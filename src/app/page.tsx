'use client'
import AboutMe from '@/components/home/AboutMe';
import Find from '@/components/home/FindMe';
import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Project';
import Resume from '@/components/home/Resume';
import Skills from '@/components/home/Skills';

const HomePage = () => {

  return (
    <div className="mt-5" >
    <Hero/>
    <Find/>
    <AboutMe/>
    <Skills/>
   <Projects/>
   <Resume/>
   </div>
  );
};

export default HomePage;