    const song = document.getElementById        ('song');
    const playbtn = document.querySelector  (".player-inner");
    const forwardbtn= document.querySelector(".forward")
    const backbtn = document.querySelector  (".backward")
    const   musics = ['Anh Nhà Ở Đâu Thế  AMEE x B RAY  Masew Remix .mp3','Tinh_Dang_Nhu_Ly_Cafe.mp3'];
    

    let isPlaying = true;
    let indexSong = 0;
    
    
    
    forwardbtn.addEventListener('click', function() {
        console.log ("foward")
        changeSong(1);
    })
    

    backbtn.addEventListener('click', function() {
        console.log ("backward")
        changeSong (-1);
    })
    
    
    function changeSong(dir) {
        if (dir===1){
            indexSong++;
            isPlaying= true;
        if (indexSong >= musics.length) {
            indexSong = 0;
        } 
   
        isPlaying= true; }
        
        else if (dir===-1){
            indexSong--;
        if (indexSong < 0) 
        {indexSong = musics.length - 1;} isPlaying = true;
        }

    song.setAttribute ("src" ,`./music/${musics[indexSong]}`);
    playPause(`play`)
}
    
    
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
