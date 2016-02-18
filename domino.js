var dominoModule = (function() {
	var el, firstDiv, secondDiv, angle = 0,
		facets = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'],
		facetsCount = facets.length;

	function verifyFacets(facet1, facet2) {
		if (facets.indexOf(facet1) === -1 || facets.indexOf(facet2) === -1)
			return false;
		return true;
	}

	function generateContent(facet1, facet2) {
		var span, i, j;
		firstDiv = document.createElement('div'),
		// console.log(firstDiv.constructor.prototype);
		secondDiv = document.createElement('div');
		el.appendChild(firstDiv);
		el.appendChild(secondDiv);

		firstDiv.id = 'rect_1';
		secondDiv.id = 'rect_2';
		firstDiv.className = facet1;
		secondDiv.className = facet2;

		for (i = 7; i--;) {
			span = document.createElement('span');
			firstDiv.appendChild(span);
		}
		for (j = 7; j--;) {
			span = document.createElement('span');
			secondDiv.appendChild(span);
		}
	}

	function updateAngleByDirection(direction) {
		direction = parseInt(direction, 10);
		angle = parseInt(el.getAttribute("data-angle"), 10) || angle;
		angle += (direction === 1 ? 90: -90);
	}

	function updateFacets() {
		var randomFacet = Math.floor(Math.random() * facetsCount);
		firstDiv.className = facets[randomFacet];
		randomFacet = Math.floor(Math.random() * facetsCount);
		secondDiv.className = facets[randomFacet];
	}

	return {

		/**
     * Handler for initialize Domino mudule
     *  @public
     * @param {String} data. Module select Node Element By this selector.
     * @param {String} data. Additional. Showing widh facet reflect on first element.
     * @param {String} data. Additional. Showing widh facet reflect on second element.
     */
		init: function(selector, facet1, facet2) {
			el = document.querySelector(selector);
			if (!el) throw new SyntaxError('Could not select element.');
			if (!verifyFacets(facet1, facet2)) {
				facet1 = facets[0]; facet2 = facets[1];
			}
			generateContent(facet1, facet2);
		},

		/**
     * Rotate our widget by direction
     * @public
     * @param {Number} data. Hold direction
     */
		rotate: function(direction) {
			if (!el) return;
			updateAngleByDirection(direction);
			el.style.transform = 'rotate(' + angle + 'deg)';
			el.setAttribute('data-angle', angle);
		},

		/**
     * Update domino facets
     * @public
     */
		update: function() {
			if (!firstDiv && !secondDiv) return;
			updateFacets();
		}

	}
}());