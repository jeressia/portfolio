import util from '../../helpers/util';

import portfolioData from '../../helpers/portfolioData';


const portfolioBuilder = () => {
  portfolioData.getProjects().then((projects) => {
    let domString = '<h1 class="project-section-title" id="project-section-title">Projects</h1>';
    projects.forEach((project) => {
      domString += `<div id="${project.id}" class="project">`;
      domString += `<img class="card-img-top" src=${project.screenshot} alt="${project.name}">`;
      domString += `<h3>${project.title}<h3>`;
      domString += `<h6>${project.description}</h6>`;
      domString += '<div class="project-links">';
      domString += `<a href=${project.githubUrl}>GitHub</a>`;
      domString += `<a href="${project.url}">Website</a>`;
      domString += '</div>';
    });
    domString += '</div>';
    util.printToDom('projects', domString);
  })
    .catch(err => console.error('no projects', err));
};

export default { portfolioBuilder };
