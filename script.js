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

//this displays the current date at the top of the page
var today = dayjs();
$('#currentDay').text (today.format('[Today is] dddd MMMM D, YYYY'))



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

function readInfoFromSchedule() {
  var toDo = localStorage.getItem('toDo')
  if(toDo) {
    toDo = JSON.parse(toDo)
  } else {
    toDo = [];
  }
  return toDo;
} 
function saveToDoInStorage(toDo){
  localStorage.setItem('toDo', JSON.stringify(toDo));
}

saveToDoInStorage ();

function printtoDoInfo(){


//gets info from local storage
  var toDo = retrieveToDoFromStorage();

  //loops through each row on schedule and create a row
  for (var i =0; i < toDo.length; i+=1){
    var toDo = toDo[i];
    var toDoTime = dayjs(toDo.time)
    var time = daysjs().startOf('day');

    var rowEl = $('<tr>');

  }


  //!aqui estamos

  
//adds class to row by comparing project date to today's date
if (rightNow.isBefore('hour-9')){
  rowEl.addclass('past');
  } else if (rightNow.isSame(time)) {
    rowEl.addclass('present')
  } else if (rightNow.isAfter(time)) {
    rowEl.addclass('future')
  }

}

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

//these are the event listeners for the save buttons of every hour 

var saveBtnEl =$('#saveBtn')
var saveBtn2El =$('#saveBtn2')
var saveBtn3El =$('#saveBtn3')
var saveBtn4El =$('#saveBtn4')
var saveBtn5El =$('#saveBtn5')
var saveBtn6El =$('#saveBtn6')
var saveBtn7El =$('#saveBtn7')
var saveBtn8El =$('#saveBtn8')
var saveBtn9El =$('#saveBtn9')

var inputEl = $('#input')
var getInputEl = $('#getInput')
JSON.parse(localStorage.getItem('getInput')) ; [];

function add(){
  getInputEl.push(input.value);
  localStorage.setItem('items', JSON.stringify(getInput));
  addTask(input.value);
  input.value = '';
}

add()

saveBtnEl.on('click', function () {
  saveToDoInStorage()
});

saveBtn2El.on('click', function () {
  alert('hello')
});

saveBtn3El.on('click', function () {
  alert('hello')
});

saveBtn4El.on('click', function () {
  alert('hello')
});

saveBtn5El.on('click', function () {
  alert('hello')
});

saveBtn6El.on('click', function () {
  alert('hello')
});

saveBtn7El.on('click', function () {
  alert('hello')
});

saveBtn8El.on('click', function () {
  alert('hello')
});

saveBtn9El.on('click', function () {
  alert('hello')
});












  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?




//function hourRightNow (){;
//  if ((dayjs) !== presentTime) ;
 // $('hour-9').css({'.past': });

//}


//if (entryHour > (hourRightNow)) {
  //.addClass('row time-block past');
//} else if (entryHour.isSame(today)) {
  //rowEl.addClass('project-today');
//} else if (entryHour.is)




// if it is this time, make this x color. use dom traversal for this
//var hourPresent = dayjs.format('h:mm:ss a');
//hourPresent();

//if dayjs = (9 am)



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  


});
