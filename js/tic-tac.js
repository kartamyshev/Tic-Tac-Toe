define(['utils'], function (utils) {

	var TitTac = function (holder, countHolder) {
		this._holder = utils.select(holder);
		this._countHolder = utils.select(countHolder);
		this._holderLines = Array.prototype.slice.call( this._holder.children );

		this._flag = Math.round(Math.random());
		this._counter = 0;
		this._minimumVictoryCount = 5;

		this._matrix = [
			[-1, -1, -1],
			[-1, -1, -1],
			[-1, -1, -1]
		];
	};

	TitTac.prototype = {
		init: function () {
			this._holder.addEventListener('click', this._onClick.bind(this), false);
			this._updateCurrentProgress();
		},

		_onClick: function (e) {
			var coords = this._getCoords(e);
			this._setValue(e.target, coords[0], coords[1])
		},

		_getCoords: function (e) {
			var currentTd = e.target;
			var currentTr = currentTd.parentElement;

			var trIndex = this._holderLines.indexOf( currentTr );
			var tdIndex = Array.prototype.slice.call( this._holderLines[trIndex].children ).indexOf( currentTd );

			return [ trIndex, tdIndex ];
		},

		_setValue: function (el, x, y) {
			// if we have value in this td
			if (this._matrix[x][y] !== -1)
				return

			this._matrix[x][y] = this._flag;
			el.innerHTML = this._flag ? 'x' : 'o';
			this._flag = !this._flag;

			this._updateCurrentProgress();
		},

		_updateCurrentProgress: function () {
			this._countHolder.innerHTML = this._flag ? 'x' : 'o';
		}
	}

	return TitTac;

});