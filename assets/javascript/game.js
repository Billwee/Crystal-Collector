var targetNum;
var score = 0;
var wins = 0;
var losses = 0;
var crystalArr = [red, green, blue, yellow];
var red;
var green;
var blue;
var yellow;

// Find the target number 19-120
function target() {
  targetNum = Math.floor(Math.random() * 102) + 19;
  $('.target').text(targetNum);
}

// Generates the random values for each crystal.
// I added a conditional to always inlude a 1 value for one
// of the crystals so the user can always win.
// I couldn't figure out a way to not get duplicates though
// that is.. not without using code I don't understand yet.
function crystalGen() {
  for (let i = 0; i < crystalArr.length; i++) {
    crystalArr[i] = Math.floor(Math.random() * 12) + 1;
  }
  if (
    crystalArr[0] != 1 &&
    crystalArr[1] != 1 &&
    crystalArr[2] != 1 &&
    crystalArr[3] != 1
  ) {
    crystalArr[Math.floor(Math.random() * 3) + 1] = 1;
  }
}

// Conditional for win/lose:
// True/false do the same thing basically. Displays
// a win or lose div in the center of the screen,
// resets the counters, ++ to win or lose, writes
// to the DOM, and reruns the functions to start
// a new round.
// also console.log() the array to make it easier
function winLose() {
  if (targetNum === score) {
    $('.winner').animate({ opacity: '1.0' });
    setTimeout(function() {
      $('.winner').animate({ opacity: '0' });
    }, 3000);
    wins += 1;
    $('.wins').text(wins);
    score = 0;
    $('.score').text(score);
    crystalGen();
    target();
    console.log(crystalArr);
  } else if (score > targetNum) {
    $('.loser').animate({ opacity: '1.0' });
    setTimeout(function() {
      $('.loser').animate({ opacity: '0' });
    }, 3000);
    losses += 1;
    $('.loss').text(losses);
    score = 0;
    $('.score').text(score);
    crystalGen();
    target();
    console.log(crystalArr);
  }
}

// First time game starts
crystalGen();
target();
$('.score').text(score);
$('.wins').text(wins);
$('.loss').text(losses);
console.log(crystalArr);

// Click events for the crystals
$('.red').click(function() {
  score += crystalArr[0];
  $('.score').text(score);
  winLose();
});
$('.green').click(function() {
  score += crystalArr[1];
  $('.score').text(score);
  winLose();
});
$('.blue').click(function() {
  score += crystalArr[2];
  $('.score').text(score);
  winLose();
});
$('.yellow').click(function() {
  score += crystalArr[3];
  $('.score').text(score);
  winLose();
});
