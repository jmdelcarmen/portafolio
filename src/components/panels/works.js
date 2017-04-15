import $ from 'jquery';
import Card from '../card';
import Footer from '../footer';
import Projects from '../projects';
export default `
    <div id="works">
      <h1><i class="fa fa-desktop"></i><span>works</span></h1>
      <div class="content">
        <div class="row">
        ${createProjectCards(Projects)}
        </div>
      </div>
    </div>
`;
function createProjectCards(projects) {
  return projects.map(project => Card(project)).join('');
}
