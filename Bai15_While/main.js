// for (let index = 0; index < array.length; index++) {
//     console.log(index);
// }
// var i = 0 ;
// while (i <= 5 ) {
//     i++ ;
//     console.log("Hello");
// }
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";
for (;cars[i];) {
  text += cars[i];
  i++;
}
//==================self============
let index = 0;
for ( ;index < cars.length;) {
    const element = cars[index];
    index++ ;
}
cars.forEach(element => {
    console.log(element);
});
for(const x in cars){
    console.log(x);
}
// for (const iterator of object) {
    
// }
//==================
console.log("==========ARR Fruits==============");
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
fruits.forEach(element => {
    console.log(element);
});
for (const iterator of fruits) {
    console.log(iterator);
}
// 
const x = 1 ;//=> HA NOI 
//x = 2 ; => BAI BANG 
// letters -> A12345
// new => letters ( cao bằng ) = [1,2]
//letters.add(3);=> [1,2,3,]
const letters = new Set(["a","b"]);
letters.add("c");
letters.forEach(element => {
    console.log(element);
});
const products = new Set(["Android"]);
//products.add("Iphone");
arr1 = ["IPHONE","IPAD","ANDROID","MACBOOK"];
arr1.forEach(element => {
    products.add(element);
});
var isInPro = products.has("IPHONE11");
products.forEach(element => {
    console.log(element);
});
console.log(isInPro);
console.log("số lượng phần tử"+products.size);
////====================
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
const productsMap = new Map([
    ["Iphone",1300],
    ["Android",500],
    ["SamSung",800] 
])
//------------------cach1-----------------
productsMap.set("Nokia",300);
function GetInfo(val, key){
    console.log(`Product Price is ${val} - Name : ${key}`)
}
productsMap.delete("Iphone");
productsMap.forEach(GetInfo);
// console.log("===========WAY2 ==================");
// productsMap.forEach(element => {
//     console.log(`Product Prince is ${element.value} - Name : ${element.key}`)
// });
console.log(`Is Iphone in Product Arr ${productsMap.has("SamSung")} Product Iphone have price ${productsMap.get("SamSung")} dollar`);