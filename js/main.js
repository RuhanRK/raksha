$("body").quietflow({
    theme : "bouncingBalls",
    specificColors : [
      "rgb(0,152,118)",
      "rgb(255,32,82)", 
      "rgb(0,168,231)", 
      "aqua"
    ]
  });


//   Audio Section
// Audio------------
var myAudio = document.getElementById("myAudio");
var myAudioEng = document.getElementById("myAudioEng");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

function togglePlayEng() {
  if (isPlaying) {
    myAudioEng.pause()
  } else {
    myAudioEng.play();
  }
};

myAudioEng.onplaying = function() {
  isPlaying = true;
};
myAudioEng.onpause = function() {
  isPlaying = false;
};


$('.sound div').click(function(){
    $(this).find('i').toggleClass('fa-music fa-pause')
});

  