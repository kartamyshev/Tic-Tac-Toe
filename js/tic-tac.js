define(['utils'], function (utils) {

	var TitTac = function (holder, countHolder) {
		this._holder = utils.select(holder);                                        // tbody
		this._countHolder = utils.select(countHolder);                              // .current__text
		this._holderLines = Array.prototype.slice.call( this._holder.children );    // tr

		this._flag = Math.round(Math.random());
		this._counter = 0;
		this._minimumVictoryCount = 5;

		this._matrix = [
			[-1, -1, -1],
			[-1, -1, -1],
			[-1, -1, -1]
		];
		this._defaultMatrix = JSON.parse(JSON.stringify(this._matrix));
	};

	TitTac.prototype = {
		init: function initFn () {
			this._holder.addEventListener('click', this._onClick.bind(this), false);
			this._updateCurrentProgress();

			initFn = function () {
				this._updateCurrentProgress();
			};
		},

		restart: function () {
			this._clear();
			this.init();
		},

		_clear: function () {
			this._matrix = JSON.parse(JSON.stringify(this._defaultMatrix));
			this._counter = 0;

			var allTd = Array.prototype.slice.call( utils.selectAll('td', this._holder) );
			allTd.forEach(function (el) { el.innerHTML = ''; });
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
				return;

			this._matrix[x][y] = +this._flag;
			el.innerHTML = this._flag ? 'x' : 'o';
			this._flag = !this._flag;
			this._counter++;

			this._updateCurrentProgress();
			this._checkWinner();
		},

		_updateCurrentProgress: function () {
			this._countHolder.innerHTML = this._flag ? 'x' : 'o';
		},

		_checkWinner: function () {
			if (this._counter < this._minimumVictoryCount)
				return;

			if (this._counter == 9) {
				alert('НИЧЬЯ');
				this.restart();
				return;
			}

			if (this._checkDiagonals() || this._checkLines()) {
				alert('The winner is ' + (this._flag ? 'O' : 'X'));
				this.restart();
				return;
			}
		},

		_checkDiagonals: function () {
			var diagonal1 = this._valuesEqual(this._matrix[0][0], this._matrix[1][1], this._matrix[2][2]);
			var diagonal2 = this._valuesEqual(this._matrix[2][0], this._matrix[1][1], this._matrix[0][2]);

			if (diagonal1 || diagonal2)
				return true;
			return false;
		},

		_checkLines: function () {
			for (var i = 0; i < this._matrix.length; i++) {
				var vert  = this._valuesEqual(this._matrix[i][0], this._matrix[i][1], this._matrix[i][2]);
				var horiz = this._valuesEqual(this._matrix[0][i], this._matrix[1][i], this._matrix[2][i]);
				if (vert || horiz)
					return true;
			}
			return false;
		},

		_valuesEqual: function () {
			var args = Array.prototype.slice.call( arguments );
			if (args[0] === -1) return false;
			for (var i = 0; i < args.length; i++) {
				if (args[i] !== args[0]) return false;
				if (args[i] === -1) return false;
			}
			return true;
		}
	};

	return TitTac;
});