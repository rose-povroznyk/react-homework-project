import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.sass';
import bg from '../../images/hands.png';

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles['text-wrapper']}>
        <p>
          Welcome to the Matrix Organizer, where your tasks meet users from the
          digital realm! Step into the digital universe with our React-powered
          application. Immerse yourself in three distinct dimensions: Users,
          Todo, and the Gateway to Nowhere.
        </p>
        <p className={styles.animated}>Click the pill. Embrace your destiny.</p>
      </div>

      <div className={styles['img-wrapper']}>
        <img src={bg} className={styles['bg-image']} />
        <Link to='users' className={styles['red-link']}></Link>
        <Link to='todo' className={styles['blue-link']}></Link>
      </div>
    </section>
  );
};

export default Home;
