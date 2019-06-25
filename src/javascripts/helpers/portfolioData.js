import axios from 'axios';

import apiKeys from './apiKeys.json';


const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/projects.json`)
    .then((results) => {
      const projectResults = results.data || {};
      const projects = [];
      Object.keys(projectResults).forEach((project) => {
        projectResults[project].id = project;
        projects.push(projectResults[project]);
      });
      resolve(projects);
    })
    .catch(err => reject(err));
});

export default { getProjects };
