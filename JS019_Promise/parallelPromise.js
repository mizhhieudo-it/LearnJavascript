const apiFacebook = new Promise((reslove,reject)=>{
    setTimeout(() => {
        console.log("Call api facebook");
       // reslove(1)
        reject( new Error("some things error"))
    }, 2000);
})
const apiGoogle = new Promise((reslove,reject)=>{
    setTimeout(() => {
        console.log("Call api google");
        reslove(2)
    }, 2000);
})
Promise.all([apiFacebook,apiGoogle]).then(x => console.log(x)).catch(err => console.log(err))