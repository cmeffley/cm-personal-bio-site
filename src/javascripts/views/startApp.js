import domBuilder from '../components/domBuilder';
import { navBar, createFooter } from '../components/navBar';
import showProjectsCards from '../components/projectCards';
import aboutMe from '../components/bio';
import showTechUsed from '../components/technology';
import { getAllProjects, getTechUsed } from '../helpers/data/projectData';
import homeLanding from '../components/home';

const startApp = () => {
  domBuilder();
  navBar();
  homeLanding();
  createFooter();
  aboutMe();
  getAllProjects().then((response) => {
    if (response.length) {
      showProjectsCards(response);
    }
  });
  getTechUsed().then((response) => {
    if (response.length) {
      showTechUsed(response);
    }
  });
};

export default startApp;
