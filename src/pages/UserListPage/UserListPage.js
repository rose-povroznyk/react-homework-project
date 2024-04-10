import React, { useState } from 'react';
import getUsers from '../../api';
import UserList from '../../components/UserList/UserList';

const UserListPage = () => {
  const [userNumber, setUserNumber] = useState('');
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  const inputHandler = ({ target: { value } }) => {
    setUserNumber(value);
  };

  const displayUsers = () => {
    setIsFetching(true);
    getUsers(userNumber)
      .then(({ results }) => setData(results))
      .catch((e) => setIsError(e))
      .finally(() => setIsFetching(false));
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
      {isFetching && <div>Load data ...</div>}
      {isError && <div>{isError.message}</div>}
      <UserList data={data} />
    </>
  );
};

export default UserListPage;
