
const btnDom =document.querySelector(".btn");//put to button information
const ulDom=document.getElementById("ul");
const inputDom=document.getElementById("ekle");

btnDom.addEventListener("click",function(event){ //In here , Button's click events
    event.preventDefault();//sayfa yenilenmesini önler

    let newli = document.createElement("li");
    newli.textContent =inputDom.value;
    // ulDom.appendChild(newli);
    ulDom.prepend(newli)
    

    inputDom.value = ""; //tekrardan içeriği sıfırla
});


const tümli = document.querySelectorAll("ul");

tümli.forEach(x=>{
    x.addEventListener("click",e=>{
        console.log(e.target)
        e.stopPropagation();// bir tıklanma olayında içten dışa doğru yayılmayı önler.
        
        if(e.target.tagName === "LI"){
            e.target.remove();
        }

    });

});