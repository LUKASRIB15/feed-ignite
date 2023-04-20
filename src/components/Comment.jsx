import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment(props){
  return(
    <article className={styles.comment}>
      <img src="https://github.com/LUKASRIB15.png"/>
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