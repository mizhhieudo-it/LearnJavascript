// vấn đề cũ
console.log('Befor');
const user = getUser(1);
console.log(user);
console.log('after');


// function get info user 
function getUser(id) {
    setTimeout(() => {
        console.log('Reading a user from a database......');
        return {id : id , gitHubUsername : 'Test'}
    }, 2000);
    return 1 
}
// =====> Problem need slove : how to get info user 
//== level 1 : callbacks
function getUserUseCallBack(id,callback) {
    setTimeout(() => {
        console.log('Reading a user from a database......');
        // dữ liệu sẽ không trực tiếp trả về 2 giây trong điểm gọi , mà 2 sau 2 giây nó sẽ chờ để thực thi 
        // chuyển kết quả đó cho 1 hàm khác
        callback({id : id , gitHubUsername : 'Test'}) 
    }, 2000);
    return 1 
}
console.log("==========Call Back===========");
console.log('Befor callback...');
getUserUseCallBack(1,(user)=>{
    console.log('data sent here :'+user.id + "git name :"+user.gitHubUsername);
    /// sử dụng getRepo 
    getRepository(user.gitHubUsername,(repoGit)=>{
        console.log("git repository",repoGit);
        getCommitUser(repoGit[0],(dataCommits)=>{
            console.log("commit in repo"+dataCommits);
            // task =>>> Call Hell 
        })
    })
});
console.log('after Call back');
// Exp : chuyển thành bất đồng bộ 
function getRepository(username,callback) {  // chuyển thành bất đồng bộ -> settimeout
    setTimeout(() => {
        callback(['repo1','repo2'])
    }, 2000); 
}
function getCommitUser(repo,callback) {
    setTimeout(() => {
        callback(["commit1","commit2"])
    }, 2000);
}