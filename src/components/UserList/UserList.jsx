import React from 'react';

const UserList = ({ data }) => {
  return (
    <>
      {data.map((d) => {
        const {
          name: { title, first, last },
          gender,
          location: { country, state },
          email,
        } = d;
        return (
          <ul>
            <li>
              <img
                src={`https://robohash.org/${Math.floor(Math.random() * 101)}`}
                alt='avatar'
              />
              <p>
                User of the Matrix: {title} {first} {last}
              </p>
              <p>Binary code: {gender}</p>
              <p>
                Hosting: {country}, {state}
              </p>
              <p>Communication channel: {email}</p>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default UserList;
