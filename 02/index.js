const menuButtons = document.querySelectorAll('.menu__button');

menuButtons.forEach(button => {
	button.addEventListener('click', () => {
		menuButtons.forEach(button => {
			button.style.background = '#171717';
			button.style.color = '#ffffff';
		});
		button.style.background = '#ffffff';
		button.style.color = '#171717';
	});
});
