
// alert("Please enter the name1!!!!");
// console.log("YUNUS EMRE KARATAŞ BU PROJELERİ YAPAR Eder");

// var x = 35;
// var y = 34;

// var a = x+y;

// console.log(a);



// let email ="yunuskaratas@gmail.com";

// console.log(email);



// let ad = "yunus emre";
// let surname = "karataş";

// let result= ad+" "+surname;


// console.log(result[1]);




// for(let i =0 ;i<15;i++){
//     console.log(i);
// }


// let names =["yunusemre","karataş","21"];


//     let result= `benim adım ${names[0]} soyadım ${names[1]} ve yaşım ${name[3]}tür.`;


// console.log(result);    

// function Emre(){
//     console.log("yunus emre karataş");

// }


// Emre();



// karataş("yunus","emre");


// function karataş(ad,soyad){

//     console.log(ad+" "+soyad);
// }

// function added(num1,num2){
//     let a = Number(num1)+ Number(num2);
//     return a;
// }


// function sonuç(added){
//     let result =added(12,14);
//     console.log(result);
// }

// sonuç(added);


// const topla =(a,b)=>a+b;

// console.log(topla(12,55));


// const a = () =>"yunus emre karataş";

// const x= a();
// console.log(x);


//bu fonsiyon arrow function ile yazıdlı
// const pay = (money,paymend)=>{
//     let result =( money*paymend)/100;

//     return result+money;
// }

// var sonuç = pay(23,43);
// console.log(`fiyat sonucu bu kadar ${sonuç}`);



// let studnet =["erear","aaewae","asnljadkmşdl"];

// studnet.forEach(function(kişi,index){
//     console.log(kişi,index);
// });



// const stdnt =(kişi,index) =>{
//     console.log(`${kişi}----${index}`);
// }
// studnet.forEach(stdnt);


let student ={
    name:"yunus emre",
    surname:"karataş",
    age:23,
    lessons : ["türkçe","mat","fen","tarih","coğrafya","edebiyat"],
    login(){

    },
    logout(){

    },
    printlesson(){

        console.log(this.lessons);
    
        this.lessons.forEach(ders=>{
            console.log(ders);
        });

        // console.log(this);
    }

};


// console.log(this);
// console.log(student);
student.printlesson();