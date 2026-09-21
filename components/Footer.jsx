import Brand from "./Brand"

function Footer() {
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

export default Footer