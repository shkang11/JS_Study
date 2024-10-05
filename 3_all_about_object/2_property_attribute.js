/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                     설정할 때 호출되는 함수로 구성된 프로퍼티
*                      getter와 setter 2가지 뿐
 */

const yeonJun = {
  name: '최연준',
  year: 1999,
};

// Object가 대문자로 시작? 생성자 함수 or 클래스 이다.
// 클래스이름으로 접근하는 함수는 static method이다.
console.log(Object.getOwnPropertyDescriptor(yeonJun, 'year'));

/**
 * js의 object는 단순히 key value pair만 존재하는 것이 아니라
 * 생각보다 굉장히 섬세한 객체이다
 * 객체 생성 시 다른 사람이 건들이지 못하게 섬세한 조작이 필요 하다 느낄 때
 * 아래와 같은 프로퍼티 어트리뷰트를 적극적으로 활용 하자!
 * 
 * 1) value - 실제 프로퍼티 값
 * 2) writable - 값을 수정 할 수 있는지 여부 false로 설정하면 프로퍼티 값을
 *               수정 할 수 없다.
 * 3) enumerable - 열거가 가능한 지 여부 for...in loop 등을 사용 할 수 있으면 
 *                 true를 반환
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한 지 여부를 판단
 *                   configurable이 false일 경우 프로퍼티 삭제나 어트리뷰트 변경 불가
 *                  예외) writable이 true인 경우, value 변경과 writable를 false로 변경 가능
 *                  (configurable === false && writable === true) value변경O, writable false로 변경O(리버스(false -> true)는 불가)
 *
 */

console.log(Object.getOwnPropertyDescriptor(yeonJun, 'name'));
console.log(Object.getOwnPropertyDescriptors(yeonJun)); // 모든 프로퍼티들의 애트리뷰트들이 출력됨

const sooBin = {
  // 데이터 프로퍼티
  name: '최수빈',
  year: 2000,

  // 엑세서 프로퍼티 
  // 클래스 내부 뿐만아니라 직접만드는 {} 객체안에서도 getter setter 사용가능
  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
};
console.log(sooBin);
console.log(sooBin.age); // getter 실행 변수에 접근하듯 접근

sooBin.age = 32;
console.log(sooBin.age);
console.log(sooBin.year);

console.log(Object.getOwnPropertyDescriptor(sooBin, 'age'));

// 일반적으로 키 값 추가 할 때
sooBin['height'] = 183;
console.log(sooBin);
console.log(Object.getOwnPropertyDescriptor(sooBin, 'height'));
// { value: 183, writable: true, enumerable: true, configurable: true }

// 키 값 추가 시 원하는 대로 프로퍼티 어트리뷰트를 재정의 하고 싶으면 아래와 같이 추가
Object.defineProperty(sooBin, 'keyWanted', {
  value: '원하는값',
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(sooBin);
console.log(Object.getOwnPropertyDescriptor(sooBin, 'keyWanted'));

// writable이 true일 때
sooBin.keyWanted = '변경값';
console.log(sooBin);

// 이미 존재하는 프로퍼티를 defineProperty로 재정의 했을 때 기존의 변경값들은
// 그대로 유지가 되고 변경한 곳만 변경됨을 확인 가능
Object.defineProperty(sooBin, 'keyWanted', {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(sooBin, 'keyWanted'));

console.log('-----------');
sooBin.keyWanted = '또변경값';
console.log(sooBin);      // 에러는 나지 않았지만 값이 변경되지 않음

/**
 * Enumberable
 */
console.log(Object.keys(sooBin)); // key값들의 array
// 열거기능이 돼서 가능한 것임
for(let key in sooBin) {
  console.log(key);
}

Object.defineProperty(sooBin, 'name', {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(sooBin, 'name'));
console.log('------------------'); 
console.log(Object.keys(sooBin));  // name key가 사라진 모습 왜? name프로퍼티의 enumerable을 false로 설정해놓아서 열거되지 못하게 막음
for(let key in sooBin) {
  console.log(key);
}

console.log(sooBin);  // 객체 출력에도 name이 안나옴 그럼 name이란게 사라졌나? 그건 아니다
console.log(sooBin.name); // 존재한다 다만 name을 열거해야 할 때만 안나올 뿐이다.

/**
 * Configurable
 */
Object.defineProperty(sooBin, 'keyWanted', {
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(sooBin, 'keyWanted'));

// 'keyWanted' 키의 프로퍼티 어트리뷰트인 configurable이 false인 상태에서 enumerable도 false로 하려 할 때
// TypeError: Cannot redefine property: keyWanted  프로퍼티 재정의가 불가하다고 에러 님
// configurable이 false 재정의 불가능이라 했기에 불가능 한것임
// Object.defineProperty(sooBin, 'keyWanted', {
//   enumerable: false,
// });


// configurable이 false라 재정의 불가지만
// 단, writable이 true면 value 변경과 writable 변경이 가능.
Object.defineProperty(sooBin, 'keyWanted', {
  value: '단, writable이 true면 value 변경과 writable 변경이 가능',
});
console.log(Object.getOwnPropertyDescriptor(sooBin, 'keyWanted'));

Object.defineProperty(sooBin, 'keyWanted', {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(sooBin, 'keyWanted'));


// configurable이 false인 상태에서 writable이 false인데 writable을 true로 변경 불가 
// TypeError: Cannot redefine property: keyWanted 재정의 불가함
// Object.defineProperty(sooBin, 'keyWanted', {
//   writable: true,
// });