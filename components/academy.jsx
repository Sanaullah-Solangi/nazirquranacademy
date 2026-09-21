'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, ChevronDown, Moon, Sun, MessageCircle, Mail, Menu, X, BookOpen, Heart, Globe } from 'lucide-react'

const courses = [
  ['01', 'FOUNDATION', 'Qaida', 'Build a confident foundation in Arabic letters, vowel sounds and joining rules.', 'Start with the essentials'],
  ['02', 'RECITATION', 'Nazra Quran with Tajweed', 'Develop your recitation with careful pronunciation and the rules of Tajweed.', 'Give every letter its right'],
  ['03', 'RECITATION', 'Hifzul Quran', 'Work towards memorisation with revision as an essential part of your learning.', 'Keep the Quran close'],
  ['04', 'UNDERSTANDING', 'Tarjumae Quran', 'Understand the meaning of Quranic verses through the study of translation.', 'Discover the meaning'],
  ['05', 'UNDERSTANDING', 'Tafsere Quran', 'Explore the explanation and context of verses for a deeper understanding.', 'Reflect more deeply'],
  ['06', 'FOUNDATION', 'Six Kalme', 'Learn the Six Kalme, with attention to pronunciation and their meanings.', 'Strengthen your foundation'],
  ['07', 'FOUNDATION', 'Basic Islamic Knowledge', 'Explore the foundations of faith, worship, everyday duas and Islamic manners.', 'Bring learning into life'],
]

const faqs = [
  ['Which course should a beginner choose?', 'Qaida introduces Arabic letters, sounds and joining rules. It is a starting point for learners who are new to reading the Quran.'],
  ['What is Nazra Quran with Tajweed?', 'Nazra is the practice of reading the Quran while Tajweed teaches you to give every letter its correct pronunciation and quality.'],
  ['What is the difference between Tarjuma and Tafseer?', 'Tarjuma explores the translation of Quranic verses, while Tafseer explores their explanation, context and deeper meaning.'],
  ['Can I study Quran memorisation?', 'Yes. Hifzul Quran is designed around memorisation, steady revision and building a lasting connection with the Quran.'],
  ['How do I find out about fees and timings?', 'Send us a WhatsApp message or email and we will share current availability, lesson timings and fee details.'],
]

function Brand() {
  return <a href="#top" className="brand" aria-label="Nazir Online Quran Academy home"><span className="brand-mark">ن</span><span><strong>Nazir Online</strong><small>QURAN ACADEMY</small></span></a>
}

export function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  return <>
    <div className="utility">
      <span>◈ &nbsp;Online Quran & Islamic learning</span>
      <span>Read with care. Learn with purpose.</span>
    </div>
    <header className="site-header">
      <Brand />
      <nav className={open ? 'nav open' : 'nav'}>
        <a href="#courses" onClick={() => setOpen(false)}>Our courses</a>
        <a href="#about" onClick={() => setOpen(false)}>About us</a>
        <a href="#paths" onClick={() => setOpen(false)}>Learning paths</a>
        <a href="#faqs" onClick={() => setOpen(false)}>FAQs</a>
      </nav>
      <div className="header-actions">
        {/* <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button> */}
        <a className="button button-small" href="#contact">
          Start your journey
          <ArrowUpRight size={16} />
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  </>
}

export function Hero() {
  return <section className="hero" id="top">
    <div className="hero-copy">
      <p className="eyebrow">NAZIR ONLINE QURAN ACADEMY</p>
      <h1>A lifelong connection.<br />One beautiful <em>verse at a time.</em></h1>
      <p className="hero-lede">Learn to read, recite and understand the Quran. A meaningful learning journey, from your first Arabic letters to deeper reflection.</p>
      <div className="hero-actions">
        <a className="button" href="#courses">Find your course <ArrowUpRight size={17} /></a>
        <a className="text-link" href="#steps">How to get started <span>↗</span></a>
      </div>
      <div className="hero-note">
        <span className='icon-cover'>
          <BookOpen className=" hero-book icon text-emerald-600" />
        </span>
        <div>
          <strong>Your place to begin. Your space to grow.</strong>
          <span>Qaida · Tajweed · Hifz · Translation · Tafseer</span>
        </div>
      </div>
    </div>
    <div className="hero-art">
      <div className="arch-image" role="img" aria-label="Navy Quran on a carved wooden stand in a sunlit arched interior" />
      <div className="art-badge">READ • REFLECT<br /><b>GROW</b></div>
      <p>KNOWLEDGE WITH PURPOSE</p>
      <div className="arabic">
        اقرأ
        <div>
          <strong>Begin with intention.</strong>
          <span>Let your next chapter start here.</span>
        </div>
      </div>
    </div>
  </section>
}

