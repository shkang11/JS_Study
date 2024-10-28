/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical
 * environment within which that function was declared
 * 
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 * 
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure 라고 한다."
 */

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber();
}

// console.log(number);
// console.log(getNumber());

// closure예시
//"상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure 라고 한다."

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber;
}

const runner = getNumber(); // getNumber()의 execution context가 끝이나고 === getNumber가 콜스택에서 사라지고 난 후에
console.log(runner);
console.log(runner());  // innerGetNumber()실행

// 데이터 캐싱 할 때 클로저 많이 쓰임

/**
 * 1) 데이터 캐싱
 */
function cacheFunction() {
  // 바로 아래줄 계산이 매우 오래걸린다는 가정을 했을 때 클로저를 써서 훨씬 효율적으로 계산 가능
  var number = 10 * 10;

  function innerCacheFunction(newNumb) {
    return number * newNumb;
  }

  return innerCacheFunction;
}
const runner2 = cacheFunction(); // closure 덕분에 오래걸리고 복잡한 계산을 딱 한번만 하면됨
console.log(runner2(10));       // number라는 값을 Closure에서 기억해놓기 때문에 새롭게 준 인자와 곱하기만 하면됨
console.log(runner2(20));

/**
 * 
 * 2) 데이터 캐싱(반복적으로 특정값을 변경 해야 할 때)
 */
function cacheFunction2() {
  // 클로저 덕분에 아랫줄 대입을 한번만 하게됨
  let number = 99;

  function increment() {
    number++;           // 클로저 때문에 ++하게된 number를 기억하고있음
    return number;
  }
  return increment;
}

const runner3 = cacheFunction2(); // 클로저 덕분에 number=99 딱한번넣고 사용할 수있음
console.log(runner3());           // 클로저가 number를 기억하고있음
console.log(runner3());           // 클로저가 number에 1씩 더한 값을 기억하고 있음
console.log(runner3());           // 클로저가 number에 1씩 더한 값을 기억하고 있음
console.log(runner3());           // 클로저가 number에 1씩 더한 값을 기억하고 있음
console.log(runner3());           // 클로저가 number에 1씩 더한 값을 기억하고 있음

/**
 * 3) 정보 은닉
 */

function Idol(name, year) {
  this.name = name;
  
  var _year = year;

  this.sayNameAndYear = function() {
    return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
  }
}
const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear()); // 클로저가 기억하는 _year값이 출력됨
console.log(yuJin.name);
console.log(yuJin._year); // 객체로는 접근할 수 없음 undefined