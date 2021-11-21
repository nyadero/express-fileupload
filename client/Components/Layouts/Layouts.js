import Link from 'next/link'
import styles from './Layouts.module.css'

export default function Layouts({children}) {
    return (
        <div className={styles.main}>
            <div className={styles.navigation}>
                    <Link href='/profile'>Create a profile</Link>
            </div>
            <main className={styles.container}>
                {children}
            </main>
            <div className={styles.footer}>
              <small>Made by Nyadero</small> 
            </div>
        </div>
    )
}

