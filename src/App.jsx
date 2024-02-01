//JSX =  JavaScript + XML 
import { useState } from 'react'
import {Post} from './Components/post'
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'

import styles from './App.module.css'
import './global.css'



export function App() {

  return (

    <div>

      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post
            author=" Gabriel Manojo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Qui laborum unde iste. Numquam voluptatum fugiat incidunt."
          />

          <Post
            author="Vinicius Sotto"
            content="Um novo Post muito legal"
          />
        </main>
      </div>



    </div>
  )
}

