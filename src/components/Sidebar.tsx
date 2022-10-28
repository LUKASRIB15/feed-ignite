import styles from "./Sidebar.module.css"
import Avatar from "./Avatar"
import { PencilLine } from "phosphor-react"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <Avatar
                    hasBorder
                    src="https://github.com/LUKASRIB15.png"
            />
                <p className={styles.textName}>Lucas Ribeiro</p>
                <p className={styles.textWork}>UI Designer</p>
            </div>
            <footer className={styles.button}>
                
                <a href="#">
                    <PencilLine/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    );
}