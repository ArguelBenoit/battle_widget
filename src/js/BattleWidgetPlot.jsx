import React, {PropTypes} from 'react';

function BattleWidgetPlot(props){
  const {maxUnit, fighter, height, width, color, allLevelFighter, allColorFighter, allNameFighter} = props;
  const widthImg = width * 0.66;
  const marginLeftImg = width * 0.17;
  const widthLoader = width * 0.80;
  const marginImgLoader = 10;
  const styleLoaderContainer = {
    width: width,
    height: height
  };
  const heightLoader = ( fighter.count * height ) / maxUnit;
  const marginTopLoader = height - heightLoader;
  var styleLoader = {
    width: width * 0.8,
    marginLeft: width * 0.1,
    background: fighter.color,
    width: widthLoader,
    height: heightLoader,
    marginTop: marginTopLoader
  };
  const styleProfileImg = {
    width: widthImg,
    marginLeft: marginLeftImg,
    marginTop: marginTopLoader - widthImg - marginImgLoader
  };
  return <div className="loadercontainer" style={styleLoaderContainer}>
    <img src="img/profile.png" style={styleProfileImg}/>
    <div className="loader" style={styleLoader}>
      <p>{fighter.count}.t</p>
    </div>
  </div>;
}

BattleWidgetPlot.propTypes = {
  maxUnit: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  level: PropTypes.number,
  allName: PropTypes.array,
  allColor: PropTypes.array,
  allLevelFighter: PropTypes.array,
};

export default BattleWidgetPlot;
