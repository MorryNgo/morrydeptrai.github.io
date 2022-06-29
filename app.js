    const song = document.getElementById        ('song');
    const playbtn = document.querySelector  (".player-inner");
    const forwardbtn= document.querySelector(".forward")
    const backbtn = document.querySelector  (".backward")
    
    let isPlaying = true;
    let indexSong = 0;
    
    forwardbtn.addEventListener('click', function() {
        console.log ("foward")
    })
    

    backbtn.addEventListener('click', function() {
        console.log ("backward")
    })
    
    
    
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
