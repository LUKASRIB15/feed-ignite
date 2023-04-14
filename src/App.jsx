import { Header } from "./components/Header"
import { Post } from "./components/Post"

function App() {
  return (
    <>
    <Header/>
    <Post
      author="Lucas Ribeiro"
      content="L!orem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellendus minus sint, provident qui fugit possimus ipsa necessitatibus delectus est ut repudiandae, doloremque aspernatur excepturi. Perferendis id laboriosam earum voluptates"
    />
    <Post
      author="Lucas Oliveira Ribeiro"
      content="L!orem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellendus minus sint, provident qui fugit possimus ipsa necessitatibus delectus est ut repudiandae, doloremque aspernatur excepturi. Perferendis id laboriosam earum voluptates"
    />
    </>
  )
}

export default App

