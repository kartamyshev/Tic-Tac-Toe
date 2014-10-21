var flag = Math.round(Math.random()),
    counter = 0,
    cells = $('.field').find('td'),
    cellsCount = cells.length,
    rowLength = Math.sqrt(cellsCount),
    getMinimumVictoryCount = 5,
    matrix = [];



for (var i = 0; i < rowLength; i++) {
    matrix.push([]);
    for (var j = 0; j < rowLength; j++) {
        matrix[i].push(-1);
    }
}

function drawTable() {

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

    });

});


$('.field-size').on('change', function() {
    drawTable();
});