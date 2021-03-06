const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="cards" class="d-flex flex: row justify-content-around"></div>
    <div id="footer"></div>
  </div>`;
};

export default domBuilder;
