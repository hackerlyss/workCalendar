function renderClock() {
    var currentTime = moment().format("MMM Do, YYYY HH:mm:ss");
    $('#currentDay').text("Today's date and time: " + currentTime)
  }
  renderClock();
  setInterval(renderClock, 1000);
  
var now = moment();
// var timeHour = timeBlock.getHours()
function setCards() {
for (i=0; i<now.length; i++) {
    var newCard = document.getElementsByClassName('card-body');
    newCard.text(now[i]);
  
}
}
setCards();