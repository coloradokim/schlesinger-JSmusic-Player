
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");

// var playButton1 = document.getElementById("playButton1");
// var playButton2 = document.getElementById("playButton2");

var isPlaying = false;

var nowPlaying = document.getElementById('header-text');




playButton1.addEventListener('click', function(){
  if (isPlaying === true) {
    isPlaying = false;
    audio1.pause();
    this.classList.remove("fa-stop");
    this.classList.add("fa-play");
    nowPlaying.innerHTML = 'Select a song!';

  }

  else {
    audio1.play();
    isPlaying = true;
    this.classList.remove("fa-play");
    this.classList.add("fa-stop");
    nowPlaying.innerHTML = 'Now Playing: Favorite Food';
  }
});

playButton2.addEventListener('click', function(){
  if (isPlaying === true) {
    isPlaying = false;
    audio2.pause();
    this.classList.remove("fa-stop");
    this.classList.add("fa-play");
    nowPlaying.innerHTML = 'Select a song!';

  }
  else {
    audio2.play();
    isPlaying = true;
    this.classList.remove("fa-play");
    this.classList.add("fa-stop");
    nowPlaying.innerHTML = 'Now Playing: Thrill of the Hunt';

  }
});

playButton3.addEventListener('click', function(){
  if (isPlaying === true) {
    isPlaying = false;
    audio3.pause();
    this.classList.remove("fa-stop");
    this.classList.add("fa-play");
    nowPlaying.innerHTML = 'Select a song!';

  }
  else {
    audio3.play();
    isPlaying = true;
    this.classList.remove("fa-play");
    this.classList.add("fa-stop");
    nowPlaying.innerHTML = 'Now Playing: Transgender Dysphoria Blues';

  }
});

playButton4.addEventListener('click', function(){
  if (isPlaying === true) {
    isPlaying = false;
    audio4.pause();
    this.classList.remove("fa-stop");
    this.classList.add("fa-play");
    nowPlaying.innerHTML = 'Select a song!';

  }
  else {
    audio4.play();
    isPlaying = true;
    this.classList.remove("fa-play");
    this.classList.add("fa-stop");
    nowPlaying.innerHTML = 'Now Playing: Where I\'m From';
  }
});
