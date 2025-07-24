const sounds ={
    crash : "assets/crash.mp3",
    kick : "assets/kick.mp3",
    snare : "assets/snare.mp3",
    tom : "assets/tom.mp3"
}

// const crash = document.querySelector("#crash")

// crash.addEventListener("click",()=> {
//     const audio = new Audio(sounds.crash)
//     audio.play()
//     crash.classList.add("active");

//     setTimeout(()=>{
//         crash.classList.remove("active")
//     },2000)
// })

// const kick = document.querySelector("#kick")

// crash.addEventListener("click",()=> {
//     const audio = new Audio(sounds.kick)
//     audio.play()
//     kick.classList.add("active");

//     setTimeout(()=>{
//         kick.classList.remove("active")
//     },2000)
// })

// const snare = document.querySelector("#snare")

// crash.addEventListener("click",()=> {
//     const audio = new Audio(sounds.snare)
//     audio.play()
//     snare.classList.add("active");

//     setTimeout(()=>{
//         snare.classList.remove("active")
//     },2000)
// })


// Loop each sound name because i can not use addEventListner in evry sound seperate
Object.keys(sounds).forEach(id => {
  const btn = document.querySelector(`#${id}`);
  if (!btn) return;

  btn.addEventListener("click", () => {
    const audio = new Audio(sounds[id]);
    audio.play();

    btn.classList.add("active");
    setTimeout(() => {
      btn.classList.remove("active");
    }, 200);
  });
});