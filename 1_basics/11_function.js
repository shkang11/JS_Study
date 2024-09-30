/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환 받고 싶다면 어떻게 해야 할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate() {
  console.log((2 * 10 / 2 % 3).toString());
}
// calculate();

function calculate(number) {// 두번째로 선언하면 덮어쓰기가 된다. var키워드와 같은점이다
  console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의를 parameter라고 한다
 * 
 * 실제 입력하는 값은 argument라고 한다
 */
calculate(4);
calculate(5);

function multiply(x, y) {
  console.log(x * y);
}

multiply(2, 4);;
multiply(2);                    // 덮어쓰여진거로 먹혀야됨
function multiply(x, y = 10) {  // 덮어쓰기가됨
  console.log(x * y);
}
multiply(2, 4);
multiply(2);

/**
 * 반환받기
 * return 받기
 */

console.log('--------------');
function multiply(x, y) {     // 선언을 덮어씀
  return x * y;
}
const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수 
 * 
 * arrow 함수 형태들
 * (파라미터) => { 바디 }
 *  파라미터 => 리턴값              파라미터1개라 ()안침, { return } 만나 생략 됨
 *  (파라미터2개이상) => 리턴값      { return } 만나 생략 됨
 */
const multiply2 = (x, y) => {
  return x * y;
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;  // 중괄호와 return이 만나면 { return } 삭제 가능
console.log(multiply3(4, 5));

const multiply4 = x => x * 2;   // parameter가 1개면 () 삭제가능
console.log(multiply4(2));

                                                            //  multiply5()    multiply5()       multiply5()()     multiply5()()     multiply5()()()
const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`; // 첫 함수 실행 -> 두번째 함수반환 -> 두번째 함수 실행 -> 세번째 함수반환 -> 세번째 함수 실행 -> 문자열 반환
console.log(multiply5(1)()(null)); // 최종 템플릿 리터럴 반환을 위해 총 함수 호출 3번 필요
console.log(multiply5(2)(5)(7)); // 최종 템플릿 리터럴 반환을 위해 총 함수 호출 3번 필요

function multiply6(x) {
  return function(y) {
    return function(z) {
      return `x: ${x} y: ${y} z: ${z}`;
    }
  }
}
console.log(multiply6(3)(4)(5));
console.log(multiply6(3)(null)());

const multiplyTwo = function(x, y) {
  return x * y;
}
console.log(multiplyTwo(4, 5));

const multiplyThree = function(x, y, z) {
  console.log(arguments); // 입력으로 들어온 인수들을 함수내부에서 출력해보고싶을 때 js가 지원하는 arguments라는 키워드 사용
  // 윗줄 출력결과: [Arguments] { '0': x값, '1': y값, '2': z값 }
  return x * y * z;
}

console.log('------------');
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function(...arguments) {
  console.log(arguments);
  return Object.values(arguments).reduce((a, b) => a*b, 1); // arguments의 모든값들 즉, 실제 입력된 인수들을 전부 하나씩 곱해서 반환
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));


// 함수를 바로 실행시키고 끝내려 할 때 (일회용으로 쓰고싶을 때)


// immediately invoked function 즉시 실행 함수
// 함수 이름이 없고 함수선언을 소괄호로 둘러 싼다음 실행하면 된다.
(function(x, y) {
  console.log(x * y);
})(4, 5);       

console.log(typeof multiply);   // function
console.log(multiply instanceof Object); // multiply함수가 Object인가?