'use client';

import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          } else {
            e.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}