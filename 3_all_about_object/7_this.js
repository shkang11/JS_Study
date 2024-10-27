/**
 * this
 * 
 * JS는 Lexical Scope을 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가 됨
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정 됨
 *  
*/

const testFunction = function() {
  return this;
}

console.log(testFunction()); // 일반 함수 실행(new 없이 호출) 시 this키워드가 global 객체에 맵핑됨
console.log(testFunction() === global);

const yuJin = {
  name: '안유진',
  year: 2003,
  sayHello: function() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}
console.log(yuJin.sayHello());

function Person(name, year) {
  this.name = name;
  this.year = year;
  this.sayHello = function() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}

const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello());


// 객체의 매서드로 가장 상위레벨에 함수선언을 하면 this가 자동으로 실행하는 대상 객체로 맵핑되지만
// 만약 그외의 위치에 함수선언하면 그 함수의 this는 무조건 global 객체에 맵핑된다.
Person.prototype.dance = function() {
  function dance2() {
    return `${this.name}이 춤을 춥니다.`;  // undefined가 춤을 춥니다.
  }
  return dance2();
}
console.log(yuJin2.dance());  // prototype에 함수정의 해도 그안의 this키워드는 실행하는 대상의 객체인 yuJin2로 맵핑이됨

/**
 * this 키워드가 어떤걸 가르키냐는 3가지만 기억하면 됨!
 * 
 * 1) 일반 함수 호출할 땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
 * 2) 메서드로 호출 할 땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다. 
 */

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName() {
  return this.name;
}

console.log(returnName());

const yuJin3 = {
  name: '안유진',
};

// returnName()함수의 this키워드가 yuJin3객체에 맵핑되게 하고싶을 땐
console.log(returnName.call(yuJin3)); // returnName의 this키워드를 yuJin3객체에 binding해서 call하겠다
console.log(returnName.apply(yuJin3));

/**
 * this 키워드 지정하기
 * call, apply, bind함수
 * 원하는 함수의 this를 원하는 객체에 binding
 */

/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply -> 아규먼트를 리스트로 입력해야한다.
 * 
 * call과 apply는 실행하는 순간 바로 함수가 실행되는 것임
 */

function multiply(x, y, z) {
  return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 1, 2, 3));
console.log(multiply.apply(yuJin3, [1, 2, 3]));

/**
 * bind() -> 컴마를 기반으로 아규먼트를 순서대로 넘김
 * bind는 this를 binding만 해놓고
 * 바로 실행되는 것이 아니라 bind가 된 함수를 반환을 해주기 때문에
 * 바인드만 해놓고 나중에 실행하는 것이다.
 */

const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());