document.querySelector('.js-scroll-into-intro').addEventListener('click', function() {
	document.querySelector('#intro').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.js-scroll-into-projects').addEventListener('click', function() {
	document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.js-scroll-into-about').addEventListener('click', function() {
	document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.js-scroll-into-contact').addEventListener('click', function() {
	document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
