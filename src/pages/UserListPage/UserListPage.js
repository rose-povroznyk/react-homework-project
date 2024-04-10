import React, { useState } from 'react';
import getUsers from '../../api';
import UserList from '../../components/UserList/UserList';

const UserListPage = () => {
  const [userNumber, setUserNumber] = useState('');
  const [data, setData] = useState([]);

  const inputHandler = ({ target: { value } }) => {
    setUserNumber(value);
  };

  const displayUsers = () => {
    getUsers(userNumber).then(({ results }) => setData(results));
    setUserNumber('');
  };

  return (
    <>
      <input
        type='number'
        placeholder='Enter number of users to visualize'
        value={userNumber}
        onChange={inputHandler}
      />
      <button onClick={displayUsers}>Initiate Transmission</button>
      <UserList data={data} />
    </>
  );
};

export default UserListPage;
