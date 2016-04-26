import React, {PropTypes} from 'react';

function BattleWidget(props){
  //const levelFighter = props.levelFighter;
  const {levelFighter} = props;

  const width = 100;
  const height = 250;
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
    return n * 100 / maxUnit;
  });
  const styleContainer = {
    width: levelFighterEvolved.length * width,
    height: height
  };
  const styleLoaderContainer = {
    width: width,
    height: height
  };
  const styleProfileImg = {
    width: widthImg,
    marginLeft: marginLeftImg,
    marginTop: (( 100 - levelFighterEvolved[0] ) * height / 100) - widthImg - 8
  };
  const styleUnitLine = {
    width: levelFighter.length * width,
    height: height * 0.25
  };
  const styleP00 = {
    marginTop: height - 13
  };
  const styleLoader1height = ( height / 100 ) * levelFighterEvolved[0];
  const styleLoader1 = {
    width: widthLoader,
    marginLeft: marginLeftLoader,
    height: styleLoader1height,
    marginTop: ( 100 - levelFighterEvolved[0] ) * height / 100
  };

  var content = [];
  var i;
  for (i = 0; i < levelFighter.length; i++) {
    var oneLoader = <div className="loadercontainer" style={styleLoaderContainer}>
      <img src="img/profile.png" style={styleProfileImg}/>
      <div className="loader" style={styleLoader1}>
        <p>{levelFighter[i]} tw</p>
      </div>
    </div>;
    content.push(oneLoader);
  }

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
  levelFighter: PropTypes.array
};

export default BattleWidget;
