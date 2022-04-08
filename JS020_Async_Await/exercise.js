
// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });

  
  function getCustomer(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ 
              id: id, 
              name: 'Mosh Hamedani', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000);

    })  
  }
  
  function getTopMovies() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
          }, 4000);
    })
  }
  
  function sendEmail(email, movies) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
          }, 4000);
    })
  }
  async function sendEmailForUser(){
    const getUser = await getCustomer(1);
    console.log('Customer',getUser);
    const topFlim = await getTopMovies();
    console.log('Top 2 Flim',topFlim);   
    const sendMails = await sendEmail(getUser.email,topFlim);
    console.log('Email Sent.....');
}
sendEmailForUser();