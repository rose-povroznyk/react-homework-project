import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';

const Header = () => {
  return (
    <header className={styles['header-container']}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='users'>Users</Link>
          </li>
          <li>
            <Link to='todo'>Todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
