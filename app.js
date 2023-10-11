
//   1-masala 1 dan n gacha sonlar
//   let n = prompt("sonni kiriting");

//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
 
//   2-masala n dan 1 gacha sonlar
// let n = prompt("sonni kiriting");

//   for (let i = n; i >= 1; i--) {
//     console.log(i);
//   }

//   3-masala 1 dan n gacha sonlar yig'indisi
//   let n = prompt("sonni kiriting")
//   let natija = 0;
  
//   for (let i = 1; i <= n; i++) {
//       natija += i;
//   }
//   console.log(natija); 

// 4-masala 1 dan n gacha juft sonlar

// let n = prompt("sonni kiriting: ");
// let result = 0;
// for (let i = 1; i <= n; i++) {
//     if(i % 2 == 0){
//         result += i
//     }
// }
// console.log(result);

// 5-masala 1 dan n gacha toq sonlar

// let n = prompt("sonni kiriting kiriting: ");
// let result = 0;
// for (let i = 1; i <= n; i++) {
//     if(i % 2 == 1){
//         result += i
//     }
// }
// console.log(result);
// 6-masala bo'luvchilari
// const n = prompt("sonni kiriting"); 
// const natija = [];

// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     natija.push(i);
//   }
// }

// console.log(natija);
// 7-masala

// let n = prompt("sonni kiriting"); 
// let natija = [];
// let yigindi = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     natija.push(i);
//     yigindi += i
//   }
// }
// console.log(natija);
// console.log("Yigindisi" + " " + yigindi);
// 8-masala

// for misollar

//  for 1-misol
// let k = prompt("chiqarishingiz kerak bolgan sonni kiriting");  // chiqarish uchun k soni
// let n = prompt("necha marta chiqarish kerak "); // necha marta chiqarish kerakligi

// for (let i = 1; i <= n; i++) {
//   console.log(k);
// }

// for 2-masala
// let a = prompt(" a ni kiriting");
// let b = prompt(" b ni kiriting");
// let sum = 0;

//   for (let i = a; i <= b; i++) {
//     if (a != i && b != i)

//     console.log(i);
//   }

// for 3-masala
// let a = prompt("a ni kiriting");
// let b = prompt("b ni kiriting");

//   for (let i = b; i >= a; i--) {
//     if (a != i && b != i) {
//       console.log(i);
//     } else if (a == i && b == i) {
//       console.log(i);
//     }
// }

// for 4-masala

// let n = prompt("narxni kiriting")
// let res = 0;

// for (let i = 1; i <= 10; i++) {
//   res = n*i;
//   console.log(i);
//   console.log(res + " " + "sum");
// }

// for 5-masala

// let n = prompt("narxni kiriting")
// let res = 0;

// for (let i = 0.1; i <= 1; i += 0.1) {
//   res = n*i;
//   console.log(i);
//   console.log(res + " " + "sum");
// }

// for 6-masala

// let n = prompt("narxni kiriting")
// let res = 0;

// for (let i = 1.2; i <= 2; i += 1.2) {
//   res = n*i;
//   console.log(i);
//   console.log(res + " " + "sum");
// }

// for 7-masala

// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");

// a = a*1;
// b = b*1;
// sum = 0;
// for (let i = a; i <= b; i++) {
//     if(a >= 0 && b >= 0) {
//         sum += i
//     } 
// }
// console.log("Natija " + " " + sum);

// for 8- masala

// let a = prompt("a ni kiriting")
// let b = prompt("b ni kiriting")
// let sum = 1;

// for (let i = a; i <= b; i++) {
//   sum *= i;
//   console.log(i);
// }

// console.log(sum);

// for 9-masala

let a = prompt("a ni kiriting");
let b = prompt("b ni kiriting")

kv = 1;
sum = 0;

for (let i = a; i <= b; i++) {
    kv = i ** 2;
    sum += kv;
    console.log(kv);
}
console.log(sum);