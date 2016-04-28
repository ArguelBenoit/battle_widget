import React from 'react';
import ReactDOM from 'react-dom';
import BattleWidget from './BattleWidget.jsx';


const color = '#FFEAA1';

const height = 150;
const width = 90;

const fighters = [
  {
    name: 'trololo',
    count: '8675',
    color: '#FFF'
  }, {
    name: 'tralala',
    count: '3027',
    color: '#666'
  }, {
    name: 'Pipi',
    count: '5678',
    color: '#126'
  }
];



const attributes = {
  fighters,
  height,
  width,
  color
};
ReactDOM.render(
  <BattleWidget {...attributes} />,
  document.getElementById('widgetbattle')
);
