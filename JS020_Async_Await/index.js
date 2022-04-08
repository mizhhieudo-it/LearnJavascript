// promise to aync/await
function getUser(id) {
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            reslove({id:id,nameGit:"NguyenVanA"})
        }, 2000);
    })
}
function getRepo(userid) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('find repo by id.......');
            resolve({id:userid,repo:['repo1','repo2']})
        }, 2000);
    })
}
function getCommit(repoId,callBack) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('find commit by repo.......');
            resolve({repoId:repoId,commit:['commi1','commit2','commit3']})
        }, 2000);
    })
}
//using async await
// đánh dấu đây làm hàm bất đồng bộ 
async function displayCommit() {
    const user = await getUser(1) ; 
    const repo = await getRepo(user.id);
    const commit = await getCommit(repo.repo[0])
    console.log(commit);
}
displayCommit();