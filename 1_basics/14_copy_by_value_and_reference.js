/**
 * copy by value 값에 의한 전달 -> 즉, '값'을 변수에 담음
 * copy by reference 참조에 의한 전달 -> 즉, 객체가 생성된 '주소값'을 변수에 담음
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 * ex) 문자열은 변수에 그 값자체 들어감
 * ex) 객체는 변수에 객체가 만들어진 주소값이 들어감
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('---------------');
console.log(original);
console.log(clone);

let originalObj = {
  name: '안유진',
  group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('---------------');

originalObj['group'] = 'JS';

console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
  name: '강ㅇㅇ',
  group: '집',
};

cloneObj = {
  name: '강ㅇㅇ',
  group: '집',
};
console.log(originalObj === cloneObj);

/**
 * Spread Operator
 */
const yuJin1 = {
  name: '안유진',
  group: '아이브',
};

const yuJin2 = yuJin1;
const yuJin3 = {
  name: '안유진',
  group: '아이브',
};

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin2); // false

/**
 * Spread Operator (배열과 객체 둘다 가능)
 * ...(Spread Operator)은 배열이면 []를제거하고, Object이면 {}를 제거하여 그 안의 값을 뽑아 새로운 배열 or Object를 만들어 반환 한다고 생각하면 됨
 */
const yuJin4 = {  
  ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3);

const yuJin5 = {
  year: 2003,
  ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
  name: 'JS',
  ...yuJin3,    // yuJin3객체에 name키에대한 값이 있으므로 덮어지게된다.
};
console.log(yuJin6);

const yuJin7 = {
  ...yuJin3,
  name: 'JS',   // yuJin3객체에 name키에대한 값이 있는데 그밑인 이줄에서 덮어쓰기가 일어남
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [
  10,
  ...numbers,
  100,
];
console.log(numbers2);  // [ 10, 1, 3, 5, 100 ]
