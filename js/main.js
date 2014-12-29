require(['tic-tac'], function (TicTac) {
	var ticTac = new TicTac('.field tbody', '.current__text');
	ticTac.init();
});