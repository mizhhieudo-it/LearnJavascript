var Hello = "Hello word 'Lap'";
var Helu = `xin chao 'Lap'
hom nay thay the nao 
toi ngu ca ngay `;
// var a  = 1 ; 
// var b = 2 ; 
// var x = `kết quả của ${a} + ${b} = ${a+b}` ; 
// alert(x);
let firstName = "John";
let lastName = "Doe";

// let text = `Welcome ${firstName}, ${lastName}!`; 
// let text1 = "welcome "+firstName+", "+lastName+"!"; 

// alert(text);
// document.getElementById("demo").innerHTML = `<img src="Anh-troll-30.jpg" height="100%" width="100%" >`
// var x = `<h1>Thơ Nguyên Vũ'`;
// x += `<span>con cò bay lả bay la<span>`
// lần 1 x = `<h1>Thơ Nguyên Vũ'`
//lần `<h1>Thơ Nguyên Vũ'`+= `<span>con cò bay lả bay la<span>`
var thu = ["thứ n","thứ 3","thứ 4","thứ 5"];
x = `<h1>Thơ Nguyên Vũ'<h1> <ul>`
for(var i =0 ; i< thu.length ;i++ ){
    x+=`<li>${thu[i]}</li>` ;
}
x+= `</ul>`;
document.getElementById("demo").innerHTML = x ;
