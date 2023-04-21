import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

export function Post(props){
  return(
    <div className={styles.postContent}>
      <header className={styles.postHeader}>
        <div className={styles.profile}>
          <Avatar hasBorder src={props.image}/>
          <div>
            <strong>{props.author}</strong>
            <span>Dev Full-stack</span>
          </div>
        </div>
        <time>Publicado há 1h</time>
      </header>
      <main className={styles.postMain}>
        <p>
        Fala galeraa 👋
        <br/><br/>
        {props.content}
        <br/><br/>
        <a href="#">👉 jane.design/doctorcare</a>
        <br/><br/>
        <a href="#">#novoprojeto</a>{' '}<a href="#">#nlw</a>{' '}<a href="#">#rocketseat</a>
        </p>
      </main>
      <form className={styles.postForm}>
        <label for="textareaContent">Deixe seu feedback</label>
        <textarea id="textareaContent" placeholder="Escreva um comentário..."/>
        <button type="submit">Publicar</button>
      </form>
      <Comment
        author="Lucas Ribeiro"
        content="Muito bom Devon, parabéns!! 👏👏"
        image="https://github.com/LUKASRIB15.png"
      />
      <Comment
        author="Italo Paula"
        content="Parabéns, Lucas! Ótimo trabalho"
        image="https://github.com/italoopaula.png"
      />
    </div>
  )
}