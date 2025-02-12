
const buttonDom= document.querySelector(".btn");//butonu aldım
const mainDom = document.querySelector(".main-popup");//main popu seçtim
const closeDom=document.querySelector(".popup-close");
buttonDom.addEventListener("click",function(event){
    event.preventDefault();//sayfa yenilenmesin

    mainDom.style.display="flex";
});

closeDom.addEventListener("click",(event)=>{
    event.preventDefault();

    mainDom.style.display="none";

});

mainDom.addEventListener("click",(event)=>{
    console.log(event.target);
    event.preventDefault();
    if(event.target.className==="main-popup"){
        mainDom.style.display="none"
    }
});