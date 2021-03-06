const projects = [
  {
    title: 'First Project',
    screenshot: 'Pic here',
    description: 'Decribe the what, why and how',
    technologiesUsed: 'HTML, CSS',
    available: true,
    url: 'URL here',
    githubUrl: 'github url here',
  },
  {
    title: 'Second Project',
    screenshot: 'Pic here',
    description: 'Decribe the what, why and how',
    technologiesUsed: 'HTML, CSS, Javacript, Github,  Bootstrap',
    available: true,
    url: 'URL here',
    githubUrl: 'github url here',
  },
  {
    title: 'Third Project',
    screenshot: 'Pic here',
    description: 'Decribe the what, why and how',
    technologiesUsed: 'HTML,CSS, Javacript',
    available: true,
    url: 'URL here',
    githubUrl: 'github url here',
  },
  {
    title: 'Fourth Project',
    screenshot: 'Pic here',
    description: 'Decribe the what, why and how',
    technologiesUsed: 'HTML,CSS, Javacript',
    available: true,
    url: 'URL here',
    githubUrl: 'github url here',
  },
  {
    title: 'Fifth Project',
    screenshot: 'Pic here',
    description: 'Decribe the what, why and how',
    technologiesUsed: 'HTML,CSS, Javacript',
    available: true,
    url: 'URL here',
    githubUrl: 'github url here',
  },
];

const createProjectsCards = () => {
  projects.forEach((element, i) => {
    document.querySelector('#cards').innerHTML += `<div class="card " style="width: 18rem;" id=${i}>
    <div class="img-container" style="background-image: url('${element.imageUrl}');"></div>
    <div class="card-body">
      <p class="card-text">${element.title}</p>
      <p class="card-text">${element.description}</p>
      <p class="card-text">${element.technologiesUsed}</p>
      <p class="card-text">${element.url}</p>
      <p class="card-text">${element.githubUrl}</p>
     </div>
 </div>`;
  });
};

export default createProjectsCards;
