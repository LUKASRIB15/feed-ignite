import styles from './Header.module.css'
import Logo from './Logo'

export function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.layout}>
                <Logo/>
                <p className={styles.text}>Ignite Feed</p>
            </div>
        </div>
    )
}