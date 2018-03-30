

var numb = 0;
var sign = '';
var numb_in_memory = 0;


$('#display').text(numb);
$('#zero').click(function () {
        if (numb == 0) {
                numb = 0;
        } else {
                numb = numb * 10;
        }
        $('#display').text(numb.toString());
});


$('#one').click(function () {
        if (numb == 0) {
                numb = 1;
        } else {
                numb = numb * 10 + 1;

        }
        if (numb_in_memory == 0) {
                $('#display').text(numb.toString());

        } else {
                $('#display').text(numb_in_memory.toString() + sign + numb.toString());
        }
});

$('#two').click(function () {
        if (numb == 0) {
                numb = 2;
        } else {
                numb = numb * 10 + 2;

        }
        if (numb_in_memory == 0) {
                $('#display').text(numb.toString());

        } else {
                $('#display').text(numb_in_memory.toString() + sign + numb.toString());
        }
});
$('#three').click(function () {
        if (numb == 0) {
                numb = 3;
        } else {
                numb = numb * 10 + 3;

        }
        if (numb_in_memory == 0) {
                $('#display').text(numb.toString());

        } else {
                $('#display').text(numb_in_memory.toString() + sign + numb.toString());
        }
});

$('    #four     ').click(function () {
        if (numb == 0) {
                numb = 4;
        } else {
                numb = numb * 10 + 4;

        }
        if (numb_in_memory == 0) {
                $('#display').text(numb.toString());

        } else {
                $('#display').text(numb_in_memory.toString() + sign + numb.toString());
        }
});

$('#five').click(function () {
        if (numb == 0) {
                numb = 5;
        } else {
                numb = numb * 10 + 5;

        }
        if (numb_in_memory == 0) {
                $('#display').text(numb.toString());

        } else {
                $('#display').text(numb_in_memory.toString() + sign + numb.toString());
        }
});

$('#six').click(function () {
        if (numb == 0) {
                numb = 6;
        } else {
                numb = numb * 10 + 6;

        }
        if (numb_in_memory == 0) {
                $('#display').text(numb.toString());

        } else {
                $('#display').text(numb_in_memory.toString() + sign + numb.toString());
        }
});

$('#seven').click(function () {
        if (numb == 0) {
                numb = 7;
        } else {
                numb = numb * 10 + 7;

        }
        if (numb_in_memory == 0) {
                $('#display').text(numb.toString());

        } else {
                $('#display').text(numb_in_memory.toString() + sign + numb.toString());
        }
});

$('#eight').click(function () {
        if (numb == 0) {
                numb = 8;
        } else {
                numb = numb * 10 + 8;

        }
        if (numb_in_memory == 0) {
                $('#display').text(numb.toString());

        } else {
                $('#display').text(numb_in_memory.toString() + sign + numb.toString());
        }
});

$('#nine').click(function () {
        if (numb == 0) {
                numb = 9;
        } else {

                numb = numb * 10 + 9;

        }
        if (numb_in_memory == 0) {
                $('#display').text(numb.toString());

        }
        else {
                $('#display').text(numb_in_memory.toString() + sign + numb.toString());
        }
});
$('#plus').click(function () {



        if (sign == '+') {
                numb_in_memory = numb_in_memory + numb;
        }

        else if (sign == '-') {
                numb_in_memory = numb_in_memory - numb;

        }
        else if (sign == '/') {
                numb_in_memory = numb_in_memory / numb;
        }

        else if (sign == '*') {
                numb_in_memory = numb_in_memory * numb;
        }
        else {
                numb_in_memory = numb;
        }
        sign = '+';
        numb = 0;
        $('#display').text(numb_in_memory.toString() + sign);
});

$('#minus').click(function () {
        if (sign == '/') {
                numb_in_memory = numb_in_memory / numb;
        }
        else if (sign == '*') {
                numb_in_memory = numb_in_memory * numb;
        }
        else if (sign == '+') {
                numb_in_memory = numb_in_memory + numb;
        }

        else if (sign == '-') {
                numb_in_memory = numb_in_memory - numb;

        } else {
                numb_in_memory = numb;

        }

        sign = '-';
        numb = 0;
        $('#display').text(numb_in_memory.toString() + sign);
});

$('#multiple').click(function () {
        if (sign == '/') {
                numb_in_memory = numb_in_memory / numb;
        }

        else if (sign == '*') {
                numb_in_memory = numb_in_memory * numb;
        }
        else if (sign == '+') {
                numb_in_memory = numb_in_memory + numb;
        }

        else if (sign == '-') {
                numb_in_memory = numb_in_memory - numb;

        } else {
                numb_in_memory = numb;

        }

        sign = '*';
        numb = 0;
        $('#display').text(numb_in_memory.toString() + sign);
});
$('#devide').click(function () {
        if (sign == '/') {
                numb_in_memory = numb_in_memory / numb;

        }
        else if (sign == '*') {
                numb_in_memory = numb_in_memory * numb;
        }
        else if (sign == '+') {
                numb_in_memory = numb_in_memory + numb;
        }

        else if (sign == '-') {
                numb_in_memory = numb_in_memory - numb;

        } else {
                numb_in_memory = numb;

        }

        sign = '/';
        numb = 0;
        $('#display').text(numb_in_memory.toString() + sign);
});
$('#equals').click(function () {
        if (sign == '/') {
                if (numb == 0) {
                        $('#display').text('I love Unicorns');
                        
                        return;
                } else {
                numb_in_memory = numb_in_memory / numb;
                }
        }
        else if (sign == '*') {
                numb_in_memory = numb_in_memory * numb;
                
        }
        else if (sign == '+') {
                numb_in_memory = numb_in_memory + numb;
               
        }

        else if (sign == '-') {
                numb_in_memory = numb_in_memory - numb;
               

        } else {
                numb_in_memory = numb;

        }
        numb = 0;
        $('#display').text(numb_in_memory.toString());
});
$('#DEL').click(function () {
        numb_in_memory = 0;
        numb = 0;
        var del = 0;
        $('#display').text(del);

});




