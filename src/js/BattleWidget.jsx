import React, {PropTypes} from 'react';

function BattleWidget(props){
  //const levelFighter = props.levelFighter;
  const {levelFighter} = props;
  

  const width = 200;
  const height = 200;


  const widthLoader = ( width / 100 ) * 80;
  const widthImg = ( width / 100 ) * 70;
  const marginLeftLoader = ( width / 100 ) * 10;
  const marginLeftImg = ( width / 100 ) * 15;
  const unitLineHeight = ( height / 100 ) * 25;


  const levelFighterMax = levelFighter.reduce((memo, value) => {
    return Math.max(memo, value);
  }, 0);

  var maxUnit = 400;
  if(levelFighterMax < 200) {
    var maxUnit = 200;
  };
  if(levelFighterMax < 400 && levelFighterMax > 200) {
    var maxUnit = 400;
  };
  if(levelFighterMax < 1000 && levelFighterMax > 400) {
    var maxUnit = 1000;
  };


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
  }
  const styleLoader1height = ( height / 100 ) * levelFighterEvolved[0];
  const styleLoader1 = {
    width: widthLoader,
    marginLeft: marginLeftLoader,
    height: styleLoader1height,
    marginTop: ( 100 - levelFighterEvolved[0] ) * height / 100
  };
  const styleLoader2height = ( height / 100 ) * levelFighterEvolved[1];
  const styleLoader2 = {
    width: widthLoader,
    marginLeft: marginLeftLoader,
    height: ( height / 100 ) * levelFighterEvolved[1],
    marginTop: ( 100 - levelFighterEvolved[1] ) * height / 100
  };
  const styleUnitLine = {
    width: levelFighter.length * width,
    height: unitLineHeight
  };
  const styleUnitLine1 = {
    width: levelFighter.length * width,
    marginTop: 0,
  }
  const styleUnitLine2 = {
    marginTop: ( height / 100 ) * 25,
    width: levelFighter.length * width
  };
  const styleUnitLine3 = {
    marginTop: ( height / 100 ) * 50,
    width: levelFighter.length * width
  };
  const styleUnitLine4 = {
    marginTop: ( height / 100 ) * 75,
    width: levelFighter.length * width
  };
  const styleUnitLine5 = {
    marginTop: height,
    width: levelFighter.length * width
  };
  const styleProfileImg = {
    width: widthImg,
    marginLeft: marginLeftImg,
    marginTop: ( ( 100 - levelFighterEvolved[0] ) * height / 100) - widthImg - 8
  };


  return <div id="container" style={styleContainer}>
    <div>
      <div className="containerunitline" style={styleUnitLine1}>
        <p>{maxUnit}t</p>
      </div>
      <div className="containerunitline" style={styleUnitLine2}>
        <p>{maxUnit*0.75}t</p>
      </div>
      <div className="containerunitline" style={styleUnitLine3}>
        <p>{maxUnit*0.5}t</p>
      </div>
      <div className="containerunitline" style={styleUnitLine4}>
        <p>{maxUnit*0.25}t</p>
      </div>
      <div className="containerunitline" style={styleUnitLine5}>
        <p>0t</p>
      </div>
    </div>

    <div className="loadercontainer" style={styleLoaderContainer}>
      <img src="img/profile.png" style={styleProfileImg}/>
      <div className="loader" style={styleLoader1}>
        <p>{levelFighter[0]} tw</p>
      </div>
    </div>
    <div className="loadercontainer" style={styleLoaderContainer}>
      <img src="img/profile.png" style={styleProfileImg}/>
      <div className="loader" style={styleLoader2}>
        <p>{levelFighter[1]} tw </p>
      </div>
    </div>

  </div>;
}

BattleWidget.propTypes = {
  levelFighter: PropTypes.array
};

export default BattleWidget;
