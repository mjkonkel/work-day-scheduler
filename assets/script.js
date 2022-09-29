var todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(todayDate);
console.log(todayDate)

var hours = ['9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00']


function createRow() {
    

    for (var i = 0; i < hours.length; i++) {
        $('.container').append($('<div><p></p><textarea></textarea><button></button></div>'));
        $('.container').children().addClass('row');
        $('.container').children('div').children('p').addClass('hour').text(hours[i]);
        $('.container').children('div').children('textarea');
        $('.container').children('div').children('button').addClass('saveBtn');
    }


}


window.onload = createRow();