import {dateFormatted, dateRelativeToNow} from "../Utils/formatData"
import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment({content, publishedAt}){
  const publishedAtFormatted = dateFormatted(publishedAt);
  const publishedAtRelativeToNow = dateRelativeToNow(publishedAt)

  return(
    <article className={styles.comment}>
      <Avatar className={styles.imageProfile} src="https://github.com/LUKASRIB15.png"/>
      <main>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.contentProfile}>
              <strong>Lucas Ribeiro{' '}<span>(você)</span></strong>
              <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedAtRelativeToNow}</time>
            </div>
            <button className={styles.buttonRemove}>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <button className={styles.buttonCongratulations}>
          <ThumbsUp size={20}/>
            Aplaudir <span>01</span>
        </button>
      </main>
    </article>
  )
}