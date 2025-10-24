import styles from "./header.module.css"

import { useState, useEffect } from "react"

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // activa si el scroll pasa los 50px
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

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
                <a href="#" className={styles.a_titulo}>matias ludueña</a>
            </div>
            <nav className={`${styles.nav} ${menuOpen ? styles.nav_open : ""} ${scrolled && styles.nav_scroll}`}>
                <a href="" onClick={() => setMenuOpen(false)}>inicio</a>
                <a href="" onClick={() => setMenuOpen(false)}>sobre mi</a>
                <a href="" onClick={() => setMenuOpen(false)}>proyectos</a>
            </nav>
        </header>
    )
}

export default Header