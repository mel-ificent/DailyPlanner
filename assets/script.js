//variables
var btnEl = $(".btn");

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

//Update page with saved planner items
function getPlannerItems(){
    for (i=0;i<9;i++){
        var item = "text" + i;
        var itemLS = JSON.parse(localStorage.getItem(item));
        var plannerRow = $("#row-"+i);
        if(itemLS !== null){
            $("#"+item).val(itemLS);

        }
    }

}

//Save planner Items
function savePlannerItem(){

    var btnID = $(this).attr('id');
    var id = btnID.charAt(3);
    var textID = "text"+id;
    var plannerText = $("#"+textID).val();
    localStorage.setItem(textID, JSON.stringify(plannerText));


}



getPlannerItems();
timePast();

btnEl.on('click',savePlannerItem);
