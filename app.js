    const song = document.getElementById        ('song');
    const playbtn = document.querySelector  (".player-inner");
    const forwardbtn= document.querySelector(".forward")
    const backbtn = document.querySelector  (".backward")
    const   musics = ['https://github.com/MorryNgo/morrydeptrai.com/raw/main/Anh%20Nh%C3%A0%20%E1%BB%9E%20%C4%90%C3%A2u%20Th%E1%BA%BF%20%20AMEE%20x%20B%20RAY%20%20Masew%20Remix%20.mp3','https://github.com/MorryNgo/morrydeptrai.com/raw/main/Tinh_Dang_Nhu_Ly_Cafe.mp3'
,"https://github.com/MorryNgo/morrydeptrai.com/raw/main/y2mate.com_-_Em_La_Nhat_Kis_x_Hoang_Kaylee_x_Yahy_x_ZeapleeLofi_Version_by_1_9_6_7_Audio_Lyrics_Video.mp3","https://github.com/MorryNgo/morrydeptrai.com/raw/main/y2mate.com%20-%20Deus%20%20B%C3%B4ng%20Hoa%20Ch%E1%BA%B3ng%20Thu%E1%BB%99c%20V%E1%BB%81%20Ta%20Wind%20Remix.mp3"
,"https://github.com/MorryNgo/morrydeptrai.com/raw/main/y2mate.com%20-%20t%C3%ACnh%20ca%20t%C3%ACnh%20ta%20%20kis%20%F0%9D%99%A8%F0%9D%99%A1%F0%9D%99%A4%F0%9D%99%AC%F0%9D%99%9A%F0%9D%99%99%20%20%F0%9D%99%A7%F0%9D%99%9A%F0%9D%99%AB%F0%9D%99%9A%F0%9D%99%A7%F0%9D%99%97%20flechazowu.mp3"
,];
    

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

    song.setAttribute ("src" ,`${musics[indexSong]}`);
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
