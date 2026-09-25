import { useState } from "react";
import Brand from "./Brand";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="utility section">
        <span>◈ &nbsp;Online Quran & Islamic learning</span>
        <span>Read with care. Learn with purpose.</span>
      </div>
      <header className="site-header section">
        <Brand />
        <nav className={open ? "nav open" : "nav"}>
          <a href="#courses" onClick={() => setOpen(false)}>
            Our courses
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About us
          </a>
          <a href="#paths" onClick={() => setOpen(false)}>
            Learning paths
          </a>
          <a href="#faqs" onClick={() => setOpen(false)}>
            FAQs
          </a>
        </nav>
        <div className="header-actions">
          {/* <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button> */}
          <a className="button button-small" href="#contact">
            Start your journey
            <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
