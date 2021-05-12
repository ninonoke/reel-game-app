import React from 'react';
import ReactDOM from 'react-dom';
import './assets/normalize.scss';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './store/reducer';
import { ReducerInterface, ActionInterface, DispatchType } from './store/interfaces';

const store: Store<ReducerInterface, ActionInterface> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
