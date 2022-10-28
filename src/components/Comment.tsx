import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'
import Avatar from './Avatar'
import { useState } from 'react'

interface CommentProps{
    content: string;
    deleteComment: (comment: string) => void; 
}

export default function Comment({content, deleteComment}: CommentProps){

    const[countLike, setCountLike] = useState(0)

    function TapButtonLike(){
        //Closures no React! state pega o valor mais atual do countLike
        setCountLike((state)=>{
            return state + 1;
        })
    }
    function HandleDeleteComment(){
        deleteComment(content)
    }
    return(
        <div className={styles.comment}>
            <div>
               <Avatar
                hasBorder={false}
                src="https://github.com/LUKASRIB15.png"
               />
            </div>
            <div className={styles.content}>
                <header className={styles.profile}>
                    <div className={styles.name}>
                        <div>
                            <p className={styles.namePerfil}>Devon Lane</p>
                            <p>(você)</p>   
                        </div>
                        <time>Cerca de 2h</time> 
                    </div>
                    <button onClick={HandleDeleteComment} className={styles.buttonDelete}title="Deletar comentário">
                        <Trash className={styles.iconTrash}/>
                    </button>
                </header>
                <p>{content}</p>
            </div>
            <footer>
                <button onClick = {TapButtonLike} className={styles.like}>
                    <ThumbsUp className={styles.iconLike} size={16}/>
                    Aplaudir<span>{countLike}</span>
                </button>
            </footer>
        </div>
    )
}