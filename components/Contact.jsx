import { Mail, MessageCircle } from "lucide-react"

function Contact() {
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
        </div>
    </section>
}

export default Contact