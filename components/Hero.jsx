import { ArrowUpRight, BookOpen } from "lucide-react"

function Hero() {
    return <section className="hero section" id="top">
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

export default Hero