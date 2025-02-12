'use client'
import AboutMe from '@/components/home/AboutMe';
import Contact from '@/components/home/Contact';
import Find from '@/components/home/FindMe';
import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Project';
import Skills from '@/components/home/Skills';

const HomePage = () => {

  return (
    <div className="mt-5" >
    <Hero/>
    <AboutMe/>
    <Find/>
    <Skills/>
    <Contact/>
   <Projects/>
   </div>
  );
};

export default HomePage;