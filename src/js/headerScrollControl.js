let header = document.querySelector('.header');

let compresser = function () {
	if (window.scrollY != 0) {
		header.classList.add('compressed');
	} else {
		header.classList.remove('compressed');
	}
};
console.log(window.scrollY);
window.addEventListener('scroll', compresser);
