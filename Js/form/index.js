const inputDom = document.querySelector("#name");
const btnDom = document.querySelector("button");
const formDom = document.querySelector(".forms");
const messsage = document.querySelector(".message");


const regextel = /^[90]+.{11}$/; //regex


formDom.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const resulttt = regextel.test(formDom.name.value);
    let sonuç = formDom.name.value.search(regextel);
    console.log(sonuç);
    if(!resulttt){
        console.log("Form Gönderilemedi");
        // 2 saniye sonra mesajı göster
        
        setTimeout(() => {
            messsage.style.display = "block";
            messsage.textContent= "Lütfen geçerli bir bilgi giriniz."
        }, 2000);
    }else{
        console.log("form gönderildi");
        console.log(resulttt);
        messsage.textContent="başarılı";
    }
})



formDom.name.addEventListener("keyup",(e)=>{
    
    if(regextel.test(e.target.value)){
        console.log("başarlı");
        formDom.name.setAttribute("class","success");

    }else{
        console.log("başarısız");
        formDom.name.setAttribute("class","error");

    }

});
