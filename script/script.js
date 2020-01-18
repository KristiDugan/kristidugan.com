document.querySelector('.js-scroll-into-intro').addEventListener('click', function() {
	document.querySelector('#intro').scrollIntoView({ behavior: 'smooth' });
});

const projectLinks = document.querySelectorAll('.js-scroll-into-projects');

projectLinks.forEach((projectLink) => {
	projectLink.addEventListener('click', function() {
		document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
	});
});

document.querySelector('.js-scroll-into-about').addEventListener('click', function() {
	document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.js-scroll-into-articles').addEventListener('click', function() {
	document.querySelector('#articles').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.js-scroll-into-contact').addEventListener('click', function() {
	document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