export function Courses() {
  const [filter, setFilter] = useState('ALL');
  const shown = useMemo(() => filter === 'ALL' ? courses : courses.filter(c => c[1] === filter), [filter]);
  return <section className="courses section" id="courses">
    <div className="section-intro">
      <p className="eyebrow">EXPLORE OUR COURSES</p>
      <h2>Small beginnings.<br /><em>Meaningful progress.</em></h2>
      <p>Choose where you want to grow. Build your foundation, develop your recitation, or explore the meaning of the Quran.</p>
    </div>
    <div className="filters" role="group" aria-label="Filter courses">{[['ALL', 'All courses / 07'], ['FOUNDATION', 'Foundations'], ['RECITATION', 'Recitation & Hifz'], ['UNDERSTANDING', 'Understanding']].map(([key, label]) => <button key={key} className={filter === key ? 'active' : ''} onClick={() => setFilter(key)}>{label}</button>)}</div>
    <div className="course-grid">{shown.map(([num, cat, title, desc, tagline]) => <article className="course-card" key={title}><div className="course-top">
      <span>{num}</span>
      <small>{cat}</small>
    </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="course-bottom">
        <span>{tagline}</span><button aria-label={`Explore ${title}`}>
          <ArrowUpRight size={18} />
        </button></div></article>)}</div>
  </section>
}

export function About() {
  return <section className="about section" id="about">
    <div className="about-image" role="img" aria-label="A peaceful Quran study setting with warm light and carved architectural details"><div>
      Read.<br />Reflect.<br /><em>Carry it with you.</em></div></div>
    <div className="about-copy">
      <p className="eyebrow">LEARNING WITH PURPOSE</p>
      <h2>More than lessons.<br />A connection that<br /><em>stays with you.</em></h2>
      <p>Nazir Online Quran Academy brings Quran learning into your home. Our course range connects reading and recitation with memorisation, meaning and the foundations of Islamic life.</p>
      <ul>
        <li>A clear starting point with Qaida</li>
        <li>Recitation with attention to Tajweed</li>
        <li>A deeper understanding through Tarjuma and Tafseer</li>
        <li>Islamic knowledge for everyday practice</li>
      </ul>
      <a className="text-link" href="#paths">Explore your next step <span>↗</span></a>
    </div>
  </section>
}

export function Paths() {
  const [path, setPath] = useState(0);
  const content = [['Start with the Arabic foundations.', 'Begin with Qaida to learn letters, sounds and how they join. As your reading develops, explore Nazra Quran with Tajweed.', 'Qaida', 'Nazra with Tajweed'], ['Build a confident recitation.', 'Develop your reading with careful pronunciation, Tajweed and steady revision that helps the Quran stay close.', 'Nazra with Tajweed', 'Hifzul Quran'], ['Explore meaning and context.', 'Study translation and Tafseer to move from reading the words to reflecting on their meaning and guidance.', 'Tarjumae Quran', 'Tafsere Quran']][path];

  return <section className="paths section" id="paths">
    <div className="section-intro">
      <p className="eyebrow">A STARTING POINT FOR YOU</p>
      <h2>Where are you in<br />your <em>learning journey?</em></h2>
      <p>Every learner starts somewhere different. Select your goal to explore a suggested course path.</p>
    </div>
    <div className="path-layout">
      <div className="path-options">{[['I’m just beginning', 'Build a strong foundation'], ['I want to improve my recitation', 'Read carefully, remember deeply'], ['I want to understand more', 'Explore meaning and context']].map(([title, sub], i) => <button key={title} className={path === i ? 'selected' : ''} onClick={() => setPath(i)}><span>0{i + 1}</span>
        <strong>{title}</strong>
        <small>{sub}</small>
      </button>)}
      </div>
      <div className="path-result">
        <span>YOUR SUGGESTED START</span>
        <h3>{content[0]}</h3>
        <p>{content[1]}</p>
        <a className="button" href="#contact">Enquire about this path <ArrowUpRight size={16} />
        </a>
        <div className="path-next"><span>START HERE <b>{content[2]}</b></span><span>EXPLORE NEXT <b>{content[3]}</b></span>
        </div>
      </div>
    </div>
  </section>
}

