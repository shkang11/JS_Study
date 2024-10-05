/**
 * Immutable Object
 */

const riku = {
  name: '리쿠',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  }, // object에서 getter나 setter 쓰면 콤마 붙여야함

  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
};

console.log(riku); // { name: '리쿠', year: 2004, age: [Getter/Setter] }

/**
 * Extensible: 프로퍼티 추가만 불가
 * writable: true, enumerable: true, configurable: true
 */
console.log(Object.isExtensible(riku)); // true 객체생성 시 디폴트이다.

riku['position'] = 'main rapper'; // position프로퍼티 추가
console.log(riku);  

// 확장 막기
Object.preventExtensions(riku); // 확장을 막음 (삭제는되고 추가는불가능하게함)

console.log(Object.isExtensible(riku)); // 확장 불가로 바뀜

riku['groupName'] = '엔시티 위시'; // 에러를 던지지는 않지만 추가 안됨
console.log(riku);                // 추가 처리 안되어 있음

// extension이 false 상태라 추가가 안되는데
// 그럼 삭제는 되냐?? 삭제는 된다
delete riku['position'];
console.log(riku);

/**
 * Seal
 */

const sakuya = {
  name: '사쿠야',
  year: 2007,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
}
console.log(sakuya);
console.log(Object.isSealed(sakuya)); // false 기본값은 false다

// 봉인하기
// writable: true, enumerable: true, configurable: false
// Seal은 configurable을 false로 바꾼 것과 같아서 writable이 true면 value변경과 writable을 false로 바꾸는 것은 가능(리버스는 불가)
// + 프로퍼티 추가, 삭제 불가한 특징을 가진다.
// 
Object.seal(sakuya);                  // 봉인 해버리기
console.log(Object.isSealed(sakuya)); // true 봉인 됨

sakuya['groupName'] = 'NCT WISH'; // 에러를 던지지는 않지만 추가가 안됨
console.log(sakuya);

delete sakuya['name'];  // 에러를 던지지는 않지만 삭제가 안됨
console.log(sakuya);

Object.defineProperty(sakuya, 'name', {
  value: 'JS',      
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(sakuya, 'name'));

/**
 * Freezed
 * 
 * writable: false, enumerable: true, configurable: false
 * 위의 Extensible, Seal기능을 추가하고도 writable까지 false로 만드는 기능이다.
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 * 즉, 프로퍼티 추가, 삭제, 변경 까지도 불가
 * 프로퍼티 어트리뷰트 암것도 손댈 수 없어 configurable이 false인데다가 writable도 false라서
 */

const chaewon = {
  name: '김채원',
  year: 2000,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
};

console.log(Object.isFrozen(chaewon));  // false 디폴트이다.
Object.freeze(chaewon);       // 동결 시키기
console.log(Object.isFrozen(chaewon));  // true 동결됨

chaewon['groupName'] = '르세라핌';  // 에러를 던지지는 않지만 추가 안됨
console.log(chaewon);

delete chaewon['name'];   // 에러를 던지지는 않지만 삭제 안됨
console.log(chaewon);     

// value 변경 불가
// TypeError: Cannot redefine property: name
// Object.defineProperty(chaewon, 'name', {
//   value: 'JS',

// });
console.log(Object.getOwnPropertyDescriptor(chaewon, 'name'));

const anTon = {
  name: '앤톤',
  year: 2004,
  wonBin: {
    name: '원빈',
    year: 2002,
  },
};

// 상위 object를 freeze
Object.freeze(anTon); 
console.log(Object.isFrozen(anTon));            // true
console.log(Object.isFrozen(anTon['wonBin']));  // false

/**
 * 중요!!
 * 
 * 상위 object를 preventExtensions or seal or freeze 한다고 해서
 * 하위 object도 적용되는것이 아니다!!!
 */