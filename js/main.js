var flag = Math.round(Math.random()),
    counter = 0,
    $field = $('.field'),
    cells = $field.find('td'),
    cellsCount = cells.length,
    rowLength = Math.sqrt(cellsCount),
    minimumVictoryCount = 5,
    matrix = [],
    $options = $('.field-size').find('option');


// pushing to a matrix array default -1 values
for (var i = 0; i < rowLength; i++) {
    matrix.push([]);
    for (var j = 0; j < rowLength; j++) {
        matrix[i].push(-1);
    }
}

function showCurrentProgress() {
	$('.current__text').text(function(){
		return flag ? 'x' : 'o';
	});
}

function checkWinner() {
    console.log(matrix);
}

showCurrentProgress();

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


// This one will disable option and redraw table according to selected option in select
function redrawTable(elem) {

    var setDisabledOption = function () {
        $options.removeAttr('disabled');
        $(elem).attr('disabled', true);
    }();

    var chosen = +$(elem).attr('value');

    if (chosen > rowLength) {
        for (var i = 0; i < chosen - rowLength; i++) {
            $field.append('<tr><td></td></tr>');
        }
    }



}

$options.on('click', function() {
    redrawTable(this);
});

