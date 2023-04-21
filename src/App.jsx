import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"
import { Post } from "./components/Post"

import styles from "./App.module.css"
import "./global.css"


function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          <Post 
            author="Lucas Ribeiro" 
            content="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
            image="https://github.com/LUKASRIB15.png"
          />
          <Post 
            author="Lucas Ribeiro" 
            content="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
            image="https://github.com/LUKASRIB15.png"
          />
          <Post 
            author="Lucas Ribeiro" 
            content="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
            image="https://github.com/LUKASRIB15.png"
          />
        </main>
      </div>
    </>
  )
}

export default App
