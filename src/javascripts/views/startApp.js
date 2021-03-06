import domBuilder from '../components/domBuilder';
import { navBar, createFooter } from '../components/navBar';
import createProjectsCards from '../components/projectCards';
import aboutMe from '../components/bio';
import techUsed from '../components/technology';

const startApp = () => {
  domBuilder();
  navBar();
  createFooter();
  aboutMe();
  createProjectsCards();
  techUsed();
};

export default startApp;
