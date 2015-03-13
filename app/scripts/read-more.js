readMoreController = function() {
	var ctrl = this;
	this.allInfoContainers = document.getElementsByClassName('information-container');
	this.allArrows = document.getElementsByClassName('glyphicon-chevron-down');
	var buttons = document.getElementsByClassName('read-more');

	this.infoContainerHeight;
	this.infoContainerHeights = [];

	for (var i = 0; i < this.allInfoContainers.length; i++) {

		ctrl.infoContainerHeight = ctrl.allInfoContainers[i].offsetHeight.toString();
		ctrl.infoContainerHeights.push(ctrl.infoContainerHeight);
		ctrl.allInfoContainers[i].style.height = '0px';
	}

	for (var i = 0; i < buttons.length; i++) {
		(function() {
			var index = i;
			buttons[i].addEventListener('click', function(el, i) {
				ctrl.attachClickListener(el, index);
			});
		}())
	}
};

readMoreController.prototype.attachClickListener = function(el, index) {
	var ctrl = this;
	var infoContainer = document.getElementsByClassName('information-container')[index];
	var arrow = document.getElementsByClassName('glyphicon-chevron-down')[index];

	if (infoContainer.classList.contains('open')) {
		infoContainer.classList.remove('open');
		arrow.classList.remove('flip');
		arrow.classList.add('closed');
		infoContainer.style.height = '0px';
	} else {
		
		for (var i = 0; i < this.allInfoContainers.length; i++) {
			ctrl.allInfoContainers[i].classList.remove('open');
			ctrl.allInfoContainers[i].style.height = '0px';
		}

		for (var i = 0; i < this.allArrows.length; i++) {
			ctrl.allArrows[i].classList.remove('flip');
		}

		infoContainer.classList.add('open');
		infoContainer.style.height = this.infoContainerHeights[index] + 'px';
		arrow.classList.add('flip');
	}

};
