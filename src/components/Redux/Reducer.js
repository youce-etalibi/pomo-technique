import { combineReducers } from "redux";
const initStateTasks = {
  TaskList: [],
};
const initStateSettings = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  autoStartPomodoro: false,
  autoStartShortBreak: false,
  longBreakInterval: 3,
};
const initStateUsers = {
  users: [
    {
      id : 0,
      userName : 'Youssef_Talibi',
      email : "youssef@gmail.com",
      password : "2004",
      totalTime : '120'
    }
  ],
  loginCorrect: false,
  mode: "naturale",
};
function TasksReducer(state = initStateTasks, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, TaskList: [...state.TaskList, action.payload] };
    case "TOGGLE_TASK":
      return {
        ...state,
        TaskList: state.TaskList.map((task, index) =>
          index === action.payload ? { ...task, checked: !task.checked } : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        TaskList: state.TaskList.filter(
          (task, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
}
function SettingsReducer(state = initStateSettings, action) {
  switch (action.type) {
    case "updateSettings":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
function UsersReducer(state = initStateUsers, action) {
  switch (action.type) {
    case "FETCH":
      return { ...state, users: action.payload };
    case "CORRECT":
      return { ...state, loginCorrect: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "ADD_ACCOUNT":
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
}
const RootReducers = combineReducers({
  tasks: TasksReducer,
  settings: SettingsReducer,
  user: UsersReducer,
});
export default RootReducers;
