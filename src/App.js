import React from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/configureStore';
import ToDoList from './ToDoList';

export const store = createStore();

const App = () => (
  <Provider store={store}>
    <>
      <h1>Redux Service Worker POC</h1>
      <ToDoList />
    </>
  </Provider>
);
  
export default App;
