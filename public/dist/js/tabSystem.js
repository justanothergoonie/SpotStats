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
	let activeTab = document.querySelector(`.activeTab`)
	activeTab.classList.remove(`activeTab`)
	active.setAttribute(`class`, `inactive`);
	trackPage.setAttribute(`class`, `active`);
	console.log(`welcome to your top tracks`);
	trackButt.classList.add(`activeTab`)
});
artButt.addEventListener(`click`, function () {
	let active = document.querySelector(`.active`);
	let activeTab = document.querySelector(`.activeTab`)
	activeTab.classList.remove(`activeTab`)
	active.setAttribute(`class`, `inactive`);
	artPage.setAttribute(`class`, `active`);
	console.log(`welcome to your top artist`);
	artButt.classList.add("activeTab")
});
recButt.addEventListener(`click`, function () {
	let active = document.querySelector(`.active`);
	let activeTab = document.querySelector(`.activeTab`)
	activeTab.classList.remove(`activeTab`)
	active.setAttribute(`class`, `inactive`);
	recPage.setAttribute(`class`, `active`);
	console.log(`welcome to your recently played`);
	recButt.classList.add(`activeTab`)
});
