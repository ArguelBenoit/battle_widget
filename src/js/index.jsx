import React from 'react';
import ReactDOM from 'react-dom';

// var a = [1, 2, 3];
// var b = a.map(function(n) {
//   console.log(n);
//   return n * 2;
// });
// console.log(b);


var BattleWidget = React.createClass({
  render() {
    const levelFighter = [178, 138, 211];
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
});

ReactDOM.render(
  <BattleWidget/>,
  document.getElementById('widgetbattle')
);