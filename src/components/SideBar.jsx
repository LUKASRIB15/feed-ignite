import { Avatar } from "./Avatar"
import styles from "./SideBar.module.css"
import { PencilSimpleLine } from "phosphor-react"

export function SideBar(){
  return(
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        alt="Imagem de capa do usuário"
        width="100%" 
        height={72}
      />
      <main className={styles.profile}>
        <Avatar hasBorder src="https://github.com/LUKASRIB15.png"/>
        <strong>Lucas Ribeiro</strong>
        <span>Dev FullStack</span>
      </main>
      <footer>
        <a 
          href="#" 
          className={styles.editProfile} 
        >
          <PencilSimpleLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}