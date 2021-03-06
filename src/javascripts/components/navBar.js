const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Chris Meffley</a>
  <button 
    class="navbar-toggler" 
    type="button" 
    data-toggle="collapse" 
    data-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#bio">Bio <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#projects">Projects</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#tech">Technologies</a>
      </li>
    </ul>
  </div>
</nav>`;
};

const createFooter = () => {
  document.querySelector('#footer').innerHTML = `<footer>
    <ul id="dom-footer" class="d-flex flex-row justify-content-evenly">
      <li>&#169 Chris Meffley 2021</li>
      <li><a href="https://github.com/cmeffley">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/cmeffley/">LinkedIn</a></li>
    </ul>
  </footer>`;
};

export { navBar, createFooter };
