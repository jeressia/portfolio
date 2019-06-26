import util from '../../helpers/util';

import portfolioData from '../../helpers/portfolioData';

import './portfolio.scss';


const portfolioBuilder = () => {
  portfolioData.getProjects().then((projects) => {
    let domString = '<h1 class="project-section-title">Portfolio</h1><div class="project-arrow">';
    projects.forEach((project) => {
      domString += `<div id="${project.id}" class="project">`;
      domString += `<img class="card-img-top" src=${project.screenshot} alt="${project.name}">`;
      domString += `<h3 class="project-title">${project.title}<h3>`;
      domString += `<h6 class="description">${project.description}</h6>`;
      domString += '<div class="project-links">';
      domString += `<a href=${project.githubUrl}><button class="btn btn-warning project-link">GitHub</button></a>`;
      domString += `<a href=${project.url}><button class="project-link btn btn-warning">Website</button></a>`;
      domString += '</div>';
      domString += '<hr>';
    });
    domString += '</div>';
    util.printToDom('projects', domString);
  })
    .catch(err => console.error('no projects', err));
};

export default { portfolioBuilder };
