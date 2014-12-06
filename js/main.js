var flag = Math.round(Math.random()),
    counter = 0,
    $field = $('.field'),
    cells = $field.find('td'),
    minimumVictoryCount = 5,
    matrix = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];

Array.prototype.allValuesSame = function() {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === -1) return false;
        if (this[i] !== this[0]) return false;
    }
    return true;
};

function showCurrentProgress() {
	$('.current__text').text(function(){
		return flag ? 'x' : 'o';
	});
}
showCurrentProgress();

function checkWinner() {
    function winnerReload() {
        alert('You are winner');
        location.reload(true);
    }
    var horizontal = function() {
        if (matrix[0].allValuesSame() || matrix[1].allValuesSame() || matrix[2].allValuesSame()) {
            winnerReload();
        }
    };

//    var vertical = function() {
//        var arr = [[], [], []];
//
//        arr[0][0] = matrix[0][0] === matrix[1][0];
//        arr[0][1] = matrix[1][0] === matrix[2][0];
//        arr[0][2] = matrix[0][0] === matrix[2][0];
//
//        arr[1][0] = matrix[0][1] === matrix[1][1];
//        arr[1][1] = matrix[1][1] === matrix[2][1];
//        arr[1][2] = matrix[0][1] === matrix[2][1];
//
//        arr[2][0] = matrix[0][2] === matrix[1][2];
//        arr[2][1] = matrix[1][2] === matrix[2][2];
//        arr[2][2] = matrix[0][2] === matrix[2][2];
//        if (arr[0].allValuesSame() || arr[1].allValuesSame() || arr[2].allValuesSame()) {
//            winnerReload();
//        }
//    };

    var diagonal = function() {};

    horizontal();
//    vertical();
//    diagonal();
}

cells.each(function(){

    $(this).on('click', function() {

        var $self = $(this),
            currentText = $self.text(),
            row = $self.parent().index(),
            cell = $self.index();

        if (currentText) return;

        flag ? when('x', 1) : when('o', 0);

        function when(text, num) {
            $self.text(text);
            matrix[row][cell] = num;
        }


        flag = !flag;
        counter++;

        $self.addClass('disabled');
        showCurrentProgress();

        if (counter >= minimumVictoryCount) {
            checkWinner();
        }

    });

});