import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('ADD_TASK');
export const searchTask = createAction('SEARCH_TASK');
export const updateTask = createAction('UPDATE_TASK');
export const deleteTask = createAction('DELETE_TASK');
