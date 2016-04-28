import React from 'react';
import ReactDOM from 'react-dom';
import BattleWidget from './BattleWidget.jsx';


const color = '#FFEAA1';

const height = 150;
const width = 90;
var fighter;

const fighters = [
  fighter = {
    name: 'trololo',
    count: '8675',
    color: '#FFF'
  },
  fighter = {
    name: 'tralala',
    count: '3027',
    color: '#666'
  },
  fighter = {
    name: 'Pipi',
    count: '5678',
    color: '#126'
  }
];



const attributes = {
  fighter,
  fighters,
  height,
  width,
  color
};
ReactDOM.render(
  <BattleWidget {...attributes} />,
  document.getElementById('widgetbattle')
);
