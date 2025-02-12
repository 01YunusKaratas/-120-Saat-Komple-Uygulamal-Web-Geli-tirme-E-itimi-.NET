
// const result =[10,20,40,50,70,90];


// const geçenler  =result.filter((point) =>{
//     return point>50
// });





const points = [
    { Name: "ARDA", PUAN: 50 },
    { Name: "HAKAN", PUAN: 89 },
    { Name: "CELAL", PUAN: 23 },
    { Name: "DEFNE", PUAN: 99 },
    { Name: "ZEYNEP", PUAN: 92 }
];

// Yeni nesneler içeren bir dizi oluşturuyoruz.
const onpuan = points.map(x => ({
    Name: x.Name,
    PUAN: x.PUAN + 10 // Orijinal diziyi değiştirmeden yeni değer atıyoruz.
}));

// Yeni puanlara göre öğrencinin geçip geçmediğini kontrol etme
onpuan.forEach(student => {
    if (student.PUAN >= 50) {
        console.log(`${student.Name}, ${student.PUAN} puan ile dersi geçti.`);
    }
});
