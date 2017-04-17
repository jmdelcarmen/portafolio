//jQuery and all it's goodness
import $ from 'jquery';
//Components
import Sidebar from './components/sidebar';
import TopNav from './components/top-nav';
import PanelWrapper from './components/panel-wrapper';
//Panels
import Panels from './components/panels';
const app = $('#app');
const components = [TopNav, Sidebar, PanelWrapper];
// Injections don't hurt the DOM.
injectComponents(components, app);
function injectComponents(components, app) {
  components.forEach(comp => app.append(comp));
}
const panelTriggers = $('.tags a');
// Panels for the SPA experience
bindPanelTriggers(PanelWrapper, Panels, panelTriggers);
function bindPanelTriggers(container, panels, triggers) {
  triggers.each(function () {
    $(this).click(e => {
      localStorage.setItem('page', $(this).data('page'));
      const currentPage = localStorage.getItem('page');
      e.preventDefault();
      $(this).addClass('active').parent().siblings()
      .find('a').removeClass('active');
      displayFeaturedPanel(container, detailsOverlayController, sliderController)(
        getPanel(panels, currentPage)
      );
    });
  });
}
//Gets page from localstorage to prevent going to default page
displayFeaturedPanel(PanelWrapper, detailsOverlayController, sliderController)(getPanel(Panels, localStorage.getItem('page')));
panelTriggers.each(function () {
  const currentPage = localStorage.getItem('page') || 'works';
  if($(this).data('page') === currentPage) {
    $(this).addClass('active').parent().siblings()
      .find('a').removeClass('active');
  }
});
function getPanel(panels, sel) {
  return panels[sel];
}
function displayFeaturedPanel(container, ...bindControllers) {
  container.children().first().removeClass('view').remove();
  return panel => {
    container.prepend(panel); //prepend to maintain the footer
    container.hide(0, function () {
      $(this).show().children().first().addClass('view');
    });
    bindControllers.forEach(cont => cont());
  };
}
// Burgers are good for small widths
onBurger('.burger')('#sidebar');
function onBurger(sel) {
  return sidebar => {
    $(sel).click(function () {
      $(this).hasClass('active')
      ? $(sidebar).css('transform', 'translateX(-350px)')
      : $(sidebar).css('transform', 'translateX(0px)');
      $(sel)
      .toggleClass('active')
      .toggleClass('fa-bars')
      .toggleClass('fa-times');
      shiftView('#panel-wrapper', $(sel).hasClass('active'));
    });
  };
}
function shiftView(sel, active) {
  active
  ? $(sel).css('transform', 'translateX(350px)')
  : $(sel).css('transform', 'translateX(0px)');
}
// View Project Details
detailsOverlayController();
function detailsOverlayController() {
  return bindTriggersToOverlay('.card-buttons a',
   '.details-overlay .fa-times',
   '.details-overlay'
  );
}
function bindTriggersToOverlay(showSel, hideSel, view) {
  $(`${showSel}, ${hideSel}`).click(function (e) {
    e.preventDefault();
    const $detailsOverlay = $(this)
    .parents('.card-item')
    .find(view);
    $detailsOverlay.hasClass('show-details')
    ? $detailsOverlay.removeClass('show-details').addClass('hide-details')
    : $detailsOverlay.addClass('show-details').removeClass('hide-details');
  });
}
// Img Slider
sliderController();
function sliderController() {
  return bindDirections(
    ['.slider-left', '.slider-right'],
    '.card-item',
    '.img-slider',
    slideImgPanel
  );
}
function bindDirections(directions, card, container, handler) {
  directions.forEach(direction => {
    handler(card, container, direction);
  });
}
function slideImgPanel(card, container, direction) {
  $(direction).click(function () {
    const $view = $(this).parents(card).find(container)
      .children();
    /left/.test(direction)
    ? $view.parents(container).prepend($view.last().remove())
    : $view.parents(container).append($view.first().remove());
    $view.parents(container).hide(0, function () {
      $(this).fadeIn();
    });
  });
}
