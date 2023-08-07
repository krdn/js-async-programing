/**
 * Promise: 비동기 작업을 처리하는 객체!
 * resolve: 정상적인 결과 값을 반환 (이행)
 * rejejct: 정상적이지 않았던 값을 반환 (거부)
 */
const myPromise = new Promise((resolve, reject) => {
  // 비동기 작업 처리~!
  setTimeout(() => {
    const text = prompt('"hello"를 입력해줘! 그러면 선물을 줄게!');
    if (text === 'hello') {
      resolve('💻');
    } else {
      reject('error message!');
    }
  }, 2000)
});

/**
 * 상태
 * - 대기 (pending): 비동기 작업을 처리하는 중...
 * - 이행 (fulfilled): 비동기 작업이 정상적으로 처리가 된 경우!
 * - 거부 (rejected): 비동기 작업이 정상적으로 처리되지 않은 경우!
 * 
 * 메소드
 * - then(): 이행되었을 때
 * - catch(): 거부되었을 때
 * - finally(): 이행되거나 거부되더라도 항상!
 */
myPromise
  .then((result) => {
    console.log('result: ', result)
  })
  .catch((err) => {
    console.log('err: ', err)
  })
  .finally(() => {
    console.log('finally~!')
  })