import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    ['Which course should a beginner choose?', 'Qaida introduces Arabic letters, sounds and joining rules. It is a starting point for learners who are new to reading the Quran.'],
    ['What is Nazra Quran with Tajweed?', 'Nazra is the practice of reading the Quran while Tajweed teaches you to give every letter its correct pronunciation and quality.'],
    ['What is the difference between Tarjuma and Tafseer?', 'Tarjuma explores the translation of Quranic verses, while Tafseer explores their explanation, context and deeper meaning.'],
    ['Can I study Quran memorisation?', 'Yes. Hifzul Quran is designed around memorisation, steady revision and building a lasting connection with the Quran.'],
    ['How do I find out about fees and timings?', 'Send us a WhatsApp message or email and we will share current availability, lesson timings and fee details.'],
]

function FAQs() {
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

export default FAQs