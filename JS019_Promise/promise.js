// vấn đề cũ
console.log('Befor');
const user = getUser(1);
console.log(user);
console.log('after');


// function get info user 
function getUser(id) {
    setTimeout(() => {
        console.log('Reading a user from a database......');
        return { id: id, gitHubUsername: 'Test' }
    }, 2000);
    return 1
}
// =====> Problem need slove : how to get info user 
//== level 2 : promise
function getUserUseCallBack(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database......');
            resolve({ id: id, gitHubUsername: 'Test' });
            reject(new Error("Error...."))
        }, 2000);
    })

}
getUserUseCallBack(1).then((result) => {
    console.log("info user", result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['repo1', 'repo2']);
            reject(new Error("Error.."))
        }, 2000);
    })
}).then((result)=>{
    console.log("repo :",result);
})
// console.log("==========Call Back===========");
// console.log('Befor callback...');
// getUserUseCallBack(1,(user)=>{
//     console.log('data sent here :'+user.id + "git name :"+user.gitHubUsername);
//     /// sử dụng getRepo
//     getRepository(user.gitHubUsername,(repoGit)=>{
//         console.log("git repository",repoGit);
//         getCommitUser(repoGit[0],(dataCommits)=>{
//             console.log("commit in repo"+dataCommits);
//             // task =>>> Call Hell
//         })
//     })
// });
// console.log('after Call back');
// // Exp : chuyển thành bất đồng bộ
// function getRepository(username,callback) {  // chuyển thành bất đồng bộ -> settimeout
//     setTimeout(() => {
//         callback(['repo1','repo2'])
//     }, 2000);
// }
// function getCommitUser(repo,callback) {
//     setTimeout(() => {
//         callback(["commit1","commit2"])
//     }, 2000);
// }