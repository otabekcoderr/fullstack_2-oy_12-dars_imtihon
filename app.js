// const users = [
//   {
//     id: 1,
//     name: "Ali",
//     lastName: "Valiyev",
//     age: 22,
//     job: "Frontend Developer",
//     email: "ali@gmail.com",
//     password: "ali123",
//   },
//   {
//     id: 2,
//     name: "Vali",
//     lastName: "Karimov",
//     age: 25,
//     job: "Backend Developer",
//     email: "vali@gmail.com",
//     password: "vali123",
//   },
//   {
//     id: 3,
//     name: "Sardor",
//     lastName: "Toshmatov",
//     age: 19,
//     job: "Student",
//     email: "sardor@gmail.com",
//     password: "sardor123",
//   },
//   {
//     id: 4,
//     name: "Madina",
//     lastName: "Aliyeva",
//     age: 24,
//     job: "UI/UX Designer",
//     email: "madina@gmail.com",
//     password: "madina123",
//   },
//   {
//     id: 5,
//     name: "Aziz",
//     lastName: "Rasulov",
//     age: 28,
//     job: "Fullstack Developer",
//     email: "aziz@gmail.com",
//     password: "aziz123",
//   },
//   {
//     id: 6,
//     name: "Malika",
//     lastName: "Sobirova",
//     age: 21,
//     job: "Graphic Designer",
//     email: "malika@gmail.com",
//     password: "malika123",
//   },
//   {
//     id: 7,
//     name: "Jasur",
//     lastName: "Ergashev",
//     age: 30,
//     job: "Project Manager",
//     email: "jasur@gmail.com",
//     password: "jasur123",
//   },
//   {
//     id: 8,
//     name: "Shahnoza",
//     lastName: "Qodirova",
//     age: 23,
//     job: "QA Engineer",
//     email: "shahnoza@gmail.com",
//     password: "shahnoza123",
//   },
//   {
//     id: 9,
//     name: "Bekzod",
//     lastName: "Ismoilov",
//     age: 18,
//     job: "Student",
//     email: "bekzod@gmail.com",
//     password: "bekzod123",
//   },
//   {
//     id: 10,
//     name: "Dilnoza",
//     lastName: "Hamidova",
//     age: 26,
//     job: "Python Developer",
//     email: "dilnoza@gmail.com",
//     password: "dilnoza123",
//   },
// ];

// // function addUser(arr, name, lastname, age, job, email, password, users) {
// //   let user_id = users.map((item) => item.id).at(-1);
// //   let newUser = {
// //     id: user_id + 1,
// //     lastname,
// //     age,
// //     job,
// //     email,
// //     password,
// //   };
// //   return [...users, newUser];
// // }

// // console.log(
// //   addUser(
// //     users,
// //     "john doe",
// //     "macgregor",
// //     34,
// //     "boxer",
// //     "johndoe@gmail.com",
// //     "1234",
// //     users,
// //   ),
// // );

// function deleteUser(users, id) {
//   for (let i of users) {
//     if (i.id === id) {
//       return delete users.i;
//     }
//   }
//   return users;
// }

// console.log(deleteUser(users, 4));
// console.log(users);

//=======================================================================

// function namuna(str) {
//   let [teg, count] = str.split("*");
//   return `<${teg}></${teg}>`.repeat(count);
// }

// console.log(namuna("div*2"));

//=======================================================================

// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.

// function songachaHisobla(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(songachaHisobla(3));

//=======================================================================

// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false

// function oraliqdami(num, obj) {
//   return num >= obj.min && num <= obj.max;
// }
// console.log(oraliqdami(0, { min: 0, max: 5 }));

//=======================================================================

// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// bo’lsa funksiya true qaytarsin, aks holda false.

// function oziBilanTugayaptimi(num) {
//   return String(num ** 2).endsWith(num);
// }
// console.log(oziBilanTugayaptimi(6));

//=======================================================================

// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.

// function indexniQosh(obj) {
//   return obj.map((item, index) => item + index);
// }
// console.log(indexniQosh([0, 0, 0, 0, 0]));

//=======================================================================

// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:

// function suvniQaytar(arr) {
//   let shakarli = ["cola", "fanta"];
//   return arr.filter((item) => !shakarli.includes(item));
// }

// console.log(suvniQaytar(["fanta", "cola", "water"]));

//=======================================================================

// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.

// function raqamniSana(nums) {
//   if (typeof nums !== "string") {
//     return String(Math.abs(nums)).length;
//   } else {
//     return "raqam kiriting";
//   }
// }

// console.log(raqamniSana(2342));

//=======================================================================

// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin

// function minToMax(num) {
//   let raqam = String(num).split("");
//   let max = raqam.sort((a, b) => b - a);
//   return Number(max.join(""));
// }

// console.log(minToMax(234));

//=======================================================================

// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(random(1, 10));

//=======================================================================

// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son

// function narissistik(num) {
//   let raqam = String(num);
//   let m = raqam.length;
//   let sum = 0;
//   for (let i of raqam) {
//     sum += Number(i) ** m;
//   }
//   return sum === num;
// }

// console.log(narissistik(1652));

//=======================================================================

// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.

// function kattaniSana(str) {
//   let count = 0;
//   for (let i of str) {
//     let kod = i.charCodeAt();
//     if (kod >= 65 && kod <= 90) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(kattaniSana("werYwHUI"));
