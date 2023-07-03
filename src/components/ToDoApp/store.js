// --------------------------------------------
// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducers';

// const store = configureStore({
//   reducer: reducer,
// });

// export default store;
// -------------------------------------------------------------------------

import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({
  reducer,
});

// Subscribe to store updates
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('tasks', JSON.stringify(state.tasks));
});

export default store;

