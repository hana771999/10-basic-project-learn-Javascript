

const sounds =["FairyTale","into_your_arms","In_the_end","Harleys In Hawaii"]


sounds.forEach((sound)=>{
    const btn = document.createElement("button");
    btn.classList.add("btn");
        btn.innerText =  sound;

    
    btn.addEventListener("click",()=>{
        stopSound();
        document.getElementById(sound).play();
    })
        document.body.appendChild(btn)
})


function stopSound(){
    sounds.forEach((sound)=>{
        document.getElementById(sound).pause();
    })
}













