"use strict";

var header = document.querySelector('.header');

var compresser = function compresser() {
  if (window.scrollY != 0) {
    header.classList.add('compressed');
  } else {
    header.classList.remove('compressed');
  }
};

console.log(window.scrollY);
window.addEventListener('scroll', compresser);
//# sourceMappingURL=headerScrollControl.js.map
