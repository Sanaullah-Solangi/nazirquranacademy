import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

function Paths() {
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


export default Paths