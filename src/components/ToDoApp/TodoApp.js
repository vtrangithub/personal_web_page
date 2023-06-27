import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import store from './store';

export default function TodoApp (){
    return (
        <Provider store={store}>
    <TodoList />
  </Provider> 
    )
}