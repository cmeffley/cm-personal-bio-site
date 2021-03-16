const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="home"></div>
    <div id="bio"></div>
    <div id="projects"></div>
    <div id="tech"></div>
    <div id="footer"></div>
  </div>`;
};

export default domBuilder;
