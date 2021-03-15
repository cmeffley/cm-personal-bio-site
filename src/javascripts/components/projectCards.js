const showProjectsCards = (array) => {
  array.forEach((element) => {
    document.querySelector('#projects').innerHTML += `<div class="card" style="width: 18rem;" id="card-id">
    <img class="card-img-top" src="${element.screenshot}" alt="Screenshot of application">
    <div class="card-body">
      <p class="card-text">${element.title}</p>
      <p class="card-text">${element.description}</p>
      <p class="card-text">${element.technologiesUsed}</p>
      <a href="${element.url}" class="card-link">Application Site</a>
      <a href="${element.githubUrl}" class="card-link">GitHub</a></a>
     </div>
 </div>`;
  });
};

export default showProjectsCards;
