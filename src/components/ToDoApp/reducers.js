
import { createReducer } from '@reduxjs/toolkit';
import { addTask, searchTask, updateTask, deleteTask } from './actions';

const storedTasks = localStorage.getItem('tasks');
const initialState = {
  tasks: storedTasks ? JSON.parse(storedTasks) : [],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      const { name, priority } = action.payload;
      state.tasks.push({ name, priority, isSearched: false, completed: false });
    })
    .addCase(searchTask, (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.tasks.forEach((task) => {
        if (task.name.toLowerCase() === searchTerm) {
          task.isSearched = true;
        } else {
          task.isSearched = false;
        }
      });
    })
    .addCase(updateTask, (state, action) => {
      state.tasks = action.payload;
    })
    .addCase(deleteTask, (state, action) => {
      state.tasks.splice(action.payload, 1);
    });
});

export default reducer;
