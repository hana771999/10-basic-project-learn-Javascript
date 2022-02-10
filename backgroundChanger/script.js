const btn = document.getElementById("btn");


btn.addEventListener("click",()=>{
    // one color
    // document.body.style.backgroundColor ="red";
    btn.style.backgroundColor= randomHsl();
    document.body.style.backgroundColor = randomHsl();


})

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

