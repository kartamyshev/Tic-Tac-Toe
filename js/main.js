var flag = Math.round(Math.random()),
    counter = 0,
    cells = $('.field').find('td'),
    cellsCount = cells.length,
    rowLength = Math.sqrt(cellsCount),
    minimumVictoryCount = 5,
    matrix = [];


// pushing to a matrix array default -1 values
for (var i = 0; i < rowLength; i++) {
    matrix.push([]);
    for (var j = 0; j < rowLength; j++) {
        matrix[i].push(-1);
    }
}

// This one will redraw table according to selected option in select
function redrawTable(elem) {
    var rows = {
        now: rowLength,
        willBe: elem.val(),
        diff: function() {
            return this.willBe - this.now;
        }
    };
    console.log(rows.diff());
    if (rows.diff() === 0) return;
    else if (rows.diff() > 0) {
        // add number of rows
    } else {
        // remove number of rows
    }
}



function showCurrentProgress() {
	$('.current strong').text(function(){
		return flag ? 'x' : 'o';
	});
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
    });

});


$('.field-size').on('change', function() {
    redrawTable($(this));
});