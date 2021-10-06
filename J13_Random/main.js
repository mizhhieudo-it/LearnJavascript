var Theme = document.getElementById("bgmode");
//console.log(Theme);
function DarkMode() {
    Theme.style.background = "black";
    Theme.style.color = "white";
}
//console.log(MachineChoose);
//=== 0 : búa // == 1: bao ://==2 : kéoo
var GetBao = document.getElementById("bao").getAttribute('value');
var GetBua = document.getElementById("bua").getAttribute('value');
var GetKeo = document.getElementById("keo").getAttribute('value');
//console.log(GetBao);
//==============================================================
function GameOTT(_userChoose) {
    var MachineChoose = Math.floor(Math.random() * 3);
    //=================
    if(MachineChoose == 0){
        document.getElementById("MachineKQ").src="images/bua.PNG";
    }
    else if(MachineChoose == 1){
        document.getElementById("MachineKQ").src="images/bao.PNG";
    }
    else{
        document.getElementById("MachineKQ").src="images/keo.PNG";
    }
    //================
    var userChoose = _userChoose;
    var Rel;
    if (userChoose == 0) {
        if (MachineChoose == 0) {
            Rel = "Người Hòa Máy";
        }
        else if (MachineChoose == 1) {
            Rel = "Máy Thắng";
        }
        else {
            Rel = "Người Thắng";
        }
    }
    else if (userChoose == 1) {
        if (MachineChoose == 1) {
            Rel = "Người Hòa Máy";
        }
        else if (MachineChoose == 2) {
            Rel = "Máy Thắng";
        }
        else {
            Rel = "Người Thắng";
        }
    }
    else {
        if (MachineChoose == 2) {
            Rel = "Người Hòa Máy";
        }
        else if (MachineChoose == 0) {
            Rel = "Máy Thắng";
        }
        else {
            Rel = "Người Thắng";
        }
    }
    document.getElementById("kqshow").innerText = Rel;
    console.log(`Máy chọn ${MachineChoose} và người chọn ${userChoose} => kết quả là : ${Rel}`);
}
