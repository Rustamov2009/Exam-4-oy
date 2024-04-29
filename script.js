// 1-savol Arifmetik operatorla
//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!
// alert(5%2)

// 2-savol  Math metodlari
// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring
// function getRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1;
//   }
  
//   console.log = alert(getRandomNumber());

// 3-savol Math metodlari
// 12.510 sonini butun songa aylantiring! 
// let son = 12.510;
// let butunSon = Math.floor(son);
// console.log(butunSon);

// 4-savol function
// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.
// let str = ('Mars it school')

// alert( str + ` so'zini uzunligi = ` + str.length)


// 5-savol for loop
// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!
// function marssozi() {
//     for (let i = 0; i < 10; i++) {
//       console.log("MARS IT SCHOOL");
//     }
//   }

// 6-savol Array methods
// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]
// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring
//javob
// let ism = harflar[0] + harflar[17] + harflar[0] + harflar[2]; 
// console.log(ism);

// 7-savol if else
// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak.

// let age = 18;

// if (age > 18) {
//   console.log("Siz balag'ot yoshiga yetgansiz");
// } else if (age === 18) {
//   console.log("balog'at yoshi muborak");
// } else {
//   console.log("siz balog'at yoshiga yetmagansiz");
// }


// 8-savol String metodlari vs Array metodlari
// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring
// function teskariIsm() {
//     let ism = prompt("Ismingizni kiriting:");
//     let teskariIsm = ism.split('').reverse().join('');
//     console.log(teskariIsm);
// }

// teskariIsm();


// 10-savol Array metodlari
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// shu arraydagi juft sonlarni console ga chiqaring

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sonlar.forEach(son => {
//     if (son % 2 === 0) {
//         console.log(son);
//     }
// });