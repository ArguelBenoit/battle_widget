import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import BattleWidget from './BattleWidget.jsx';
import data from './action';
import reducer from './reducer';

const store = createStore(reducer);
console.log(store);

setTimeout(function(){
  store.dispatch(data())
}, 2000);

const height = 240;
const width = 120;

const attributes = {
  height,
  width
};
render(
  <Provider store={store}>
    <BattleWidget {...attributes} />
  </Provider>,
  document.getElementById('widgetbattle')
);