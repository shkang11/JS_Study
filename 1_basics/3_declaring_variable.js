/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = 'JS';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경 할 수 있다.
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = 'JS'; TypeError: Assignment to constant variable.

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당
 */
var name = 'JS';
console.log(name);

let friend; // 선언만 됨. var이나 let은 이렇게 선언만 하면 값으로 undefined가 들어간다.
console.log(friend); // undefined가 출력됨. 변수가 선언은 됐으나 값이 정의되지 않았다는 뜻

// const friend2; 'const' declarations must be initialized.