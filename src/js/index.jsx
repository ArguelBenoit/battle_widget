import React from 'react';
import ReactDOM from 'react-dom';
import BattleWidget from './BattleWidget.jsx';

const levelFighter = [347, 214];
const color = '#4CFF9E';

const height = 200;
const width = 100;

ReactDOM.render(
  <BattleWidget levelFighter={levelFighter} height={height} width={width} color={color} />,
  document.getElementById('widgetbattle')
);
