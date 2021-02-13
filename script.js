document.documentElement.setAttribute('data-theme', 'light');

function checkForDotaTime(i) {
  if (i < 21 && i > 2) {
    changeTheme("NE");
  } else {
    changeTheme("ANO");
  }  
}

function addZeroToTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes(); 
  let s = today.getSeconds();

  h = addZeroToTime(h);
  m = addZeroToTime(m);
  s = addZeroToTime(s);
  
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  
  t = setTimeout(function() { 
    startTime(); 
  }, 1000);
  
  checkForDotaTime(h);
}

let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");

function changeTheme(string) {
  let image1 = document.getElementById("img1");
  let image2 = document.getElementById("img2");

  let answer = document.getElementById("answer");
  
  if (string === "NE") {
    answer.textContent = "NE";
    document.documentElement.setAttribute('data-theme', 'light');
    
    image2.style.display = "none";
    image1.style.display = "flex";
    
    audio1.play(); 
    audio1.autoplay = true;
  } else {
    answer.textContent  = "ANO";
    document.documentElement.setAttribute('data-theme', 'green');
    
    image1.style.display = "none";
    image2.style.display = "flex";
    
    audio1.autoplay = false;
    audio1.pause();
    audio2.play(); 
    audio2.autoplay = true;
  }
}

function muteAudioOnClick() {
  let muteButton = document.getElementById("mute-button");
  let clicked = false;
  
  muteButton.addEventListener("click", function() {
    audio1.muted = !audio1.muted;
    audio2.muted = !audio2.muted;

    if (!clicked) {
      muteButton.style.opacity = "80%";
      clicked = true;
    } else {
      muteButton.style.opacity = "20%";
      clicked = false;
    }
  });
}

function timeTravel() {
  let button = document.getElementById("button-timetravel");
  let video = document.getElementById("video");

  button.addEventListener("click", function() {
    audio1.muted = true;
    audio2.muted = true;
    audio3.play();

    video.style.display = "flex";
    video.play();
    
    document.getElementById("button-jonasroom").style.display = "none";
    button.style.display = "none";
  });
}

startTime();
muteAudioOnClick();
timeTravel();