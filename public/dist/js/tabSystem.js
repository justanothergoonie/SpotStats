let trackButt = document.querySelector(`#topSongs`);
let artButt = document.querySelector(`#topArtist`);
let recButt = document.querySelector(`#recentPlays`);

let trackPage = document.querySelector(`#top-tracks`);
let artPage = document.querySelector(`#top-artists`);
let recPage = document.querySelector(`#recent-track`);

let preventButts = function (e) {
	e.preventDefault();
};
trackButt.addEventListener(`click`, function () {
	let active = document.querySelector(`.active`);
	active.setAttribute(`class`, `inactive`);
	trackPage.setAttribute(`class`, `active`);
	console.log(`welcome to your top tracks`);
});
artButt.addEventListener(`click`, function () {
	let active = document.querySelector(`.active`);
	active.setAttribute(`class`, `inactive`);
	artPage.setAttribute(`class`, `active`);
	console.log(`welcome to your top artist`);
});
recButt.addEventListener(`click`, function () {
	let active = document.querySelector(`.active`);
	active.setAttribute(`class`, `inactive`);
	recPage.setAttribute(`class`, `active`);
	console.log(`welcome to your recently played`);
});
