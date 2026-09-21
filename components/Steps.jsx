
function Steps() {
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

export default Steps