// Number  "10.10" => số = 10.1 
// ParseInt "10.10" => số = 10 
// ParseFloat "10" => số 10.0
var a = "10.10" ;
var b = "10";
console.log(Number(a)); // 10.1
console.log(parseInt(a)); // 10 
console.log(typeof(parseFloat(b))) ; // 10.0