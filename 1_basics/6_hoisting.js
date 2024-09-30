/**
 * Hoisting
 */
console.log('Hello');
console.log('World');

// console.log(name); 
// var name = 'JS';
// console.log(name);

/**
 * Hoisting(호이스팅)은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 * 
 * js에서 변수 선언만 달랑 있는 경우 undefined로 값이 자동 할당됨
 * var, let, const는 모두 호이스팅O
 * var는 값 할당 전 변수 호출O 그러면 undefined라는 값이 들어있겠죠?
 * let, const 값 할당 전 변수 호출X -> 에러로써 막아줌 cannot access 변수명 before initialization
 */

// var name;
// console.log(name);
// name = 'JS';
// console.log(name);

console.log(yuJin);  // yuJin이 코드의 최상단으로 이동되는 것처럼 됨(호이스팅) 그래서 지금은 할당되기전 상태로 yuJin이 undefined임 근데 var와 다르게 let은 할당되기전 호출을 에러로써 막아줌 에러메시지가 Cannot access 'yuJin' before initialization
const yuJin = '안유진'; // 변수 yuJin이 아예 선언자체가 없었다면 바로 위 코드의 에러메시지가 yuJin is not defined 이다. 고로 변수가 아무곳이나상관없이 선언돼있고 안돼있고에 따라 에러메시지가 다른 걸 보니 let도 호이스팅이 된다는 증거
// const, let 둘다 결과 똑같음