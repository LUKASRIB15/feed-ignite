import {dateFormatted, dateRelativeToNow} from "../Utils/formatData"
import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Comment({content, publishedAt, onDeleteComment}){
  const [likeCount, setLikeCount] = useState(0);
  
  const publishedAtFormatted = dateFormatted(publishedAt);
  const publishedAtRelativeToNow = dateRelativeToNow(publishedAt)

  const alreadyLikedComment = likeCount > 0;

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount(state=>{
      return state+1;
    })
  }

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
            <button onClick={handleDeleteComment} className={styles.buttonRemove}>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <button onClick={handleLikeComment} className={alreadyLikedComment ? styles.buttonAfterCongratulations: styles.buttonBeforeCongratulations}>
          <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
        </button>
      </main>
    </article>
  )
}