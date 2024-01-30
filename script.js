//these are important DOM elements
var hour9El = $('#hour-9');
var hour10El = $('#hour-10');
var hour11El = $('#hour-11');
var hour12El = $('#hour-12');
var hour13El = $('#hour-13');
var hour14El = $('#hour-14');
var hour15El = $('#hour-15');
var hour16El = $('#hour-16');
var hour17El = $('#hour-17');

var currentDayEl = $('#currentDay')

var rightNow = dayjs().format('hh:mm:ss a');

var toDoEl = $('#savetoDo')

//this displays the current date at the top of the page
var today = dayjs();
$('#currentDay').text (today.format('[Today is] dddd MMMM D, YYYY'))

  
//adds class by comparing current hour to hour on schedule, 
if (rightNow.isBefore('hour-9')){
  rowEl.addclass('past');
  } else if (rightNow.isSame(time)) {
    rowEl.addclass('present')
  } else if (rightNow.isAfter(time)) {
    rowEl.addclass('future')
  }


//these are the event listeners for the save buttons of every hour 
var saveBtnEl = $('#saveBtn')
var saveBtn2El = $('#saveBtn2')
var saveBtn3El = $('#saveBtn3')
var saveBtn4El = $('#saveBtn4')
var saveBtn5El = $('#saveBtn5')
var saveBtn6El = $('#saveBtn6')
var saveBtn7El = $('#saveBtn7')
var saveBtn8El = $('#saveBtn8')
var saveBtn9El = $('#saveBtn9')

saveBtnEl.on('click', function () {
  saveToDoInStorage()
});

saveBtn2El.on('click', function () {
  
});

saveBtn3El.on('click', function () {
  saveToDoInStorage();
});

saveBtn4El.on('click', function () {
 
});

saveBtn5El.on('click', function () {
  
});

saveBtn6El.on('click', function () {
  
});

saveBtn7El.on('click', function () {
  
});

saveBtn8El.on('click', function () {

});

saveBtn9El.on('click', function () {
  
});


  // TODO: Add code to get any user input that was saved in localStorage and set

  function getToDo(){
    localStorage.getItem('savetoDo', JSON.parse(toDoEl))
  }

//this code was made using the code from class as reference