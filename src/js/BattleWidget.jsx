import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import BattleWidgetPlot from './BattleWidgetPlot.jsx';

function BattleWidget(props){
  const {fighters, width, height} = props;
  const allLevelFighter = fighters.map(fighter => fighter.count);
  const levelMax = allLevelFighter.reduce((memo, value) => {
    return Math.max(memo, value);
  }, 0);
  
  var maxUnit;
  if (levelMax < 500) {
    maxUnit = 500;
  } if (levelMax < 1000 && levelMax > 500) {
    maxUnit = 1000;
  } if (levelMax < 5000 && levelMax > 1000) {
    maxUnit = 5000;
  } if (levelMax > 5000) {
    maxUnit = Math.round(levelMax/1000)*1000+1000;
  }

  const styleContainer = {
    width: allLevelFighter.length * width,
    height: height
  };
  const styleUnitLine = {
    width: allLevelFighter.length * width,
    height: height * 0.25
  };
  const styleP00 = {
    marginTop: height - 13
  };
  var content = fighters.map(function(fighter, i){
    const attributes = {
      maxUnit,
      fighter,
      height,
      width
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
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  fighters: PropTypes.array.isRequired
};
export default connect(function(state){
  return {
    fighters: state
  };
})(BattleWidget);