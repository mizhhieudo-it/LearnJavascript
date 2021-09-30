var num1 =  document.getElementById("num1").innerHTML;
var num2 = document.getElementById("num2").innerHTML; // 1 
function getvaluenum1(){
    num1 = document.getElementById("num1").innerHTML; // 1 
    console.log(num1);
    document.getElementById("A").setAttribute('value',num1);
}
function getvaluenum2(){
    num1 = document.getElementById("num2").innerHTML; // 1 
    console.log(num1);
    document.getElementById("B").setAttribute('value',num1);
}
function getPlus(){
    var kq = Number(num2) + Number(num1);
    document.getElementById("ht").setAttribute("value",kq);
    return kq;
}
function ketqua(){
    var hienthi = getPlus();
    document.getElementById("ht").setAttribute("value","hienthi");
}
