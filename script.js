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


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

var presentTime = dayjs().format('H');
presentTime ()



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

//these are the event listeners for the save buttons of every hour 

var hour9El = $('#hour-9');
var hour10El = $('#hour-10');
var hour11El = $('#hour-11');
var hour12El = $('#hour-12');
var hour13El = $('#hour-13');
var hour14El = $('#hour-14');
var hour15El = $('#hour-15');
var hour16El = $('#hour-16');
var hour17El = $('#hour-17');


hour9El.on('click', function () {
  
});

hour10El.on('click', function () {
  alert('Hello')
});

hour11El.on('click', function () {
  alert('Hello')
});

hour12El.on('click', function () {
  alert('Hello')
});

hour13El.on('click', function () {
  alert('Hello')
});

hour14El.on('click', function () {
  alert('Hello')
});

hour15El.on('click', function () {
  alert('Hello')
});

hour16El.on('click', function () {
  alert('Hello')
});

hour17El.on('click', function () {
  alert('Hello')
});






  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

function hourRightNow (){;
  if ((dayjs) !== presentTime) ;
  $('hour-9').css({'color: red'});

}




// if it is this time, make this x color. use dom traversal for this
var hourPresent = dayjs.format('h:mm:ss a');
hourPresent();

if dayjs = (9 am)



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  // TODO: Add code to display the current date in the header of the page.
});

var today = dayjs();
$('#currentDay').text (today.format('[Today is] dddd MMMM D, YYYY'))


