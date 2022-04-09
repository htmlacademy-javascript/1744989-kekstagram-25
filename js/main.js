import './util.js';
// import {createPictures} from './data.js';
// import {renderPictures} from './picture.js';
import {initUploadForm} from './form.js';
import {initSlider} from'./effect.js';
import './scale.js';
import './fetch.js';

// const PHOTOS_COUNT = 25;
// const pictures = Array.from({length: PHOTOS_COUNT}, createPictures);

// renderPictures(pictures);
window.onload = function () {
  initUploadForm();
  initSlider();
};

