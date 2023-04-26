import {dateFormatted, dateRelativeToNow} from "../Utils/formatData"
import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Post({author, publishedAt, content}){
  const [comments, setComment] = useState([])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedAtFormatted = dateFormatted(publishedAt);
  const publishedAtRelativeToNow = dateRelativeToNow(publishedAt)
  
  function handleCreateNewComment(event){
    event.preventDefault()
    setComment([...comments, {content: newCommentText, publishedAt: new Date()}])
    setNewCommentText('')
  }

  function handleNewCommentChange(event){
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentDelete){
    console.log("entrei")
    const newCommentsList = comments.filter(comment=>{
      return comment.content!=commentDelete;
    })
    console.log(newCommentsList)
    setComment(newCommentsList)
  }

  return(
    <div className={styles.postContent}>
      <header className={styles.postHeader}>
        <div className={styles.profile}>
          <Avatar hasBorder src={author.avatarUrl}/>
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>Publicado {publishedAtRelativeToNow}</time>
      </header>
      <main className={styles.postMain}>
        {content.map(line=>{
          if(line.type=="paragraph"){
            return (
                <p key={line.id}>{line.content}</p>              
            )
          }else if(line.type=="link"){
            return (
                <p key={line.id}><a href="#">{line.content}</a></p>
            )
          }
        })}
      </main>
      <form onSubmit={()=>handleCreateNewComment(event)} className={styles.postForm}>
        <label for="textareaContent">Deixe seu feedback</label>
        <textarea 
          id="textareaContent" 
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={()=>handleNewCommentChange(event)}
        />
        <button type="submit">Publicar</button>
      </form>
      {
        comments.map(comment=>{
          return (
            <Comment
              key={comment.content}
              content={comment.content}
              publishedAt={comment.publishedAt}
              onDeleteComment={deleteComment}
            />
          )
        })
      }
    </div>
  )
}