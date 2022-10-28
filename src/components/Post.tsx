import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import Comment from './Comment'
import Avatar from './Avatar'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'

//Estado = variáveis que eu quero que o componente monitore
//Linha 6: Desestruturação 

//Usando typescript

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps{
    author:{
        name: string;
        role: string;
        avatarUrl: string;
    };
    publishedAt: Date;
    content: Content[];
}

export function Post({author,publishedAt, content}: PostProps){
    const [comments, setComments]= useState([])

    const [newCommentText, setNewCommentText] = useState('') 
    
    //Formatação da data no momento da publicação
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH':'mm'h'",{
        locale: ptBR,
    })

    //Calculando o tempo de diferença entre o horário atual e o o horário da publicação do post
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
    })

    function HandleCreateNewComment(event: FormEvent){
        /*Evita comportamento padrão do onSubmmit de redirecionar
        para outra pagina*/
        event.preventDefault()

        // spread(...) lê todos os valores que estão dentro do array     
        setComments([...comments, newCommentText])

        setNewCommentText('')
       
        
    }

    function HandleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')

        //Mudança de estado pegando o valor que estava no input
        setNewCommentText(event.target.value)
    }

    function DeleteComment(commentToDelete: string){
        //imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)

        //recebe como parâmetro uma função de callback, onde o retorno dado será um novo array com os elementos que passaram na validação realizada.
        const NewCommentsList = comments.filter(comment=>{
            return comment != commentToDelete
        })

        setComments(NewCommentsList)
    }

    function HandleNotValidity(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Precisamos desta informação!')
    }

    const isNewCommentEmpty = newCommentText == 0;
    return(
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.profile}>
                    <Avatar
                        hasBorder
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <p className={styles.title}>{author.name}</p>
                        <p className={styles.subtitle}>{author.role}</p>
                    </div>
                </div>
                <time title={publishedDateFormatted} DateTime={publishedAt.toISOString()}>Publicado há {publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(line=>{
                    if(line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else{
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
                <p><a href="#">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
            </div>
            <form onSubmit={HandleCreateNewComment} className={styles.form}>
                <p className={styles.formTitle}>Deixe seu feedback</p>
                <textarea 
                    className={styles.comment}
                    value={newCommentText}
                    onChange={HandleNewCommentText} 
                    placeholder='Digite algo...'
                    onInvalid={HandleNotValidity}
                    required
                />
                <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
              
            </form>
            <div className={styles.commentList}>
                {comments.map(
                    (comment)=>{
                        return <Comment key={comment} content={comment} deleteComment={DeleteComment}/>
                    }
                )}
            </div>

        </article>
    )
}
/**/ 