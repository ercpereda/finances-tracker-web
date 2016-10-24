import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducer from  './reducers';
import './index.css';
import App from './containers/App';
import DevTools from './containers/DevTools';

injectTapEventPlugin();

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
);

const store = createStore(
  reducer,
  undefined,
  enhancer
);

render(
  <Provider store={store}>
    <div>
    <App />
    <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
