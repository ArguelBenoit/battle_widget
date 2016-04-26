import React, {PropTypes} from 'react';

function BattleWidget(props){
  //const levelFighter = props.levelFighter;
  const {levelFighter} = props;
  const {width} = props;
  const {height} = props;
  const {color} = props;

  const widthLoader = width * 0.8;
  const widthImg = width * 0.66;
  const marginLeftLoader = width * 0.1;
  const marginLeftImg = width * 0.17;
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
  const styleLoaderContainer = {
    width: width,
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
    // return <BattleWidgetLoader level={level} maxUnit={maxUnit} />;
    const percent = level * 100 / maxUnit;
    const styleProfileImg = {
      width: widthImg,
      marginLeft: marginLeftImg,
      marginTop: (( 100 - percent ) * height / 100) - widthImg - 8
    };
    var style = {
      background: color,
      width: widthLoader,
      marginLeft: marginLeftLoader,
      height: percent + '%',
      marginTop: ( 100 - percent ) * height / 100
    };
    return <div key={i} className="loadercontainer" style={styleLoaderContainer}>
      <img src="img/profile.png" style={styleProfileImg}/>
      <div className="loader" style={style}>
        <p>{level}.t</p>
      </div>
    </div>;
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
  fighter: PropTypes.array,
  levelFighter: PropTypes.array,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

export default BattleWidget;
