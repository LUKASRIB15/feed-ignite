import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment(props){
  return(
    <article className={styles.comment}>
      <Avatar className={styles.imageProfile} src={props.image}/>
      <main>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.contentProfile}>
              <strong>{props.author}{' '}<span>(você)</span></strong>
              <time>Cerca de 2h</time>
            </div>
            <button className={styles.buttonRemove}>
              <Trash size={24}/>
            </button>
          </header>
          <p>{props.content}</p>
        </div>
        <button className={styles.buttonCongratulations}>
          <ThumbsUp size={20}/>
            Aplaudir <span>01</span>
        </button>
      </main>
    </article>
  )
}