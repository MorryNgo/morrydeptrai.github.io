    const song = document.getElementById('song');
    const playbtn = document.querySelector(".player-inner");
    let isPlaying = true;
    playbtn.addEventListener ("click",playPause)
    function playPause() {
        if (isPlaying) {
            console.log("play");
            song.play();
            playbtn.innerHTML='<ion-icon name="pause-outline"></ion-icon>';
            isPlaying = false;
            
        } else {
                console.log("pause");
                song.pause();
                playbtn.innerHTML='<ion-icon name="play-circle-outline"></ion-icon>'  
                isPlaying = true;
            }
        }
