/**
 * Async theory
 */
// 동기 프로그래밍 예제
// function longWork() {
//   const now = new Date();

//   /**
//    * milliseconds since epoch
//    * 1970년도 1월 1일 부터 지금 코드가 실행되는 순간까지의 시간을
//    * 밀리초로 반환
//    */
//   const milliseconds = now.getTime();
//   const afterTwoSeconds = milliseconds + 2 * 1000;

//   while(new Date().getTime() < afterTwoSeconds) {

//   }
//   console.log('완료');
// }

// console.log('Hello');
// longWork();          // [동기]하나의 스레드를 2초간 지금 막고 있음
// console.log('World'); // 2초후에 실행됨

// 하나의 스레드에 memory heap과 call stack(execution context) 존재
// 동기함수는 call stack에 쌓이지만
// 비동기함수는 call stack에 올라 간 후 Task Queue/Event Queue로 옮겨져서
// call stack을 막고있지 않게 된다.
// Event Loop는 자바스크립트 런타임이 생성되는 순간에 생성된다.
// Event Loop 는 Task Queue를 계속 바라보면서 이 안에서 실행이 종료가 된 함수가 있는지 계속 확인
//              추가로 call stack이 비어있는지 확인
//              Queue안의 함수가 종료(비동기 작업이 끝남)됐을 때 콜스택이 비었다면 
//              이벤트 루프가 종료된 함수를 다시 콜스택으로 옮겨준다.
// 그러면 다시 콜스택으로 올라가면서 나머지 동기로 실행해야 될 작업이 실행되게 됨
// 실행완료 되면 콜스택에서 사라진다!
// 비동기 예제
function longWork() {
  // setTimeout함수는 비동기로 실행되는 함수
  // 
  setTimeout(()=>{
    console.log('완료');
  }, 2000); // setTimeout(함수, 밀리초)  몇초간 기다렸다 함수를 실행할지 정하는 함수
}

console.log('Hello');
longWork();  
console.log('World');
