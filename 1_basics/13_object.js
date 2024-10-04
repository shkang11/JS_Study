/**
 * Object 객체
 */

// key : value pair
let yuJin = {
  name: '안유진',
  group: '아이브',
  dance: function() {
    return `${this.name}이 춤을 춥니다.`;  
  }
};
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

// 이런식으로도 키에 해당하는 밸류를 가져올 수 있음
const key = 'name';
console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function() {
    return `${this.name}이 춤을 춥니다.`;
  }
};
console.log(yuJin2);
console.log(yuJin2.dance());

// Object의 mutable함을 보여줌
yuJin2['group'] = 'JS';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * 1) const 로 선언한 변수는 바꿀 수 없음 (당연함)
 * 2) 객체 안의 프로퍼티나 메서드를 변경 할 수 있다. - mutable
 */

const wonYoung = {
  name: '장원영',
  group: '아이브',
};
console.log(wonYoung);
// wonYoung = {}; 당근 불가 const로 선언된 변수니까

wonYoung['group'] = 'JS';
console.log(wonYoung); // mutable함을 보여줌 

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung)); // Object객체의 key값들의 배열로 반환

/**
 * 모든 밸류값 다 가져오기
 */
console.log(Object.values(wonYoung)); //Object객체의 value값들의 배열로 반환

const name = '안유진';
const yuJin3 = {
  name, // name: name 과 같음
};
console.log(yuJin3);