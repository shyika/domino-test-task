(function() {

	function rotateBtnHandler(e) {
		var el = e.target,
			direction = parseInt(el.getAttribute('data-direction'), 10);
		dominoModule.rotate(direction);
	}

	function loadApp() {
	var leftRotBtn, rightRotBtn, refreshBtn;

	leftRotBtn = document.getElementById('left-rotate-btn');
	rightRotBtn = document.getElementById('right-rotate-btn');
	refreshBtn = document.getElementById('refresh-btn');

	dominoModule.init('.domino', 'second', 'third');

	leftRotBtn.addEventListener('click', rotateBtnHandler, false);
	rightRotBtn.addEventListener('click', rotateBtnHandler, false);
	refreshBtn.addEventListener('click', function(e) {
		dominoModule.update();
	}, false);
}

	loadApp();

})();

