/**
 * Callback
 * 특정 작업이 끝나고 다시 불리는 함수
 */
function waitAndRun() {
  setTimeout(()=>{
    console.log('끝');
  }, 2000);
}

// waitAndRun();

// 콜백 지옥 예시
function waitAndRun2() {
  setTimeout(
    ()=>{
      console.log('1번 콜백 끝');
      setTimeout(()=>{
        console.log('2번 콜백 끝');
        setTimeout(()=>{
          console.log('3번 콜백 끝');
        }, 2000);
      },2000);
    },2000);
}
// waitAndRun2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('완료');
  }, 2000);
});


// then 메소드는 언제 실행되냐? resolve('완료');가 실행되면 then 메소드 실행됨
// timeoutPromise.then((res) => {
//   console.log('---then---');
//   console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
  setTimeout(()=>{
    // if(xxx) {
    //   resolve('성공');
    // } else {
    //   reject('에러');
    // }
    resolve('성공');
  }, seconds * 1000);
});

// getPromise(3)
//   .then((res) => {
//     console.log('--- first then ---');
//     console.log(res);
//   })
//   .catch((res)=>{
//     console.log('--- first catch ---');
//     console.log(res);
//   })
//   .finally(()=>{
//     console.log('--- finally ---');
//   })

// resolve를 실행하면 then을 실행할 수 있고
// reject를 실행하면 catch를 실행할 수 있다.
// finally는 resolve가 실행되든지 reject가 실행되든지 상관없이 무조건 실행해야한다.

// Promise.all()하면은 가장느린함수 기준으로 then함수 또는 catch함수가 불린다
// 만약 아래 promise 세개가 동시에 실행되지 않고 순서대로 실행된다면 6초를 기다려야했는데
// 아래는 4초밖에 안걸림 왜? 실행은 전부 동시에 되기 때문
Promise.all([
  getPromise(1),
  getPromise(4),
  getPromise(1),
]).then((res) => {
  console.log(res);
});