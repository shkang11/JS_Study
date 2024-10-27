/**
 * Scope
 */
var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}
// levelOne();

function levelOne() {
  var numberOne = 40;

  console.log(numberOne); // 가장가까운 스코프의 변수를 가져오기 때문
}
// levelOne();
console.log(numberOne);

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;
    console.log(`levelTwo numberTwo : ${numberTwo}`);
    console.log(`levelTwo numberOne : ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne(); // 모든 선언은 가장 가까운 스코프에있는 선언부터 활용하게 됨
            // ex) 현재 스코프에 없으면 상위 스코프 ... 거기도 없으면 글로벌 스코프에서 찾음

console.log(numberOne);
// console.log(numberTwo);    하위 스코프에는 접근 할 수 없음

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.
 */

let numberThree = 3;

function functionOne() {
  let numberThree = 100;

  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}
functionOne();


/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */

// var키워드의 문제점
// for, while, if문은 새로운 scope를 생성X
// function에서만 새로운 scope 생성O
var i = 999;

for(var i = 0; i < 10; i++) { // var키워드에 for문이라 새로운 scope생성이 안됨
  console.log(i);             // 그래서 글로벌scope의 i에게 적용이됨
}
console.log(`i in global scope : ${i}`); // 10 

i = 999;

// block level scope
// {}괄호가 들어가는 모든 상황에서 let과 const 썼을 때는 새로운 스코프를 생성해낸다!!
for(let i = 0; i < 10; i++) { // let키워드와 const 키워드를 사용하면 함수 뿐만아니라 
  console.log(i);             // for, while, if같은 blocl level scope도 만들어낸다.
}
console.log(`i in global scope : ${i}`);