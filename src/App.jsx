import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"

import styles from "./App.module.css"
import "./global.css"

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>posts</main>
      </div>
    </>
  )
}

export default App

