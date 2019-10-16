const basicPromise = new Promise(function(resolve, reject) {
    resolve('basicPromise');
})
const funcPromise = () => {
    return new Promise (function (resolve, reject) {
        resolve('funcPromise');
    })
}
const chainedPromise = (prom) => 
    new Promise(function (resolve, reject){
        resolve(prom)
    }).then(prom)

// const rejectedPromise = () => {
//     return new Promise(function(resolve, reject) {
//         reject('rejectedPromise');
//     });
// };
const rejectedPromise = () => new Promise(function(resolve,reject){
    //throw Error("rejectedPromise")
    // eslint-disable-next-line prefer-promise-reject-errors
    throw Error('rejectedPromise')
})

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };