import {Header} from "./components/Header"
import {Post} from "./components/Post"
import {Sidebar} from "./components/Sidebar"


import styles from "./App.module.css"
import './global.css'

import { parse } from "date-fns"
import { ptBR } from "date-fns/locale"


//Lista com Posts já que não há uso de um BD
const post = [{
  id: 1,
  author:{
    avatarUrl: "https://github.com/LUKASRIB15.png",
    name: "Lucas Ribeiro",
    role: "Dev Front-end",
  },
  content:[
    {type:'paragraph', content: "Fala galeraa 👋"},
    {type:'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
    {type: 'link', content: "jane.design/doctorcare"},
  ], 
  publishedAt: new Date(2022, 9, 23, 15,3,0),
},
{
  id: 2,
  author:{
    avatarUrl: "https://github.com/diego3g.png",
    name: "Diego Fernandes",
    role: "CTO @Rocketseat",
  },
  content:[
    {type:'paragraph', content: "Fala galeraa 👋"},
    {type:'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
    {type: 'link', content: "jane.design/doctorcare"},
  ], 
  publishedAt: new Date(2021, 10, 22, 11,33,0),
}
//09:29:09
]
//Linha 53: Iteração com JSX
export default function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {post.map(post=>{
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}