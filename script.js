console.log("Welcome to spotify");

// Initailze Varibles
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgessBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Chaka Chaka", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Jashn-E-Bahaaraa", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Rait Zara Si", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Srivalli", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Manike mage hithe", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Stay", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Frozen", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Intentions", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Lehra do", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Your Power", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]


// audioElement.play();

// Handel play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
// listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgessBar.value = progress;
})

myProgessBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgessBar.value*audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');        

    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');        
})