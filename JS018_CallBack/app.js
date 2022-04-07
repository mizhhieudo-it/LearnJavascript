// Task A : start 
// task b : lấy dữ liệu trong 2 s 
// task c  : hiển thị dữ liệu vừa lấy được 
let data = [{
    username:'mizhhieudo.it',
    gitRepo : 'learnJS'
}]
function TaskA(){
    console.log('start...');
}
// task B get username from source data
function TaskB(){
    setTimeout(() => {
       data.map((x)=>{
           return x.username
       }) 
    }, 2000);
}
function TaskC(params) {
    console.log(params);
    console.log('End Process..........');

}
// don't use callback . ..
// TaskA();
// let result = TaskB(); // underfind 
// TaskC(result);
// how to implement this process ? 
// => CallBack 
function TaskX(){
    console.log('start...');
}
// task B get username from source data
function TaskY(callback){
    setTimeout(() => {
       let resultName =  data.map((x)=>{
           return x.username + x.gitRepo
       }) ;
       callback(resultName) ;
    }, 2000);
}
function TaskZ(params) {
    console.log(params);
    console.log('End Process..........');

}
TaskX();
TaskY(TaskZ); // use call back