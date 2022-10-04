// setting current day at top of page
var todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(todayDate);

// getting currrent hour
var currentHour = moment().hour();
console.log(currentHour)

// the variable for the container that holds the rows
var container = $('.container')

// the array of the hours in the day
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// function to create the rows
function createRow() {

    for (var i = 0; i < hours.length; i++) {

        // the variables for the items that are created within each row
        var div = $('<div>');
        var p = $('<p>');
        var textArea = $('<textarea>');
        var btn = $('<button>');

        // adding classes and appending the elements within each row
        div.attr('id', hours[i])
        p.text(hours[i] + ':00')
        p.addClass('hour col-md-1')
        textArea.addClass('col-md-10 description')
        btn.append('<i>')
        div.append(p)
        div.append(textArea)
        btn.on('click', saveText)
        btn.addClass('saveBtn btn col-md-1')
        btn.children('i').addClass('fas fa-save');
        div.append(btn);

        $('.container').append(div);
    }

    // if statements to change the color of the rows depending on the current hour 
    if (hours[0] === 9 && currentHour < 9) {
        $('.container').children('#9').addClass('future');
    }
    if (hours[0] === 9 && currentHour === 9) {
        $('.container').children('#9').addClass('present');
    }
    if (hours[0] === 9 && currentHour > 9) {
        $('.container').children('#9').addClass('past');
    }

    if (hours[1] === 10 && currentHour < 10) {
        $('.container').children('#10').addClass('future');
    }
    if (hours[1] === 10 && currentHour === 10) {
        $('.container').children('#10').addClass('present');
    }
    if (hours[1] === 10 && currentHour > 10) {
        $('.container').children('#10').addClass('past');
    }

    if (hours[2] === 11 && currentHour < 11) {
        $('.container').children('#11').addClass('future');
    }
    if (hours[2] === 11 && currentHour === 11) {
        $('.container').children('#11').addClass('present');
    }
    if (hours[2] === 11 && currentHour > 11) {
        $('.container').children('#11').addClass('past');
    }

    if (hours[3] === 12 && currentHour < 12) {
        $('.container').children('#12').addClass('future');
    }
    if (hours[3] === 12 && currentHour === 12) {
        $('.container').children('#12').addClass('present');
    }
    if (hours[3] === 12 && currentHour > 12) {
        $('.container').children('#12').addClass('past');
    }

    if (hours[4] === 13 && currentHour < 13) {
        $('.container').children('#13').addClass('future');
    }
    if (hours[4] === 13 && currentHour === 13) {
        $('.container').children('#13').addClass('present');
    }
    if (hours[4] === 13 && currentHour > 13) {
        $('.container').children('#13').addClass('past');
    }

    if (hours[5] === 14 && currentHour < 14) {
        $('.container').children('#14').addClass('future');
    }
    if (hours[5] === 14 && currentHour === 14) {
        $('.container').children('#14').addClass('present');
    }
    if (hours[5] === 14 && currentHour > 14) {
        $('.container').children('#14').addClass('past');
    }

    if (hours[6] === 15 && currentHour < 15) {
        $('.container').children('#15').addClass('future');
    }
    if (hours[6] === 15 && currentHour === 15) {
        $('.container').children('#15').addClass('present');
    }
    if (hours[6] === 15 && currentHour > 15) {
        $('.container').children('#15').addClass('past');
    }

    if (hours[7] === 16 && currentHour < 16) {
        $('.container').children('#16').addClass('future');
    }
    if (hours[7] === 16 && currentHour === 16) {
        $('.container').children('#16').addClass('present');
    }
    if (hours[7] === 16 && currentHour > 16) {
        $('.container').children('#16').addClass('past');
    }

    if (hours[8] === 17 && currentHour < 17) {
        $('.container').children('#17').addClass('future');
    }
    if (hours[8] === 17 && currentHour === 17) {
        $('.container').children('#17').addClass('present');
    }
    if (hours[8] === 17 && currentHour > 17) {
        $('.container').children('#17').addClass('past');
    }

    // adding classes to the rows within the container
    $('.container').children().addClass(' row time-block ');

}

// function for saving the contents of the textarea to local storage
function saveText(e) {
    console.log($(this).siblings('textarea').val())

    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val()
    localStorage.setItem(key, value)
}

// function that creates the rows on load of the page
createRow();

// getting the value from local storage and displaying it on the page
$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#13 .description').val(localStorage.getItem('13'))
$('#14 .description').val(localStorage.getItem('14'))
$('#15 .description').val(localStorage.getItem('15'))
$('#16 .description').val(localStorage.getItem('16'))
$('#17 .description').val(localStorage.getItem('17'))