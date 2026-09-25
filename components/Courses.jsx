import { Book, Headphones, Heart, Layers, Moon, Sparkles, ArrowUpRight } from 'lucide-react';
import { useMemo, useState } from "react";

// 1. Array ke andar string ke bajaye seedha Icon component ka reference rakhein
const courses = [
    [Book, 'FOUNDATION', 'Qaida', 'Build a confident foundation in Arabic letters, vowel sounds and joining rules.', 'Start with the essentials'],
    [Headphones, 'RECITATION', 'Nazra Quran with Tajweed', 'Develop your recitation with careful pronunciation and the rules of Tajweed.', 'Give every letter its right'],
    [Heart, 'RECITATION', 'Hifzul Quran', 'Work towards memorisation with revision as an essential part of your learning.', 'Keep the Quran close'],
    [Layers, 'UNDERSTANDING', 'Tarjumae Quran', 'Understand the meaning of Quranic verses through the study of translation.', 'Discover the meaning'],
    [Moon, 'UNDERSTANDING', 'Tafsere Quran', 'Explore the explanation and context of verses for a deeper understanding.', 'Reflect more deeply'],
    [Sparkles, 'FOUNDATION', 'Six Kalme', 'Learn the Six Kalme, with attention to pronunciation and their meanings.', 'Strengthen your foundation'],
    [Sparkles, 'FOUNDATION', 'Basic Islamic Knowledge', 'Explore the foundations of faith, worship, everyday duas and Islamic manners.', 'Bring learning into life'], // (Note: yahan ArrowUpRight ki jagah Sparkles ya jo icon aap ko lagana ho rakh lein)
];

function Courses() {
    const [filter, setFilter] = useState('ALL');
    const shown = useMemo(() => filter === 'ALL' ? courses : courses.filter(c => c[1] === filter), [filter]);

    return (
        <section className="courses section" id="courses">
            <div className="section-intro">
                <p className="eyebrow">EXPLORE OUR COURSES</p>
                <h2>Small beginnings.<br /><em>Meaningful progress.</em></h2>
                <p>Choose where you want to grow. Build your foundation, develop your recitation, or explore the meaning of the Quran.</p>
            </div>

            <div className="filters" role="group" aria-label="Filter courses">
                {[
                    ['ALL', 'All courses / 07'],
                    ['FOUNDATION', 'Foundations'],
                    ['RECITATION', 'Recitation & Hifz'],
                    ['UNDERSTANDING', 'Understanding']
                ].map(([key, label]) => (
                    <button key={key} className={filter === key ? 'active' : ''} onClick={() => setFilter(key)}>
                        {label}
                    </button>
                ))}
            </div>

            <div className="course-grid cursor-pointer">
                {shown.map(([IconComponent, cat, title, desc, tagline]) => {
                    // 2. Yahan icon ko component ki tarah call karein
                    return (
                        <article className="course-card" key={title}>
                            <div className="course-top">
                                <span>
                                    <IconComponent className="icon text-[#c5a059]" />
                                </span>
                                <small>{cat}</small>
                            </div>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                            <div className="course-bottom">
                                <span>{tagline}</span>
                                <button aria-label={`Explore ${title}`}>
                                    <ArrowUpRight size={18} />
                                </button>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Courses;