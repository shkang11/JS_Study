/**
 * Array Function
 */

let iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
];

console.log(iveMembers);

// push() - mutable
console.log(iveMembers.push('JS')); // push함수의 리턴값은 추가한 후의 요소 개수임
console.log(iveMembers);

console.log('----------------------');

// pop() - mutable
console.log(iveMembers.pop()); // pop함수의 리턴값은 맨마지막 요소임
console.log(iveMembers);

console.log('----------------------');

// shift() - mutable
console.log(iveMembers.shift()); // shift함수의 리턴값은 맨첫번째 요소임
console.log(iveMembers);

console.log('----------------------');

// unshift() - mutable
console.log(iveMembers.unshift('안유진')); // unshift함수의 리턴값은 추가한 후의 요소 개수임
console.log(iveMembers);

console.log('----------------------');

// splice() - mutable
console.log(iveMembers.splice(0, 3)); // splice(첫번째인덱스, 삭제할 개수)
// splice함수의 리턴값은 잘라진 요소들의 배열을 반환
console.log(iveMembers);

iveMembers = [
  '안유진',
  '가을',
  '레이',
  '장원영',
  '리즈',
  '이서',
];

console.log(iveMembers);

// concat() - immutable
console.log(iveMembers.concat('JS')); // concat함수는 원래 배열과 추가한 요소를 더해 만든 새로운 배열 리턴
console.log(iveMembers); // 원래배열자체를 변경하지 않음

// slice() - immutable
console.log(iveMembers.slice(0, 3)); // 시작인덱스, 끝인덱스+1  만큼 자른 배열 반환
console.log(iveMembers);

// spread operator - immutable (원래array를 건들지 않음)
let iveMembers2 = [
  ...iveMembers,      // ...을 쓰면 리스트를 벗겨내고서 상위리스트에 펼쳐서 넣으라는 뜻 완전히 새로운 배열을 리턴함 immutable함
];    
console.log(iveMembers2);

let iveMembers3 = [
  iveMembers,         // 리스트 안에 리스트를 넣은셈
];
console.log(iveMembers3);

console.log('----------------');
let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);  
console.log(([      // immutable함을 보여줌
  ...iveMembers,
]) === iveMembers)

// join()            모든값들을 string으로 엮을 때 자주 사용
console.log(iveMembers.join()); // join함수는 디폴트로 콤마를 구분자로 리스트요소들을 붙여서 문자열로 반환
console.log(typeof iveMembers.join()); // string으로 반환
console.log(iveMembers.join('/')); // 슬래시를 구분자로 리스트 요소들을 붙여서 문자열로 반환
console.log(iveMembers.join(', ')); // 콤마+공백을 구분자로 리스트요소들을 붙여서 문자열로 반환

// sort() - mutable
// 오름차순
iveMembers.sort();
console.log(iveMembers);

// reverse() - mutable
console.log(iveMembers.reverse());  // 원배열을 바꿈
console.log(iveMembers);            // 확인가능함

let numbers = [
  1,
  9,
  7,
  5,
  3,
];
console.log(numbers);

// a, b를 비교했을 때 (a랑 b가 어떤 값이든 상관이 없음)
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1: -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b? -1: 1);
console.log(numbers);

// map() - immutable 원래array안건들고 새로운 array반환
// map은 리턴값들로 배열을 만들어 리턴하라.
// map함수는 배열의 모든 요소 순회 그리고 x에 그 요소값 각각이 들어간다.
// 리턴값들을 배열로 엮은 것이 반환됨
console.log('---------------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));
console.log(iveMembers.map((x) => {
  if(x === '안유진') {
    return `아이브: ${x}`;
  } else {
    return x;
  }
}));
console.log(iveMembers);  // 위에 map함수로 지지고 볶았어도 원래 배열은 바뀌지 않은 immutable한 모습

// filter() - immutable
// filter는 리턴값이 true가되는 x값들로 배열을 만들어 리턴하라.
// map()함수와 마찬가지로 배열의 요소 순회. 파라미터 x가 요소 하나하나이다.
// return값이 true인 x(요소)들만 남겨서 배열로 엮어 반환함
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => false));
console.log(numbers);
console.log(numbers.filter(x => x % 2 === 0));

// find()
// find는 리턴값이 true가 되는 첫번째 x값을 반환하라.
// find함수는 배열을 순서대로 순회하다가 return이 true인 x값을 달랑 하나를 찾는 것이다.
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
// findIndex는 리턴값이 true가 되는 첫번째 x값의 인덱스를 반환하라.
// find함수는 값을 찾았지만 findIndex는 그 찾은 첫번째 값의 인덱스다.
console.log(numbers.find((x) => x % 2 === 0));

// reduce()     모든값을 곱하거나, 더하거나, 나누거나 이런 행위 가능한 함수
console.log(numbers.reduce((p, n) => p + n, 0)); // reduce(콜백함수, 초기값) 으로 2개의 파라미터 필요
/**
 * numbers 배열은 [1, 8, 7, 6, 3] 이 들어있는 상태
 * p, n에서 n은 numbers배열의 모든 요소를 순회하게 된다.
 * p, n에서 p는 numbers배열을 loop하면서 더한 값을 계속 첫번째 파라미터 p에 넣어주면서 실행
 * 
 * 1. 초기값인 0이 p에 입력된다.
 * 2. numbers 배열의 첫번째 값인 1이 n에 입력된다.
 * 3. p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4. 3에서 반환한 값(1)이 p에 입력된다.
 * 5. 배열의 두번째 값인 8이 n에 입력된다.
 * 6. p + n 즉, 1 + 8의 결과값인 9가 반환된다.
 * 7. 6에서 반환한 값(9)가 p에 입력된다.
 * 8. numbers 리스트의 모든 값들을 다 순회할 때 까지 반복 결국 모든 값을 다 더한 25가 반환된다.
 */

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0));