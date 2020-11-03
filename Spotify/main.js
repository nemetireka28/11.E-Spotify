let playm=document.getElementById("play_pause");
let pa=false;
let audio_player=document.getElementById("audioplayer");
function pMusic(){
   if(!pa)
    {
        pa=true;
        playm.src=("pause.svg");
        audio_player.play();
    }
    else
    {
        pa=false;
        playm.src=("play.svg");
        audio_player.pause();
    }
}
function AudioPlayer(){
   
    let music_len=audio_player.duration;
    let perc = 0;
    let mperc=Math.round(music_len);
    while(mperc>=60)
    {
        mperc-=60;
        perc+=1;
    }

    console.log(perc + ":" + mperc);
}
function actualtime(){
    let mperc=Math.round(audio_player.currentTime);
    let perc = 0;

    timeline(mperc);
    while(mperc>=60)
    {
        mperc-=60;
        perc+=1;
    }

    console.log(perc + ":" + mperc);

}
function timeline(actual_sec){
    let music_len=Math.round(audio_player.duration);
    let percent=actual_sec/(music_len/100);
    console.log(percent);
    document.getElementById("inner_line").style.width=percent + "%";
}

AudioPlayer();
setInterval(actualtime,1000);

function changeMusic(zenecim){
    audio_player.src="Harry Styles - To Be So Lonely (Official Audio).mp3"
}
