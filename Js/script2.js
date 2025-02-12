// let student ={
//     name:"yunus emre",
//     surname:"karataş",
//     school:"CBU",
//     dersler:[
//         {"lesson":"maths","note":90},
//         {"lesson":"physichs","note":70},
//         {"lesson":"comporg","note":80},


//     ],
//     login(){
//         console.log("Siteye hoşgeldiniz");
//     },
//     logout(){
//         console.log("Siteden ayrılıyorsunuz....");
//         console.log(this.dersler);

//         this.dersler.forEach(x=>{
//             console.log(x.lesson + " ----- " + x.note);
//         })

//     },
// }   



// console.log(student.name);
// console.log(student.surname),
// console.log(student.school);

// let result = student.dersler.forEach(ders=>{
//     console.log(ders);
// });


// console.log(student["name"]); // bu yöntem ilede alınabiliyor ve update edilebilr

// student.login();
// student["name"]="emre";

// console.log(student.name);

// student.logout();,




// const p1Dom =document.querySelector("p");
// const errorDom = document.querySelector(".error");
// const fullDom= document.querySelectorAll("p");
// errorDom.addEventListener("mouseover",function(){
//     errorDom.textContent="merhaba hoşgeldiniz sitemize";
// });


// p1Dom.addEventListener("mouseover",function(){
//     p1Dom.style.backgroundColor="red";
// });


// fullDom.forEach(x=>{
//     console.log(x);
// })


// const emreDom = document.getElementById("emre");
// console.log(emreDom);


// const classNameDom= document.getElementsByClassName("error");
// console.log(classNameDom);


// const emreDom = document.querySelector("p");
// console.log(emreDom.innerText);

// emreDom.addEventListener("click",function(){
//     emreDom.innerText="merhaba hoş geldiniz!!!";
// });

// const rslt = document.querySelector(".error");
// const full = document.querySelectorAll("p");    

// full.forEach(info =>{
//     console.log(info.innerText);
//     info.innerHTML+= " yeni alan burası ";
// }); 

// rslt.innerText= "yunusemrekarataş burada ..";
// console.log(rslt.innerText);
// rslt.innerHTML+=' <hr> <h1>MERHABA BEN YUNUS EMRE </h1> <br></br> <hr> ';



// const ögrenciler = ["emre","karataş","yunus","servet"];

// ögrenciler.forEach(stdnt =>{
//     rslt.innerHTML +=`<h3> <bol>${stdnt}</bold> </h3>`
// });



const links = document.querySelector("a");
// console.log(links.getAttribute("href"));


links.setAttribute("href","https://www.google.com/search?q=t%C3%BCbitak+2209+b+sanayiye+y%C3%B6nelik+lisans+ara%C5%9Ft%C4%B1rma+projeleri+deste%C4%9Fi+program%C4%B1+sonu%C3%A7alr%C4%B1+ne+zaman&oq=t%C3%BCbitak+2209+b+sanayiye+y%C3%B6nelik+lisans+ara%C5%9Ft%C4%B1rma+projeleri+deste%C4%9Fi+program%C4%B1+sonu%C3%A7alr%C4%B1+ne+zaman&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIxgnMggIAhAAGBYYHtIBCDU3MjJqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8");

console.log(links.getAttribute("href"));
links.textContent="2209-B sanayi yarışması ";


const pler = document.querySelector("p");
console.log(pler.getAttribute("class"));

pler.setAttribute("class","denemeler");
pler.setAttribute("style","color: red");

console.log(pler);
 
pler.classList.add("yunus");
pler.classList.add("help");
pler.classList.add("helper  ");
