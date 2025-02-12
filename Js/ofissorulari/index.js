
const results = ["E","E","E","E"];
const formDom = document.querySelector(".form");
const sonucDom =document.querySelector("#yazdır")

formDom.addEventListener("submit",(e)=>{
    e.preventDefault(); //sayfa yenilenmesin

    let score = 0;
    const answers = [formDom.q1.value,formDom.q2.value,formDom.q3.value,formDom.q4.value]

    answers.forEach((cevap,index)=>{
        if(cevap === results[index]){
            score+=25;
            
        }
    });

   
    sonucDom.style.display = "block";  
    let i  =0;
    const bastır = setInterval(() => {
        i++;
        sonucDom.textContent = ` ${i}%`;
        if(i === score){
            
            clearInterval(bastır);
        }
    },20);
   
         
});