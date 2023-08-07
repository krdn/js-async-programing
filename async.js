// 동기 프로그래밍
// function syncFunction() {
//   console.log('첫 번째 작업');
//   console.log('두 번째 작업');
//   console.log('세 번째 작업')
// }
// syncFunction();

function asyncFunction() {
  console.log('첫 번째 작업');

  setTimeout(() => {
    console.log('두 번째 작업');
  }, 1000)

  console.log('세 번째 작업')
}
asyncFunction();