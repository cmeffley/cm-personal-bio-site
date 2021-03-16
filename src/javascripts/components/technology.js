const showTechUsed = (array) => {
  array.forEach((element) => {
    document.querySelector('#tech').innerHTML += `
  <div class="icon-container">
    <div class="row">
      <div class="col-sm">
        <img src="${element.icon}">
      </div>
    </div>
  </div>`;
  });
};

export default showTechUsed;
