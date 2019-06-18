import util from '../../helpers/util';

import portfolioData from '../../helpers/data/projectData';

let projects = [];

const portfolioBuilder = (array) => {
  let domString = '';
  array.forEach((project) => {
    // console.error(projects);
    domString += `<div id="${project.id}" class="card project" style="width: 18rem;">`;
    domString += `<div class="card-header"><h2>${project.name}<h2></div>`;
    domString += `<img class="card-img-top" src=${project.imageURL} alt="${project.name}">`;
    domString += '<ul class="card-body">';
    domString += `<li class="list-group-item"><strong>Genre:</strong> ${project.genre}</li>`;
    domString += `<li class="list-group-item"><strong>Release Date:</strong> ${project.releaseDate}</li>`;
    domString += `<li class="list-group-item description"><strong>Description:</strong> ${project.description}</li>`;
    domString += `<li class="list-group-item locationText"><strong>${project.locations.length}</strong> Locations</li>`;
    domString += '</ul>';
    domString += '</div>';
  });
  util.printToDom('projects', domString);
};

const initializeProjects = () => {
  portfolioData.portfolio()
    .then((resp) => {
      const portfolioResults = Object.keys(resp.data.portfolio);
      projects = portfolioResults;
      console.error(projects);
      portfolioBuilder(projects);
    })
    .catch(err => console.error(err));
};
export default { portfolioBuilder, initializeProjects };
