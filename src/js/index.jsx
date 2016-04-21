import React from 'react';
import ReactDOM from 'react-dom';

var BattleWidget = React.createClass({
  render() {
    return <div>
      <div className="contentloader"> 
        <div className="loader loader1"></div>
      </div>
      <div className="contentloader"> 
        <div className="loader loader2"></div>
      </div>
    </div>;
  }
});

ReactDOM.render(
  <BattleWidget/>,
  document.getElementById('container')
);