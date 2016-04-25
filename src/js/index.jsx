import React from 'react';
import ReactDOM from 'react-dom';
import BattleWidget from './BattleWidget.jsx';

const data = [578, 138];


ReactDOM.render(
  <BattleWidget levelFighter={data} />,
  document.getElementById('widgetbattle')
);