export function Steps() {
  return <section className="steps section" id="steps">
    <div className="section-intro">
      <p className="eyebrow">FROM INTENTION TO ACTION</p>
      <h2>Your next chapter,<br /><em>in three simple steps.</em></h2>
      <p>A thoughtful beginning makes room for meaningful progress.</p>
    </div>
    <div className="step-grid">{[['Find your focus', 'Explore the courses and choose what you would like to learn, or use the learning paths above.'], ['Share your goals', 'Tell the academy about your reading level, your interests and what you hope to achieve.'], ['Plan your lessons', 'Confirm class arrangements, fees and availability with the academy before you begin.']].map(([title, desc], i) => <article key={title}>
      <span>0{i + 1}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>)}
    </div>
  </section>
}

export function FAQs() {
  const [active, setActive] = useState(0);
  return <section className="faqs section" id="faqs">
    <div className="section-intro">
      <p className="eyebrow">A LITTLE CLARITY</p>
      <h2>Questions before<br /><em>your first step?</em></h2>
      <p>Here are a few helpful answers as you explore Quran learning.</p>
      <a className="text-link" href="#contact">Ask about a course <span>↗</span></a>
    </div>
    <div className="faq-list">{faqs.map(([q, a], i) => <div className={active === i ? 'faq active' : 'faq'} key={q}>
      <button onClick={() => setActive(active === i ? -1 : i)}>
        <span>{q}</span>
        <ChevronDown size={18} />
      </button>{active === i && <p>{a}</p>}</div>)}
    </div>
  </section>
}

export function Contact() {
  return <section className="contact section" id="contact">
    <div>
      <p className="eyebrow">BEGIN WITH INTENTION</p>
      <h2>A beautiful journey<br />begins with<br /><em>a simple step.</em></h2>
      <p>Choose your subject and reach out. Share where you are today and what you would like to learn next.</p>
    </div>
    <div className="contact-card">
      <span>LEARN ONLINE, FROM HOME.</span>
      <h3>Let&apos;s find your starting point.</h3>
      <p>A few details to shape your course enquiry.</p>
      <div className="contact-links"><a href="https://wa.me/923001234567" target="_blank" rel="noreferrer"><MessageCircle size={21} /> WhatsApp us</a>
        <a href="mailto:hello@nazironlinequranacademy.com"><Mail size={21} /> Email the academy</a>
      </div>
      <small>We&apos;ll reply with course guidance, fees and available timings.</small>
    </div></section>
}

export function Footer() {
  return <footer>
    <div>
      <Brand />
      <p>Helping you take the next step in reading, understanding and connecting with the Quran.</p>
    </div>
    <div>
      <small>EXPLORE THE ACADEMY</small>
      <a href="#about">Our purpose</a>
      <a href="#paths">Learning paths</a>
      <a href="#steps">How to get started</a>
      <a href="#faqs">Frequently asked questions</a>
    </div>
    <div>
      <small>YOUR NEXT STEP</small>
      <a href="#courses">Explore all courses</a>
      <a href="#contact">Enquire about classes</a>
      <a href="#paths">Help me choose a course</a>
    </div>
    <div className="footer-bottom">© 2026 Nazir Online Quran Academy. <span>Read with care. Learn with purpose.</span>
    </div>
  </footer>
}

export function AcademyApp() {
  const [dark, setDark] = useState(false);
  return <div className={dark ? 'academy dark-mode' : 'academy'}>
    <Header dark={dark} setDark={setDark} />
    <main>
      <Hero />
      <div className="stats">
        {/* 1st */}
        <div className='stat stat-1'>A foundation for meaningful learning</div>
        {/* 2nd */}
        <div className="stat">
          <span className='icon-cover'>
            <BookOpen className=" state-book icon text-emerald-600" />
          </span>
          <div>
            <strong>Learn from home</strong>
            <span>A connection beyond distance</span>
          </div>
        </div>
        {/* 3rd */}
        <div className="stat">
          <span className='icon-cover'>
            <Globe className=" state-book icon text-emerald-600" />
          </span>
          <div>
            <strong>Faith in everyday life</strong>
            <span>Knowledge with purpose</span>
          </div>
        </div>
        {/* <span><b>01</b> meaningful path</span> */}
        {/* 4th */}
        <div className="stat">
          <span className='icon-cover'>
            <Heart className=" state-book icon text-emerald-600" />
          </span>
          <div>
            <strong>7 focused courses</strong>
            <span>From Qaida to Tafseer</span>
          </div>
        </div>
        {/* <span><b>∞</b> room to grow</span> */}
        {/* <span><b>24/7</b> learn from home</span> */}
      </div>
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
