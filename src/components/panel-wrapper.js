import $ from 'jquery';
import Card from './card';
import Footer from './footer';
import Projects from './projects';
import works from './panels/works';

export default $(`
  <div id="panel-wrapper" class="container">
  ${works}
  ${Footer}
  </div>`);
function createProjectCards(projects) {
  return projects.map(project => Card(project)).join('');
}
