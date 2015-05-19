
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");

var playButton1 = document.getElementById("playButton1");
var playButton2 = document.getElementById("playButton2");

var isPlaying = false;

playButton1.addEventListener('click', function(){
  if (isPlaying === true) {
    isPlaying = false;
    audio1.pause();
  }
  else {
    audio1.play();
    isPlaying = true;
    //something about icons changing here
  }
});

playButton2.addEventListener('click', function(){
  if (isPlaying === true) {
    isPlaying = false;
    audio2.pause();
  }
  else {
    audio2.play();
    isPlaying = true;
  }
});

playButton3.addEventListener('click', function(){
  if (isPlaying === true) {
    isPlaying = false;
    audio3.pause();
  }
  else {
    audio3.play();
    isPlaying = true;
  }
});

playButton4.addEventListener('click', function(){
  if (isPlaying === true) {
    isPlaying = false;
    audio4.pause();
  }
  else {
    audio4.play();
    isPlaying = true;
  }
});
