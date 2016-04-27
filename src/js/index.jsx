import React from 'react';
import ReactDOM from 'react-dom';
import BattleWidget from './BattleWidget.jsx';

const levelFighter = [530, 214];
const color = '#FFEAA1';

const height = 150;
const width = 90;
const fighter = [
  {
    name: 'testi',
    count: '234',
    color: '#FFF'
  }, {
    name: 'teston',
    count: '412',
    color: '#666'
  }
];

ReactDOM.render(
  <BattleWidget fighter={fighter} levelFighter={levelFighter} height={height} width={width} color={color} />,
  document.getElementById('widgetbattle')
);
