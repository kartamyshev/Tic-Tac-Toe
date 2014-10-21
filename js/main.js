var flag = true,
    counter = 0;

var cells = $('.field').find('td'),
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
        var $self = $(this);
        var currentText = $(this).text();
        var row = $(this).parent().index();
        var cell = $(this).index();
        if (currentText) return;


        if (flag) {
            whenX();
        } else {
            whenNil();
        }


        function whenX() {
            $self.text('x');
            matrix[row][cell] = 1;
        }
        function whenNil() {
            $self.text('o');
            matrix[row][cell] = 0;
        }


        flag = !flag;
        counter++;
        $(this).addClass('disabled');

    });

});


$('.field-size').on('change', function() {
    drawTable();
});