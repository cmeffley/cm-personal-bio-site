import profilePic from '../../../documentation/profilePic.jpg';

const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="home">
      <div id="homeText"></div>
      <div id="homePic"><img src=${profilePic}></div>
    </div>
    <div id="bio"></div>
    <div id="projects"></div>
    <div id="tech"></div>
    <div id="footer"></div>
  </div>`;
};

export default domBuilder;
