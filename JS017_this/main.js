const ListStudent = [];
//console.log(ListStudent[0]);
var GetTable = document.getElementById("BDTABLE");
//console.log(GetTable);
function ViewStudent()
{
    var info_Student = ``;
    this.ListStudent = ListStudent;
    ListStudent.forEach(element => {
        //console.log(element);
        info_Student += `<tr>`;
        info_Student += `<td>${element.NameST}</td>`;
        info_Student += `<td>${element.ClassST}</td>`;
        info_Student += `<td>${element.BornST}</td>`;
        info_Student += `</tr>`;
    });
    console.log("Trong func ViewStudent");
    console.log(info_Student);
    GetTable.innerHTML = info_Student; // showData
}
// ViewStudent();
// console.log("Ngoài func ViewStudent");
// console.log(info_Student);
// GetTable.innerHTML = info_Student; // showData
function CreateStudent()
{
 var NamesStudent = document.getElementById("NameStudent").value ; 
 var ClassNameStudent = document.getElementById("ClassName").value ; 
 var BornStudent = document.getElementById("Born").value ; 
 console.log(NamesStudent+ClassNameStudent+BornStudent);
 var personal = {
    NameST : NamesStudent ,
    ClassST : ClassNameStudent , 
    BornST : BornStudent
}
 ListStudent.push(personal);
 console.log(ListStudent);
// 

 ViewStudent();
 //["A","Nguyễn Văn A"];
// console.log(ListStudent[ListStudent.length -1]);
}
