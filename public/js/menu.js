const toggleB = document.getElementsByClassName('toggle-button')[0];
const links = document.getElementsByClassName('links')[0];
const navbar = document.getElementsByClassName('navbar')[0];

toggleB.addEventListener('click', () => 
{
	links.classList.toggle('active');
	navbar.classList.toggle('active');
	
});


  