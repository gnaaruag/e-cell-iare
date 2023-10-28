const toggleB = document.getElementsByClassName('toggle-button')[0];
const links = document.getElementsByClassName('links')[0];
const navbar = document.getElementsByClassName('navbar')[0];
const bar1 = document.getElementById('bar1'); 
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');


toggleB.addEventListener('click', () => 
{
	links.classList.toggle('active');
	navbar.classList.toggle('active');
	// bar1.classList.toggle('active1');
	// bar2.classList.toggle('active2');
	// bar3.classList.toggle('active3');
	if (bar1.classList.contains('active1')) {
		bar1.classList.toggle('inactive1');
	}
	else {
		bar1.classList.toggle('active1');
	}

	if (bar2.classList.contains('active2')) {
		bar2.classList.toggle('inactive2');
	}
	else {
		bar2.classList.toggle('active2');
	}

	if (bar3.classList.contains('active3')) {
		bar3.classList.toggle('inactive3');
	}
	else {
		bar3.classList.toggle('active3');
	}

});

