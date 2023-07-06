import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const TimerContext = createContext();
export const TimerContextActions = createContext();

const initialState = {
  timers: localStorage.getItem("timers")
    ? JSON.parse(localStorage.getItem("timers"))
    : [],
};

const timerHandler = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newItem = {
        id: uuidv4(),
        ...action.payload,
        onActive: false,
        createAt: new Date().toLocaleDateString("fa-IR"),
      };
      const addItem = [...state.timers, newItem];
      localStorage.setItem("timers", JSON.stringify(addItem));
      return { ...state, timers: addItem };
    }
    case "REMOVE_TODO": {
      const removeTodo = [...state.timers];

      const filterItem = removeTodo.filter(
        (todo) => todo.id !== action.payload.id
      );

      localStorage.setItem("timers", JSON.stringify(filterItem));
      return { ...state, timers: filterItem };
    }
    case "ACTIVE_TODO": {
      const todos = [...state.timers];
      const todosIndex = todos.findIndex((i) => i.id === action.payload.id);
      todos.forEach((todo) => (todo.onActive = false));
      todos[todosIndex].onActive = true;
      localStorage.setItem("timers", JSON.stringify(todos));
      return { ...state, timers: todos };
    }

    default:
      return state;
  }
};

const TimerProvider = ({ children }) => {
  const [timer, dispatch] = useReducer(timerHandler, initialState);

  return (
    <TimerContext.Provider value={timer}>
      <TimerContextActions.Provider value={dispatch}>
        {children}
      </TimerContextActions.Provider>
    </TimerContext.Provider>
  );
};

export default TimerProvider;

export const useTimer = () => useContext(TimerContext);
export const useTimerDispatch = () => useContext(TimerContextActions);
