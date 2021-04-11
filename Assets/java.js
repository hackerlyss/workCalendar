
  var act1 = document.getElementById('comment0');
  var act2 =  document.getElementById('comment1');
  var act3 = document.getElementById('comment2');
  var act4 =  document.getElementById('comment3');
  var act5 =  document.getElementById('comment4');
  var act6 =  document.getElementById('comment5');
  var act7 =  document.getElementById('comment6');
  var act8 =  document.getElementById('comment7');
  var act9 =  document.getElementById('comment8');

 
var past1 = document.getElementById('Expired1');
var past2 = document.getElementById('Expired2');
var past3 = document.getElementById('Expired3');
var danger1 = document.getElementById('Danger1');
var present1 = document.getElementById('Present1');
var present2 = document.getElementById('Present2');
var present3 = document.getElementById('Present3');
var present4 = document.getElementById('Present4');
var present5 = document.getElementById('Present5');

past1.textContent = moment().subtract(4,'hours').format("HH:00");
past2.textContent = moment().subtract(3,'hours').format('HH:00');
past3.textContent = moment().subtract(2,'hours').format("HH:00");
danger1.textContent = moment().subtract(1,'hours').format("HH:00");
present1.textContent = moment().format('HH:00');
present2.textContent = moment().add(1,'hours').format('HH:00');
present3.textContent = moment().add(2,'hours').format('HH:00');
present4.textContent = moment().add(3,'hours').format('HH:00');
present5.textContent = moment().add(4,'hours').format('HH:00');



// Setting live local time upon loading page
function renderClock() {
    var currentTime = moment().format("MMM Do, YYYY HH:mm:ss");
    $('#currentDay').text("Today's date and time: " + currentTime)
  }
  renderClock();
  setInterval(renderClock, 1000);
  
// saves activity from timeslot
function saveActivity() {
    var commentSave = {
      comment0: act1.value.trim()
    }
    localStorage.setItem('commentSave', JSON.stringify(commentSave));
    console.log(commentSave)
  
  
}

//renders activity from timeslot
function renderActivity() {
    var lastActivity = JSON.parse(localStorage.getItem('commentSave'));
    if (lastActivity !== null) {
      act1.innerHTML = lastActivity.comment0;
    } else {
      return;
    }
  
 
}

//event button
var buttonStore = document.querySelector('.save-button')
buttonStore.addEventListener('click', function (event) {
  event.preventDefault();
  saveActivity();
  renderActivity();

});

function init() {
  renderActivity();
}
init()