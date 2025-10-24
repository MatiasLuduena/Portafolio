import styles from "./header.module.css"

import { useState, useEffect } from "react"

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };

    }, []);


    return(
        <header className={`${styles.header} ${scrolled && styles.header_scroll}`}>
            <button
                className={styles.menu_btn}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
            >
                {menuOpen ? "✕" : "☰"}
            </button>
            <div className={`${scrolled && styles.hidden}`}>
                <a href="#home" className={styles.a_titulo}>matias ludueña</a>
            </div>
            <nav className={`${styles.nav} ${menuOpen ? styles.nav_open : ""} ${scrolled && styles.nav_scroll}`}>
                <a href="#home" onClick={() => setMenuOpen(false)} className={activeSection === "home" ? styles.active : ""}>
                    inicio
                </a>
                <a href="#about" onClick={() => setMenuOpen(false)} className={activeSection === "about" ? styles.active : ""}>
                    sobre mi
                </a>
                <a href="#projects" onClick={() => setMenuOpen(false)} className={activeSection === "projects" ? styles.active : ""}>
                    proyectos
                </a>
            </nav>
        </header>
    )
}

export default Header