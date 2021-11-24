//Add today's date to header

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


//Update row coloring if time is in the past
function timePast(){
    for(i=0; i<9; i++){

    var plannerRow = $("#row-"+i);
    var rowHour = 9 + i;
    var currentHour = moment().format("H");


        if(rowHour<currentHour){
            plannerRow.addClass("past");

        }
        else if (rowHour == currentHour){
        plannerRow.addClass("present");
         }
        else {
            plannerRow.addClass("future");
        }
    }
}

timePast();
