'use client'

import { useState } from 'react'

import { Main } from '@/widgets/Main'
import styles from './page.module.scss'
import { Header } from '@/widgets/Header'

export default function Home() {
  const [text, setText] = useState('sans-serif')
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <div className={styles.main__app} style={{fontFamily: `${text}`}}>
      <div className={isDarkMode ? styles.dark__theme : styles.light__theme }>
        <div className={styles.app}>
          <header>
            <Header setText={setText} darkMode={isDarkMode} setDarkMode={setIsDarkMode} />
          </header>
          <main>
            <Main darkMode={isDarkMode} />
          </main>
          <footer></footer>
        </div>
      </div>
    </div>
  )
}