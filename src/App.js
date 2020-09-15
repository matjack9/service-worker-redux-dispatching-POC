import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer';
import ToDoList from './ToDoList';

const middlewares = [thunk];

const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);

const store = createStore(rootReducer, undefined, composedEnhancers);

const App = () => (
  <Provider store={store}>
    <>
      <h1>Redux Service Worker POC</h1>
      <ToDoList />
    </>
  </Provider>
);
  
export default App;
