const smoothScrollSections = ['intro', 'projects', 'about', 'articles', 'contact'];

function createSmoothScrollers(arr) {
	arr.forEach(section => {
		const sectionLinks = document.querySelectorAll(`.js-scroll-into-${section}`);
		sectionLinks.forEach(sectionLink => {
			sectionLink.addEventListener('click', function() {
				document.querySelector(`#${section}`).scrollIntoView({ behavior: 'smooth' });
			});
		})
	});
}

createSmoothScrollers(smoothScrollSections);
