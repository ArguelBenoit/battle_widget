import React from 'react';
import ReactDOM from 'react-dom';
import BattleWidget from './BattleWidget.jsx';

const twCountBattle = [347, 214];

ReactDOM.render(
  <BattleWidget levelFighter={twCountBattle} />,
  document.getElementById('widgetbattle')
);
