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

function equalsOne() {}

crystalGen();
equalsOne();
console.log(crystalArr);

$('.red').click(function() {
  score += crystalArr[0];
  $('.score').text(score);
});
$('.green').click(function() {
  score += crystalArr[1];
  $('.score').text(score);
});
$('.blue').click(function() {
  score += crystalArr[2];
  $('.score').text(score);
});
$('.yellow').click(function() {
  score += crystalArr[3];
  $('.score').text(score);
});
