import styles from './Intro.module.css'

function Intro() {
    return (
        <div className={styles.introContainer}>
        <h1 className={styles.title}>
          Express-fileupload
        </h1>

        <p className={styles.description}>
          Single image upload and display using node js, express js, mysql2 and express-fileupload together with sharp for image optimization.
        </p>
        </div>
    )
}

export default Intro
