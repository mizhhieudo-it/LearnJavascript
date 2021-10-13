const number = [8, 1, 3, 5, 6, 1, 2, 3];
//way 1 : basic
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}
//way 2 : Foreach
console.log("========Foreach==========");
number.forEach((i) => {
  console.log(i);
});
//way 2.1 : foreach with function
console.log("========Foreach_Func==========");
//=====================DELEGATE===============
/*DELEGATE : FUNCTION (){
        DO SOME THING 
    }
*/
function SoChan(value, index, array) {
  if (array[index] % 2 == 0) {
    console.log(array[index]);
  }
}
number.forEach(SoChan);
console.log("========Foreach IN==========");
for (let i in number) {
  console.log(number[i]);
}
const Product = [
  { NameP: "Iphone", Prince: "1000", Brand: "VietNam" },
  { NameP: "SamSung", Prince: "800", Brand: "China" },
  { NameP: "Sony", Prince: "500", Brand: "Korean" },
  { NameP: "Vin Smart", Prince: "900", Brand: "VietNam" },
  { NameP: "B phone", Prince: "1000", Brand: "VietNam" },
];
// ==================Get Product============
console.log("Get product price less 800$");
var sp = ``;
function ShowAll(val, i, arr) {
  sp += `<tr>`;
  sp += `<td>${val.NameP}</td>`;
  sp += `<td>${val.Prince}</td>`;
  sp += `<td>${val.Brand}</td>`;
  sp += `<tr>`;
}
Product.forEach(ShowAll);
document.getElementById("showsp").innerHTML = sp;
var lg = "";

function GetPrinceLess1000(val, i, arr) {
  //   if (val.Prince < 1000) {
  //     lg += `<tr>`;
  //     lg += `<td>${val.NameP}</td>`;
  //     lg += `<td>${val.Prince}</td>`;
  //     lg += `<td>${val.Brand}</td>`;
  //     lg += `<tr>`;
  //   }
  // document.getElementById("showlocgia").innerHTML = lg;
  console.log("====IN RA CONSOLE=============");
  Product.forEach((element) => {
    if (element.Prince < val) {
      console.log(element);
      lg += `<tr>`;
      lg += `<td>${element.NameP}</td>`;
      lg += `<td>${element.Prince}</td>`;
      lg += `<td>${element.Brand}</td>`;
      lg += `<tr>`;
    }
  });
  document.getElementById("showlocgia").innerHTML = lg;
}
