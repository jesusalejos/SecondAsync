const somethingWillHappen = () => {
    return new Promise( (resolve, reject) => {
        if (false) {
            console.log('Hey dude!');
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
};

somethingWillHappen()
    .then(response=> console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
       if(true) {
        setTimeout(() => {
            resolve('True');
        }, 5000)
    } else {
    const error = new Error("Whooops!");
    reject(error)
    }
});
}
    

    
    somethingWillHappen2()
      .then( response => console.log(response))
      .catch( err => console.log(err));
    
    //ejecutamos todas las promesas
Promise.all([somethingWillHappen(),somethingWillHappen2()])
//Si obtenemos un resolve
.then(response => {
    console.log('Array of results', response);
})
//Si obtenemos un reject
.catch(err => {
    console.error(err)
})