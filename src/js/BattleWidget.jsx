import React, {PropTypes} from 'react';

function BattleWidget(props){
  
  //const levelFighter = props.levelFighter;
  const {levelFighter} = props;

  const styleContainer = {
    width: levelFighter.length * 100,
    height: 200
  };
  const styleLoader1 = {
    height: levelFighter[0],
    marginTop: 200 - levelFighter[0]
  };
  const styleLoader2 = {
    height: levelFighter[1],
    marginTop: 200 - levelFighter[1]
  };
  const styleLoader3 = {
    height: levelFighter[2],
    marginTop: 200 - levelFighter[2]
  };
  const styleLoader4 = {
    height: levelFighter[3],
    marginTop: 200 - levelFighter[3]
  };
  const styleUnitLine = {
    width: levelFighter.length * 100
  };
  return <div id="container" style={styleContainer}>
    <div className="loader" style={styleLoader1}></div>
    <div className="loader" style={styleLoader2}></div>
    <div className="loader" style={styleLoader3}></div>
    <div className="loader" style={styleLoader4}></div>
    <hr className="unitline" style={styleUnitLine}/>
    <hr className="unitline" style={styleUnitLine}/>
    <hr className="unitline" style={styleUnitLine}/>
    <hr className="unitline" style={styleUnitLine}/>
    <hr className="unitline" style={styleUnitLine}/>
  </div>;
}

BattleWidget.propTypes = {
  levelFighter: PropTypes.array
};


export default BattleWidget;
