export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});
export const toggleTask = (index) => ({
  type: "TOGGLE_TASK",
  payload: index,
});
export const deleteTask = (index) => ({
  type: "DELETE_TASK",
  payload: index,
});
export const UpdateSettings = (settings) => ({
  type: "updateSettings",
  payload: settings,
});
export const FetchUsers = (users) => ({
  type: "FETCH",
  payload: users,
});
export const AUTH = (statu) => ({
  type: "CORRECT",
  payload: statu,
});
export const ChangeMode = (mode) => ({
  type: "CHANGE_MODE",
  payload: mode,
});
export const ADD_ACCOUNT = (user) => ({
  type: "ADD_ACCOUNT",
  payload: user,
});
export const login = (user) => ({
  type: "LOGIN",
  payload: user,
});
export const logout = () => ({
  type: "LOGOUT",
});
