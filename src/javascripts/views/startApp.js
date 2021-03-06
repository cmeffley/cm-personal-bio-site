import domBuilder from '../components/domBuilder';
import { navBar, createFooter } from '../components/navBar';
import createProjectsCards from '../helpers/data/projectData';

const startApp = () => {
  domBuilder();
  navBar();
  createFooter();
  createProjectsCards();
};

export default startApp;
