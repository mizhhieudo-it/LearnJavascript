function hello(){
    document.getElementById("demo").innerHTML = ' Bạn thấy học js hay chứ ?';
    // document : cha 
    //getElementById("demo") : lấy cái thẻ nào có cái id = demo 
    // innerHTML : thay đổi nội dung html
}
function changecolor(){
    document.getElementById("box1").style.backgroundColor = "red";
    document.getElementById("box1").style.height = "200px";
    console.log("hello Lập");
    window.print();
    let showhaha = 3 ; 
}
function show(){
    document.getElementById("box1").style.display = "block";
    alert(showhaha);
}
function hiden(){
    document.getElementById("box1").style.display = "none";
}