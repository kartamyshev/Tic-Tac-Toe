define(function() {
	return {
		select: function(selector, el) {
			el = el || document;
			return el.querySelector(selector);
		},
		selectAll: function (selector, el) {
			el = el || document;
			return el.querySelectorAll(selector);
		},
		allValuesSame: function (arr) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === -1) return false;
				if (arr[i] !== arr[0]) return false;
			}
			return true;
		}
	};
});