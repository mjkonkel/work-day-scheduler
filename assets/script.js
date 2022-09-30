var todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(todayDate);
console.log(todayDate)
var currentHour = moment().hour();
console.log(currentHour)


var hours = [9,10,11,12,13,14,15,16,17]

function createRow() {

    for (var i = 0; i < hours.length; i++) {
        $('.container').append($('<div><p>'+hours[i]+':00</p><textarea></textarea><button><i></i></button></div>'));
        console.log(hours[i]);
    }
    $('.container').children('div').children('p').addClass('hour');
    $('.container').children().addClass('row');
    $('.container').children('div').children('textarea');
    $('.container').children('div').children('button').addClass('saveBtn');
    $('.container').children('div').children('button').children('i').addClass('fas fa-save');

    if (currentHour === hours[i]){
    $('.container').children('div').children('textarea').addClass('present');

    }
}


window.onload = createRow();