import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import ToDoList from './ToDoList';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <>
      <h1>Redux Service Worker POC</h1>
      <ToDoList />
    </>
  </Provider>
);
  
export default App;
