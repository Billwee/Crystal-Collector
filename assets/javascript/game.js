var targetNum;
var score = 0;
var wins = 0;
var losses = 0;
var crystalArr = [red, green, blue, yellow];
var red;
var green;
var blue;
var yellow;

function target() {
  targetNum = Math.floor(Math.random() * 120) + 19;
}

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

function target() {
  targetNum = Math.floor(Math.random() * 101) + 19;
  $('.target').text(targetNum);
}

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

crystalGen();
target();
$('.score').text(score);
$('.wins').text(wins);
$('.loss').text(losses);
console.log(crystalArr);

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
