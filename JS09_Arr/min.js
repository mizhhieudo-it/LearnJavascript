// biến 
var a = 3 ; 
// cấu tạo 
// tên kiểu dữ liệu _tên biến = giá trị của biến
var b =4 ;
// kiểu dl = var 
// tên biến b 
// giá trị = 4 
// muốn sd số 4= > call tên biến
var arrInfo = ["1821050XXX", 
                "Nguyễn Văn A",
                 "CNTT63A",
                  "2003" ];
console.log(typeof(arrInfo));
console.log("Cách 1 ");
console.log(`${arrInfo[0]},${arrInfo[2]},${arrInfo[3]}`); // object 
console.log("Cách 2 ");

arrInfo.forEach(e => {
    console.log(e);
});
console.log("This a ArrInfo");
console.log(arrInfo);
//=======================================NÂNG CAO======================================//
const ThongTinSV = [
    [
        "1821050111",
        "Nguyễn Văn A",
        "DCCTPM64A",
        "011111111",
        "https://inthenhua.net.vn/wp-content/uploads/2017/06/the-sinh-vien.png"
    ],
    [
        "1821050112",
        "Nguyễn Văn B",
        "DCCTPM64A",
        "011111111",
        "https://inthenhua.net.vn/wp-content/uploads/2017/06/the-sinh-vien.png"
    ],
    [
        "1821050113",
        "Nguyễn Văn C",
        "DCCTPM64A",
        "011111110",
        "https://inthenhua.net.vn/wp-content/uploads/2017/06/the-sinh-vien.png"
    ],
    [
        "1821050114",
        "Nguyễn Văn D",
        "DCCTPM64A",
        "011111111",
        "https://inthenhua.net.vn/wp-content/uploads/2017/06/the-sinh-vien.png"
    ]
];
// chuoihtml = `
// <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//     ` ;
//     ThongTinSV.forEach(element => {
//         element.forEach(x => {
//             chuoihtml+= `<td>${x}</td>`;
//         });
//     });
//     chuoihtml+=`</tr>
//     </tbody>
// </table>
//         `;
// //       <td>Mark</td>
// //       <td>Otto</td>
// //       <td>@mdo</td>
// //     </tr>
// //   </tbody>
// // </table>
//`

var GetDivDemo = document.getElementById("demo");
console.log(GetDivDemo);
var StringShow = `<h1> Thông Tin Sinh Viên</h1> 
</br>
<table  class="table">
<th>
    <thead>
    <tr>
    <th scope="col">Mã Sinh Viên</th>
    <th scope="col">Tên</th>
    <th scope="col">Lớp</th>
    <th scope="col">SDT</th>
    <th scope="col">Ảnh</th>
    <th scope="col">Thao Tác</th>
    </tr>
    </thead> 
    <tbody>`;
//     for(var j = 0 ;j<ThongTinSV.length;i++){
//         StringShow += `<tr>`;
//         for(var i = 0 ; i< 4;i++){
//             StringShow += `<td>${ThongTinSV[j][i]}</td>`;
//         }
//         StringShow += `<td><img src="${ThongTinSV[j][4]}"  height='100' width='100'/></td>`;
//         StringShow += `<td><button class="btn btn-outline-danger">Xóa</button></td>`;
//         StringShow += `</tr>`;
    
// };  
    var i ; 
    var j ;
        for(i = 0 ;i < ThongTinSV.length ;i++){
            console.log(ThongTinSV[i]);
            for(j=0;j< ThongTinSV[i];j++){
                console.log("thong sinh vien thu"+i);
                console.log(ThongTinSV[i][j]);
            }
        }
StringShow += `</tbody> 
</table>
`   ;
GetDivDemo.innerHTML = StringShow;
