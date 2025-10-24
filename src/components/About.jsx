import styles from "./about.module.css"

const About = () => {
    return(
        <div className={styles.about}>
            <div className={`${styles.about_top}`}>
                <p className={styles.p_titulo}>
                    Hola, mi nombre es Matías y soy <span>desarrollador web</span> por hobby.
                </p>
                <p className={styles.p_subtitulo}>
                    Me gusta crear sitios y aplicaciones web en mis tiempos libres. Siempre busco desarrollar ideas distintas y 
                    realmente funcionales, es decir, que resuelvan un problema real, como lo haría cualquier aplicación del mercado.
                </p>
            </div>
            <h3>Habilidades</h3>
            <div className={styles.container_mosaicos}>
                {
                    data.map(item => (
                        <div className={styles.mosaico}>
                            <img src={item.img} alt={item.h4} width="25px" height="25px" />
                            <h4>{item.h4}</h4>
                            <p>{item.p}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const data = [
    {
        img: "src/assets/react.svg",
        h4: "React.js",
        p: "Biblioteca de JavaScript para construir interfaces de usuario dinámicas y rápidas facilitando la creación de aplicaciones web modernas y altamente interactivas."
    },
    {
        img: "src/assets/node.svg",
        h4: "Node.js",
        p: "Entorno de ejecución para JavaScript del lado del servidor. Me permite desarrollar APIs y manejar lógica backend con un alto rendimiento."
    },
    {
        img: "src/assets/mongodb.svg",
        h4: "MongoDB",
        p: "Base de datos NoSQL orientada a documentos. Sirve para almacenar datos en estructuras dinámicas y escalar aplicaciones fácilmente."
    }
]

export default About