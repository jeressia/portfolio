import util from '../../helpers/util';

import portfolioData from '../../helpers/portfolioData';


const portfolioBuilder = () => {
  portfolioData.getProjects().then((projects) => {
    let domString = '';
    projects.forEach((project) => {
      domString += `<div id="${project.id}" class="card project" style="width: 18rem;">`;
      domString += `<div class="card-header"><h2>${project.title}<h2></div>`;
      domString += `<img class="card-img-top" src=${project.imageURL} alt="${project.name}">`;
      domString += '<ul class="card-body">';
      domString += `<li class="list-group-item"><strong>Genre:</strong> ${project.genre}</li>`;
      domString += `<li class="list-group-item"><strong>Release Date:</strong> ${project.releaseDate}</li>`;
      domString += `<li class="list-group-item description"><strong>Description:</strong> ${project.description}</li>`;
      domString += '</ul>';
    });
    domString += '</div>';
    util.printToDom('projects', domString);
  })
    .catch(err => console.error('no projects', err));
};

export default { portfolioBuilder };
