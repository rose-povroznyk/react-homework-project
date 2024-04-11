import React from 'react';
import styles from './UserList.module.sass';

const UserList = ({ data }) => {
  return (
    <>
      <ul className={styles.container}>
        {' '}
        {data.map((d) => {
          const {
            name: { title, first, last },
            gender,
            location: { country, state },
            email,
          } = d;
          return (
            <li>
              <img
                src={`https://robohash.org/${Math.floor(Math.random() * 101)}`}
                alt='avatar'
              />
              <p>
                <span>User of the Matrix: </span>
                {title} {first} {last}
              </p>
              <p>
                <span>Binary code: </span>
                {gender}
              </p>
              <p>
                <span>Hosting: </span>
                {country}, {state}
              </p>
              <p>
                <span>
                  Communication channel: <br />
                </span>
                {email}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
