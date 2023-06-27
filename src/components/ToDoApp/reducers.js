// import { createReducer } from '@reduxjs/toolkit';
// import { addTask, searchTask } from './actions';

// const initialState = {
//   tasks: [],
// };

// const reducer = createReducer(initialState, {
//   [addTask]: (state, action) => {
//     state.tasks.push({ name: action.payload.name, priority: action.payload.priority, isSearched: false });
//   },
//   [searchTask]: (state, action) => {
//     const searchTerm = action.payload.toLowerCase();
//     state.tasks.forEach((task) => {
//       if (task.name.toLowerCase() === searchTerm) {
//         task.isSearched = true;
//       } else {
//         task.isSearched = false;
//       }
//     });
//   },
// });

// export default reducer;
// --------------------------
import { createReducer } from '@reduxjs/toolkit';
import { addTask, searchTask, updateTask } from './actions';

const initialState = {
  tasks: [],
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
    });
});

export default reducer;