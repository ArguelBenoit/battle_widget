import React from 'react';
import ReactDOM from 'react-dom';
import BattleWidget from './BattleWidget.jsx';

const levelFighter = [530, 214, 320, 450, 329, 180];
const color = '#FFEAA1';
const height = 150;
const width = 90;

ReactDOM.render(
  <BattleWidget levelFighter={levelFighter} height={height} width={width} color={color} />,
  document.getElementById('widgetbattle')
);
