import React from 'react';
import ReactDOM from 'react-dom';
import BattleWidget from './BattleWidget.jsx';

const data = [178, 138, 211];

ReactDOM.render(
  <BattleWidget levelFighter={data} />,
  document.getElementById('widgetbattle')
);
