import styles from "./home.module.css"

const Home = ({ children }) => {
    return(
        <main className={styles}>
            { children }
            <div className={styles.container}>
                <h1>Transformo ideas en sitios y aplicaciones web modernas.</h1>
                <h2>
                    Desarrollador web full stack especializado en React.js, Node.js y MongoDB.
                    Creo sitios y aplicaciones modernas, rápidas y escalables.
                </h2>
                <button>saber mas</button>
            </div>
        </main>
    )
}

export default Home