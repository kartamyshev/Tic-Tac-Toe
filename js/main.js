var flag = Math.round(Math.random()),
    counter = 0,
    $field = $('.field'),
    cells = $field.find('td'),
    cellsCount = cells.length,
    rowLength = Math.sqrt(cellsCount),
    minimumVictoryCount = 5,
    matrix = [];

var pushDefaultValuesToMatrix = function () {
    for (var i = 0; i < rowLength; i++) {
        matrix.push([]);
        for (var j = 0; j < rowLength; j++) {
            matrix[i].push(-1);
        }
    }
}();

function showCurrentProgress() {
	$('.current__text').text(function(){
		return flag ? 'x' : 'o';
	});
}
showCurrentProgress();

function checkWinner() {
    console.log(matrix);
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