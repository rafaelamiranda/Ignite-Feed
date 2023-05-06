import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/jakeliny.png",
      name: "Jakeliny",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-04-30 20:00:00'),
  }, {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam molestias deserunt voluptatibus odio odit? Atque, beatae assumenda architecto in delectus aut maxime ipsa porro quam dolor est harum natus." }, 
    ],
    publishedAt: new Date('2023-05-01 19:10:00'),
  },
];

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
