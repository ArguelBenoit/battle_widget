import React, {PropTypes} from 'react';
import BattleWidgetPlot from './BattleWidgetPlot.jsx';

function BattleWidget(props){
  const {levelFighter, width, height, color} = props;
  const unitLineHeight = height * 0.25;
  const levelFighterMax = levelFighter.reduce((memo, value) => {
    return Math.max(memo, value);
  }, 0);
  var maxUnit;
  if (levelFighterMax < 500) {
    var maxUnit = 500;
  } if (levelFighterMax < 1000 && levelFighterMax > 500) {
    var maxUnit = 1000;
  } if (levelFighterMax < 5000 && levelFighterMax > 1000) {
    var maxUnit = 5000;
  } if (levelFighterMax > 5000) {
    var maxUnit = levelFighterMax + levelFighterMax* 0.2;
  }
  var levelFighterEvolved = levelFighter.map(function(n) {
    return 0;
  });
  const styleContainer = {
    width: levelFighter.length * width,
    height: height
  };
  const styleUnitLine = {
    width: levelFighter.length * width,
    height: height * 0.25
  };
  const styleP00 = {
    marginTop: height - 13
  };

  var content = levelFighter.map(function(level, i){
    const attributes = {
      maxUnit,
      height,
      width,
      color,
      level
    };
    return <BattleWidgetPlot key={i} {...attributes} />;
  });
  return <div id="container" style={styleContainer}>
    <p className="p-00" style={styleP00}>0.0</p>
    <div className="allcontainerunitline">
      <div className="containerunitline" style={styleUnitLine}>
        <p className="p-color2">{maxUnit}</p>
      </div>
      <div className="containerunitline" style={styleUnitLine}>
        <p className="p-color">{maxUnit * 0.75}</p>
      </div>
      <div className="containerunitline" style={styleUnitLine}>
        <p className="p-color2">{maxUnit * 0.5}</p>
      </div>
      <div className="containerunitline" style={styleUnitLine}>
        <p className="p-color">{maxUnit * 0.25}</p>
      </div>
    </div>
    {content}
  </div>;
}

BattleWidget.propTypes = {
  levelFighter: PropTypes.array,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

export default BattleWidget;
