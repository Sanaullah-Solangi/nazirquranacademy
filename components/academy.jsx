'use client'
import { useState } from 'react'
import Header from './Header';
import Hero from './Hero';
import Courses from './Courses';
import About from './About';
import Paths from './Paths';
import Steps from './Steps';
import FAQs from './FAQs';
import Contact from './Contact';
import Footer from './Footer';
import Stats from './Stats';





export function AcademyApp() {
  const [dark, setDark] = useState(false);
  return <div className={dark ? 'academy dark-mode' : 'academy'}>
    <Header dark={dark} setDark={setDark} />
    <main>
      <Hero />
      <Stats />
      <Courses />
      <About />
      <Paths />
      <Steps />
      <FAQs />
      <Contact />
    </main>
    <Footer /><a className="back-top" href="#top" aria-label="Back to top">↑</a></div>
}

export default AcademyApp
