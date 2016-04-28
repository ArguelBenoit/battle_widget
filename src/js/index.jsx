import React from 'react';
import ReactDOM from 'react-dom';
import BattleWidget from './BattleWidget.jsx';


// Best color picker 
// https://color.adobe.com/

const height = 240;
const width = 100;
const fighters = [
  {
    picture: 'https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif',
    hashtag: '#github',
    title: 'Github', 
    count: '456',
    color: '#FFA51C'
  }, {
    picture: 'https://www.seeklogo.net/wp-content/uploads/2015/08/instagram-icon-circle-vector-logo.png',
    hashtag: '#instagram',
    title: 'Instagram',
    count: '230',
    color: '#E8E41A',
  }, {
    picture: 'https://pbs.twimg.com/profile_images/716139129227124737/-qjHx0ur.jpg',
    hashtag: '#pornhub',
    title: 'Pornhub',
    count: '820',
    color: 'pink'
  }, {
    picture: 'http://www.cen-centre.org/fichiers/images/Newsletter/Fevrier_2014/Logo_Facebook.jpg',
    hashtag: '#facebook',
    title: 'Facebook',
    count: '478',
    color: '#29FF56'
  }, {
    picture: 'http://www.referencement-2000.com/wp-content/uploads/2016/03/twitter-logo-618-340x300.jpg',
    hashtag: '#twitter',
    title: 'Twitter',
    count: '178',
    color: '#1AB3E8'
  }
];



const attributes = {
  fighters,
  height,
  width
};
ReactDOM.render(
  <BattleWidget {...attributes} />,
  document.getElementById('widgetbattle')
);
