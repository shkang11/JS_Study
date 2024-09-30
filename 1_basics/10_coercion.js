/**
 * 타입 변환 - coercion
 * Type Conversion
 * 
 * 1) 명시적 - 좋음
 * 2) 암묵적 - 쓰지 마셈
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적 
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); // 문자열과 숫자끼리의 '덧셈'만 문자열로 바뀌고 나머지 모두는 숫자로 바뀜
console.log('98' * 2);
console.log('98' - 2);
console.log('----------');

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

console.log('----------');

/**
 * Boolean 타입으로의 변환
 */

console.log(!!'xsfadfas');
console.log(!!'');
console.log(!!0);
console.log(!!'0');
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);
console.log(!!{}); // object 는 비어있든아니든 무조건 true
console.log(!![]); // array도 object로 비어있든 아니든 무조건 true

/**
 * 1) 비어있는 string
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환
 */