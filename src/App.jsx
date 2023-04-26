import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"
import { Post } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LUKASRIB15.png",
      name: "Lucas Ribeiro",
      role: "Dev FullStack",
    },
    content: [
      {id: crypto.randomUUID(), type: "paragraph", content: "Fala galeraa 👋"},
      {id: crypto.randomUUID(), type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {id: crypto.randomUUID(), type: "link", content: "👉 jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-04-23T12:04:52.708Z")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/italoopaula.png",
      name: "Italo Paula",
      role: "Dev FrontEnd",
    },
    content: [
      {id: crypto.randomUUID(), type: "paragraph", content: "Fala pessoal 👋"},
      {id: crypto.randomUUID(), type: "paragraph", content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻"},
      {id: crypto.randomUUID(), type: "paragraph", content: "Acesse e deixe seu feedback"},
      {id: crypto.randomUUID(), type: "link", content: "👉 jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-04-22T12:04:52.708Z")
  },
]

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          {
            //Iteração
            posts.map(post=>{
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App
