/**
 * 1] Promise.resolve()
 */

// const myPromise = Promise.resolve(100);

// console.log(myPromise)
// myPromise
//   .then(value => value / 2)
//   .then(value => value / 10)
//   .then(console.log)


/**
 * 2] Promise.reject()
 */
// const myPromise = Promise.reject('error message');
// myPromise
//   .catch(console.error);
// function fetchData() {
//   return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//     .then(response => response.json())
//     .then(data => {
//       if (data.length === 5) {
//         return Promise.reject('데이터가 없습니다.')
//       }
//       return data;
//     })
// }
// fetchData()
//   .then(console.log)
//   .catch(error => console.log('### error: ', error))

/**
 * 3] Promise.all()
 */
// const promise1 = Promise.resolve(1000);
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(3000)
//   }, 3000)
// })
// const promise3 = fetch('https://jsonplaceholder.typicode.com/todos?_limit=5&_delay=2000')
// .then(response => response.json())
// const promise4 = Promise.reject('Fail!')

// Promise.all([promise1, promise2, promise3, promise4])
//   .then(console.log)
//   .catch(console.error)

/**
 * 4] Promise.allSettled()
 */
// Promise.allSettled([promise1, promise2, promise3, promise4])
//   .then(console.log)

/**
 * 5] Promise.any()
 * 
 */
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3000)
  }, 3000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(500)
  }, 500)
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1000)
  }, 1000)
})
// Promise.any([promise1, promise2, promise3])
//   .then(console.log)
//   .catch(console.error)

/**
 * 6] Promise.race()
 */

Promise.race([promise1, promise2, promise3])
  .then(console.log)
  .catch(console.error)