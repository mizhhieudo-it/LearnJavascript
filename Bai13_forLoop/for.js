var ListIMG = [
  "https://tailieufree.net/wp-content/uploads/2018/04/hinh-nen-vinh-ha-long-quang-ninh-dep.jpg",
  "https://s3.cloud.cmctelecom.vn/tinhte1/2017/12/4205775_C.jpg",
  "https://thuthuatnhanh.com/wp-content/uploads/2021/04/hinh-anh-nui-dep-o-Bac-My.jpg",
];
var getimg = document.getElementById("imgshow");
var i = 0;
function nextimg() {
  if (i >= ListIMG.length - 1) {
    i = 2;
  } else {
    i++;
  }
  console.log(i);
  getimg.src = ListIMG[i];
  getimg.style.animationName = "ani";
  getimg.style.animationDuration = "2s";
}
function preimg() {
  if (i <= 0) {
    i = 0;
  } else {
    i--;
  }
  getimg.src = ListIMG[i];
}
// setInterval(nextimg,2000);

// cho mảng product - in ra mảng đó
var products = [
  { Ten: "sách", Gia: 2000 },
  { Ten: "vở", Gia: 3000 },
  { Ten: "bút", Gia: 2500 },
  { Ten: "máy tính", Gia: 5000 },
  { Ten: "Ipad", Gia: 10000 },
];
function deleteFun(id) {
  products.splice(id, 1);
  return products;
}
var ListDemo = " ";
for (let i = 0; i < products.length; i++) {
  // ListDemo += products[i] + "<br>";
  // console.log(products[1]["Gia"]);
  ListDemo += "<tr>";
  ListDemo += `<td>${products[i]["Ten"]}</td>`;
  ListDemo += `<td>${products[i]["Gia"]}</td>`;
  ListDemo += `<td><button class="btn btn-danger" onclick="deleteFun(${i})">Xóa sản phẩm</button></td>`;
  ListDemo += "</tr>";
}
document.getElementById("show_list_item").innerHTML = ListDemo;
