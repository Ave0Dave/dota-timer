function playRandomSound() {
    let mySound = new Array("audio/am/am1.mp3",
                            "audio/am/am2.mp3",
                            "audio/am/am4.mp3",
                            "audio/am/am5.mp3",
                            "audio/am/am6.mp3",
                            "audio/am/am7.mp3",
                            "audio/am/am8.mp3",
                            "audio/am/am9.mp3",
                            "audio/am/am10.mp3",
                            "audio/am/am11.mp3",
                            "audio/am/am12.mp3",
                            "audio/am/am13.mp3",
                            "audio/am/am14.mp3",
                            "audio/am/am15.mp3",
                            "audio/am/am16.mp3",
                            );
    
    window.addEventListener("click", function() {
        let randomNum = Math.floor(Math.random() * mySound.length);
        let sound = document.getElementById("sound");
        sound.src = mySound[randomNum];
        sound.play();
    });
  }

  playRandomSound();