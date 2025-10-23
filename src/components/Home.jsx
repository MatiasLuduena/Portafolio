import styles from "./home.module.css"

const Home = ({ children }) => {
    return(
        <main className={styles}>
            { children }
            <div className={styles.container}>
                <h1>Transformo <span>ideas</span> en sitios y aplicaciones web modernas.</h1>
                <h2>
                    Desarrollador web full stack especializado en React.js, <span>Node.js</span> y <span>MongoDB</span>.
                    Creo sitios y aplicaciones modernas, rápidas y escalables.
                </h2>
                <div className={styles.div_stack}>
                    <img src="src/assets/react.svg" alt="react icon" width="20" height="20"/>
                    <img src="src/assets/node.svg" alt="react icon" width="20" height="20"/>
                    <img src="src/assets/mongodb.svg" alt="react icon" width="20" height="20"/>
                </div>
                <button>saber mas</button>
            </div>
        </main>
    )
}

export default Home