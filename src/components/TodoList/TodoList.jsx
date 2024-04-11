import React, { useReducer } from 'react';
import { todoReducer } from '../../reducers/todoReducer';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';

import { defaultTasks } from './defaultTasks';
import { CONTSTANTS } from '../../constants';
import styles from './TodoList.module.sass';

const { ACTIONS } = CONTSTANTS;

const initialState = {
  tasks: defaultTasks.map((task) => ({ text: task, isDone: false })),
  task: '',
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const inputHandler = ({ target: { value } }) => {
    dispatch({ type: ACTIONS.SET_VALUE, payload: value });
  };

  const addTask = () => {
    if (state.task !== '')
      dispatch({ type: ACTIONS.CREATE_ITEM, payload: state.task });
  };

  return (
    <>
      <input
        placeholder='Define your task in the Matrix'
        value={state.task}
        onChange={inputHandler}
        className={styles['task-input']}
      />
      <button onClick={addTask} className={styles['display-button']}>
        Initiate
      </button>
      <ul className={styles['todo-container']}>
        {state.tasks.map((task, i) => (
          <li
            key={i}
            style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
          >
            {task.text}
            <button
              onClick={() => {
                dispatch({ type: ACTIONS.DELETE_ITEM, payload: i });
              }}
              className={styles['del-btn']}
            >
              <FaRegTrashAlt />
            </button>
            <button
              onClick={() => {
                dispatch({ type: ACTIONS.TOGGLE_DONE, payload: i });
              }}
              className={styles['done-btn']}
            >
              <FaCheck className={styles.checked} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
