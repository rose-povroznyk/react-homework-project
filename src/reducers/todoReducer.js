import { CONTSTANTS } from '../constants';

const { ACTIONS } = CONTSTANTS;

export function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_VALUE: {
      return {
        ...state,
        task: action.payload,
      };
    }

    case ACTIONS.CREATE_ITEM: {
      const updatedTasks = [
        ...state.tasks,
        { text: action.payload, isDone: false },
      ];
      return {
        ...state,
        tasks: updatedTasks,
        task: '',
      };
    }

    case ACTIONS.DELETE_ITEM: {
      const filteredTasks = state.tasks.filter((_, i) => i !== action.payload);
      return {
        ...state,
        tasks: filteredTasks,
      };
    }

    case ACTIONS.TOGGLE_DONE: {
      const updatedTasks = state.tasks.map((task, index) => {
        if (index === action.payload) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    }

    default: {
      return state;
    }
  }
}
