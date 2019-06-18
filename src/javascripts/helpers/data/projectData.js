import axios from 'axios';

const portfolio = () => axios.get('../db/projects.json');

export default { portfolio };
