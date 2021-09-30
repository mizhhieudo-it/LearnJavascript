const MyCar = {
    name:"MayBach", 
    model:"S450", 
    color:"BackGrey",
    KhoiDongXe : function(){
        var chuoi ="Xe Đang Khởi Động 3 . 2. 1 ...";
        console.log("so ki tu là" +chuoi.replace("Xe","oto"));
        
    }

};


console.log(MyCar["name"]);
console.log(MyCar.model);
console.log(MyCar.KhoiDongXe());