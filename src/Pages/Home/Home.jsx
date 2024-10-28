import React from 'react'
import styles from './Home.module.css'


function Home() {
    return (
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Welcome to FakeWebStore</h1>
          <p className={styles.heroSubtitle}>Discover the best products at unbeatable prices.</p>
          <button className={styles.ctaButton}>Shop Now</button>
        </section>
      </div>
    );
  }
  
  export default Home;

