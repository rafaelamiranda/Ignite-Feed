import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './Post';
import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          author="Rafaela Miranda" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis obcaecati corporis aperiam iusto, harum et saepe totam assumenda eveniet! Vero quas, asperiores at illo sequi a aliquam vitae laudantium?" 
        />   
        <Post
          author="Diego Fernandes" 
          content="Um novo post muito legal" 
        />     
        </main>
      </div>
    </>
  )
}

export default App
