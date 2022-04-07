function getUserUseCallBack(id,callback) {
    setTimeout(() => {
        console.log('Reading a user from a database......');
        // dữ liệu sẽ không trực tiếp trả về 2 giây trong điểm gọi , mà 2 sau 2 giây nó sẽ chờ để thực thi 
        // chuyển kết quả đó cho 1 hàm khác
        callback({id : id , gitHubUsername : 'Test'}) 
    }, 2000);
    return 1 
}
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
//=============Call back hell 

// làm phẳng hellback 
// call back là 1 hàm 
// nhận commit làm pram truyền vào
function showCommit(commit ) {
    console.log(commit);
}

// tạo function hứng value của reop 
function showRepo(repo) {
    getCommitUser(repo,showCommit) ; // call back đã giải quết vậy còn repo  . repo là kết quả của coll back repo
    // => repo được giải quyết
}
function getUser(user) {
    getRepository(user,showRepo) ; // user là kết quả của call back user => đã là kết quả của call back thì phải dùng function hứng   
}
getUserUseCallBack(1,getUser)

