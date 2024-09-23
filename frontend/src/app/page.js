// app/page.js
import Head from 'next/head';
import styles from './globals.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SkinVerta</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to SkinVerta</h1>
        <p className={styles.description}>
          Your go-to skincare comparison platform!
        </p>
      </main>
    </div>
  );
}
