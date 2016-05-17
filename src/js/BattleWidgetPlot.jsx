import React, {PropTypes} from 'react';

function BattleWidgetPlot(props){
  const {maxUnit, fighter, height, width} = props;
  const widthImg = width * 0.56;
  const marginLeftImg = width * 0.22;
  const widthLoader = width * 0.80;
  const styleLoaderContainer = {
    width: width,
    height: height
  };
  const heightLoader = ( fighter.count * height ) / maxUnit;
  const marginTopLoader = height - heightLoader;
  var styleLoader = {
    marginLeft: width * 0.1,
    background: fighter.color,
    width: widthLoader,
    height: heightLoader,
    marginTop: marginTopLoader
  };
  const styleCount = {
    color: fighter.color,
    marginTop: marginTopLoader - 33,
    marginLeft: width * 0.1
  };
  const styleProfileImg = {
    width: widthImg,
    height: widthImg,
    marginLeft: marginLeftImg,
    marginTop: height + 12
  };
  const styleContentName = {
    marginTop: widthImg + 20
  };
  return <div className="loadercontainer" style={styleLoaderContainer}>
    <img src={fighter.picture} style={styleProfileImg}/>
    <p className="count" style={styleCount}>{fighter.count}.t</p>
    <div className="loader" style={styleLoader}></div>
    <div style={styleContentName} className="contentname">
      <p className="namefighter">{fighter.title}</p>
      <p className="hashtagfighter">{fighter.hashtag}</p>
    </div>
  </div>;
}

BattleWidgetPlot.propTypes = {
  maxUnit: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  level: PropTypes.number,
  fighter: PropTypes.array
};

export default BattleWidgetPlot;