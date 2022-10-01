// setting current day at top of page
var todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(todayDate);
console.log(todayDate)
// setting and logging currrent hour
var currentHour = moment().hour();
console.log(currentHour)

var hours = [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

// function to create the rows
function createRow() {
    

    for (var i = 0; i < hours.length; i++) {
        $('.container').append($('<div><p>'+hours[i]+':00</p><textarea></textarea><button><i></i></button></div>'));

        
    }
    // adding classes to the items within the rows
    $('.container').children().addClass('row');
    $('.container').children('div').children('p').addClass('hour');
    // $('.container').children('div').children('textarea').addClass('past');
    $('.container').children('div').children('button').addClass('saveBtn');
    $('.container').children('div').children('button').children('i').addClass('fas fa-save');

    
    if (currentHour === 22 && i === 22) {
        $("textarea").addClass('past');

    }
    
}




window.onload = createRow();
