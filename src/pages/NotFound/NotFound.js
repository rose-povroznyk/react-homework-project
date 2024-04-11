import React from 'react';
import styles from './NotFound.module.sass';
import notFoundImg from '../../images/404.png';
const NotFound = () => {
  return (
    <section className={styles.container}>
      <p className={styles['top-text']}>not found</p>

      <img src={notFoundImg} className={styles['main-img']}></img>
      <p className={styles['bottom-text']}>404</p>
    </section>
  );
};

export default NotFound;
