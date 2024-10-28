/**
 * Async / Await
 */
const getPromise = (seconds) => new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('성공'); 
  }, seconds * 1000);
});

// promise를 then이나 catch나 finally로 체이닝 하는 방법 말고도
// async, await을 써서 비동기 프로그래밍을 할 수 있다.
// 그리고 이게 현대에 더 많이 사용되는 방법이다.

async function runner() {
  try {
    const result1 = await getPromise(1); // await을 했을 때 스레드가 막히지 않음
    console.log(result1);
    const result2 = await getPromise(2); // Promise앞에다가 await를 붙여 기다릴수있다
    console.log(result2);
    const result3 = await getPromise(1);  // await는 Promise로 만든 함수에만 붙일 수 있다
    console.log(result3);
  } catch(e) {
    console.log('--- catch e ---');
    console.log(e);
  } finally {
    console.log('--- finally ---');
  }

}

runner();
