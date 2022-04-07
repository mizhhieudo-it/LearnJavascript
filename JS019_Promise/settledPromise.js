const p =  Promise.resolve({id:1})
const d =  Promise.reject(new Error("Error......."))
console.log(p);  