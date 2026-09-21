import { BookOpen, Globe, Heart } from "lucide-react"

function Stats() {
    return <section className="Stats section" id="Stats">
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
    </section>
}

export default Stats