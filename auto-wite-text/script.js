const text = " My Name is Hana Iam programmer"


let index = 0;





function witeText(){
    document.body.innerText = text.slice(0,index);
    index++;
    if(index > text.length ){
        index=0;
    }

}
setInterval(witeText,200)









