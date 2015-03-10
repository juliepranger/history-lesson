navController = function() {
	var ctrl = this;

	this.navIcon = document.getElementsByClassName('nav-icon')[0];

	this.navIcon.addEventListener('click', function() {
		ctrl.toggleNav();
	});

};

navController.prototype.toggleNav = function() {
	this.navContainer = document.getElementsByClassName('navigation-container')[0];
	this.navContainer.classList.toggle('open');
};