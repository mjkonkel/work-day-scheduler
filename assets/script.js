// setting current day at top of page
var todayDate = moment().format('dddd, MMMM Do');
$('#currentDay').text(todayDate);
// console.log(todayDate)

// getting currrent hour
var currentHour = moment().hour();
// console.log(currentHour)

var container = $('.container')

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

// function to create the rows
function createRow() {
    console.log(typeof currentHour)

    for (var i = 0; i < hours.length; i++) {
        // console.log(i);
        console.log(typeof hours[i]);


        var div = $('<div>');
        var p = $('<p>');
        var textArea = $('<textarea>');
        var btn = $('<button>');
        
        div.attr('id', hours[i])
        p.text(hours[i] + ':00')
        p.addClass('hour col-md-1')
        textArea.addClass('description col-md-10')
        btn.append('<i>')
        div.append(p)
        div.append(textArea)
        btn.on('click', saveText)
        btn.addClass('saveBtn btn col-md-1')
        btn.children('i').addClass('fas fa-save');
        var colorClass;

        // if statements to change the color with the current hour
        if (hours[i] < currentHour) {
            colorClass = "past"

        }else if (hours[i] === currentHour) {
            colorClass = "present"

        }else{
            colorClass = 'future'
        }


        div.append(btn)

        // $('<div><p>'+hours[i]+':00</p><textarea class="'+colorClass+'"></textarea><button><i></i></button></div>')

        $('.container').append(div);
    }
   
    // // adding classes to the items within the rows
    $('.container').children().addClass('row time-block ' + colorClass);

}

function saveText(e) {
    console.log($(this).siblings('textarea').val())

    var key = $(this).parent().attr('id');
    var value = $(this).siblings('textarea').val()
    localStorage.setItem(key, value)
}



createRow();
