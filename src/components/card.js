import $ from 'jquery';
export default function (proj) {
  return `
    <div class="card-item">
      <div class="details-overlay hide-details">
        <i class="fa fa-times"></i>
        <h3 class="detail-header">${proj.title}</h3>
        <div class="detail-section">${proj.desc}</div>
        <div class="detail-footer">
          <ul>
            ${createTechDetail(proj.techs)}
          </ul>
        </div>
      </div>
      <div class="card-overlay">
        <i class="fa fa-angle-double-left slider slider-left"></i>
        <i class="fa fa-angle-double-right slider slider-right"></i>
        <div class="card-top">
          <h4>${proj.title}</h4>
          <p><span>by marco del carmen</span></p>
        </div>
        <div class="card-bottom">
          <div class="card-buttons">
            <a href="#"><i class="fa fa-angle-double-right"></i><strong>view details</strong></a>
          </div>
        </div>
      </div>
      <div class="img-slider">
        ${createImgSlider(proj.imgs)}
      </div>
    </div>
  `;
}
function createImgSlider(imgs) {
  return imgs.map(img => `<img src="${img}" alt="project png">`).join('');
}
function createTechDetail(techs) {
  return techs.map(({name, color}) => {
    return `
      <li style="background: ${color}">
        ${name}
      </li>
    `;
  }).join('');
}
