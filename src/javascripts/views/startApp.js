import domBuilder from '../components/domBuilder';
import { navBar, createFooter } from '../components/navBar';
import showProjectsCards from '../components/projectCards';
import aboutMe from '../components/bio';
import techUsed from '../components/technology';
import getAllProjects from '../helpers/data/projectData';
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
  techUsed();
};

export default startApp;
