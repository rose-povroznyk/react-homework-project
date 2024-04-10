import React, { useReducer } from 'react';
import { todoReducer } from '../../reducers/todoReducer';
import { defaultTasks } from './defaultTasks';
import { CONTSTANTS } from '../../constants';

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
      />
      <button onClick={addTask}>Initiate</button>
      <ul>
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
            >
              X
            </button>
            <button
              onClick={() => {
                dispatch({ type: ACTIONS.TOGGLE_DONE, payload: i });
              }}
            >
              I
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
