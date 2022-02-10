const open = document.getElementById("open");
const close = document.getElementById("close");
const con = document.getElementById("container");


open.addEventListener("click",()=>{
    con.classList.add("active");
});
close.addEventListener("click",()=>{
    con.classList.remove("active");
})









