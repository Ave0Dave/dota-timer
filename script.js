function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function changeAnswer(s) {
  let image1 = document.getElementById("img1");
  let image2 = document.getElementById("img2");
  let time =  document.getElementById("time");
  let clock = document.getElementById("container-time");
  let audio1 = document.getElementById("audio1");
  let audio2 = document.getElementById("audio2");
  
  if (s == "NE") {
    document.getElementById("answer").innerHTML = "NE";
    document.body.style.backgroundColor = "#ff948a";
    image2.style.display = "none";
    image1.style.display = "flex";
    audio1.play(); 
    audio1.autoplay = true;
  } else {
    document.getElementById("answer").innerHTML = "ANO";
    time.style.color = "#29ff37";
    time.style.textShadow = "0 0 1px #66ff70, 0 0 2px #66ff70, 0 0 2px #66ff70, 0 0 2px #66ff70";
    clock.style.backgroundColor = "#000801"; 
    image1.style.display = "none";
    image2.style.display = "flex";
    audio1.autoplay = false;
    audio1.volume = 0;
    audio2.play(); 
    audio2.autoplay = true;
    document.body.style.backgroundColor = "#8affb7";
  }
}

function isItDotaTime(i) {
  if (i < 21 || i < 1) {
    changeAnswer("NE");
  } else {
    changeAnswer("ANO");
  }  
}

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes(); 
  let s = today.getSeconds();

  // add a zero in front of numbers < 10
  m = checkTime(m);
  s = checkTime(s);
  
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  
  t = setTimeout(function() { startTime(); }, 1000);
  isItDotaTime(h);
}

function muteAudio() {
  let audio1 = document.getElementById("audio1");
  let audio2 = document.getElementById("audio2");
  let mute = document.getElementById("mute-button");

  changeButtonOpacity();
  
  mute.addEventListener("click", function (e) {
    e = e || window.event;
    audio1.muted = !audio1.muted;
    audio2.muted = !audio2.muted;
    e.preventDefault();
  }, false);
}

function changeButtonOpacity() {
  let mute = document.getElementById("mute-button");
  let clicked = false;

  mute.addEventListener("click", function() {
    if (!clicked) {
      mute.style.opacity = "80%";
      clicked = true;
    } else {
      mute.style.opacity = "20%";
      clicked = false;
    }
  });
}

function timeTravel() {
  let button = document.getElementById("red-button");
  let audio1 = document.getElementById("audio1");
  let audio2 = document.getElementById("audio2");
  let audio3 = document.getElementById("audio3");
  let video = document.getElementById("video");
  let clicked = false;

 

  button.addEventListener("click", function(e) {
    if (!clicked) {
      e = e || window.event;
      audio1.muted = !audio1.muted;
      audio2.muted = !audio2.muted;
      e.preventDefault();
      clicked = true;
    }
    audio1.volume = 0;
    audio2.volume = 0;
    audio3.play();
    video.style.display = "flex";
    video.play();
  });
}

// window.addEventListener('mousemove', function (e) {
//   let $x = e.x;
//   let $y = e.y;
// });

startTime();
muteAudio();
timeTravel();