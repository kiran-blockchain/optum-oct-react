import Image from 'next/image'
import styles from './page.module.css'
import { FirstPage } from './pages'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Welcome to next</h1>
     <FirstPage/>
    </main>
  )
}
