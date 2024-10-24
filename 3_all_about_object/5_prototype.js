/**
 * Prototype
 */
const testObj = {};

// __proto__: 모든 객체에 존재하는 프로퍼티, class의 부모 클래스에 해당함
console.log(testObj.__proto__); 

console.dir(testObj.__proto__, {
  showHidden: true,
});

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype); 
 
console.dir(IdolModel.prototype, {
  showHidden: true,
});

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

// new 키워드로 함수의 객체를 생성할 때는 함수의 프로토타입 값을 객체의 __proto__에 집어 넣음
// 모든 __proto__는 실제 무언가의 prototype을 레퍼런스 하고있음
// __proto__는 부모의 상속체인
// 프로토 타입 체인
const belle = new IdolModel('벨', 2004);
console.log(belle.__proto__);
console.log(belle.__proto__ === IdolModel.prototype);
console.log(testObj.__proto__ === Object.prototype);
console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__); // null

console.log(belle.toString());  // 어떻게든 객체를 생성하게 되면 공통적으로 사용할 수 있는 메소드인 toString()
// belle 객체는 IdolModel.prototype을 상속받음
// IdolModel.prototype은 Object.prototype을 상속받음
// 고로 belle 객체는 Object.prototype을 상속받음
// 상속해주는 대상의 모든 프로퍼티들을 상속받은 child가 사용할 수 있다.
// 고로 belle객체에서 Object.prototype에 있는 기능 사용가능
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
  this.name = name;
  this.year = year;
  this.sayHello = function() {
    return `${this.name}이 인사를 합니다.`;
  }
}

const haneul2 = new IdolModel2('원하늘', 2005);
const natty2 = new IdolModel2('나띠', 2002);

console.log(haneul2.sayHello());
console.log(natty2.sayHello());
console.log(haneul2.sayHello === natty2.sayHello); // false
console.log(natty2.hasOwnProperty('sayHello')); // sayHello함수가 natty2 객체의 고유 프로퍼티 이냐? 응
// hasOwnProperty 프로퍼티는 natty2 객체에 있는게 아니라 natty2의 proto인 IdolModel.prototype의 proto인 Object.prototype에 정의된
// 프로퍼티 이므로 상속을 받은 자손에게서 이걸 사용할 수 있음

function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}

// 리소스를 효율적으로 사용하기 (prototype으로 상속을 이용하여)
IdolModel3.prototype.sayHello = function() {
  return `${this.name}이 인사를 합니다.`;
}

const belle3 = new IdolModel3('벨', 2004);
const haneul3 = new IdolModel3('하늘', 2005);

console.log(belle3.sayHello());
console.log(haneul3.sayHello());
// IdolModel3 생성자 함수에 sayHello()를 넣은게 아니고 IdolModel3.prototype에 sayHello()함수 넣음
// prototype은 실제 객체를 만들면 __proto__가 레퍼런스 하는 객체이다.
// prototype은 부모 역할
// 즉, sayHello함수는 상속이 돼서 실행이 된 것이다
console.log(belle3.sayHello === haneul3.sayHello); // true
// IdolModel3.prototype에 sayHello()함수가 저장돼있고 각각 객체별로 따로 생성하는게 아니기 때문

console.log(belle3.hasOwnProperty('sayHello')); // false
// hasOwnProperty가 true면 실제 belle3객체 안에 선언되어있는 값
//                  false면 상속받은 값
// false 가 나온 이유 belle3객체는 IdolModel3.prototype을 상속받고있는데 
// IdolModel3.prototype에 선언돼있는 sayHello() 프로퍼티를 자식에서 접근 한 것이기 때문 
// 즉, belle3객체 내에 sayHello()프로퍼티가 없고 부모인 IdolModel.prototype에 sayHello()프로퍼티가 있다.

// 생성자 함수에서 static메소드 정의하는 법
IdolModel3.sayStaticHello = function() {
  return `안녕 난 static이야, static이니 당연히 일반 프로퍼티들을 가져올 수 없겠지!`
}
console.log(IdolModel3.sayStaticHello());

// Overriding - 프로퍼티 셰도잉 === class에서의 override

function IdolModel4(name, year) {
  this.name = name;
  this.year = year;
  this.sayHello = function() {
    return `안녕하세요 저는 인스턴스 메서드 입니다!`; // prototype에서 상속받은 sayHello()함수를 인스턴스의 sayHello함수로 overriding
  }
}

IdolModel4.prototype.sayHello = function() {
  return `안녕하세요 저는 prototype 메서드 입니다!`;
}

const belle4 = new IdolModel4('벨', 2004);
console.log(belle4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function IdolModel(name, year) { // 위에도 IdolModel있는데 똑같이 선언한이유? 함수는 덮어써지기 때문에
  this.name = name;
  this.year = year;
}

// 프로토타입에 추가 인스턴스(객체)생성 시 모두 상속을 해주기 때문에 효율적 관리 가능. 즉, 객체마다 따로 생성되지 않아 메모리가 절약
IdolModel.prototype.sayHello = function() {
  return `${this.name}이 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;
  this.dance = function() {
    return `${this.name}가 춤을 춥니다.`;
  }
}

const natty = new IdolModel('나띠', 2002);
const haneul = new FemaleIdolModel('하늘', 2005);

console.log(natty.__proto__);
console.log(natty.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(natty) === IdolModel.prototype);

console.log(natty.sayHello());
console.log(haneul.dance());
console.log(Object.getPrototypeOf(haneul) === FemaleIdolModel.prototype);
// console.log(haneul.sayHello());

// 위처럼 객체를 생성 한 후 객체의 프로토에 해당하는 함수 프로토타입을 변경할 때 setPrototypeOf(객체, 바꿀 프로토타입)
// 기존의 함수의 프로토타입은 유지되고 객체가 연결됐었던 프로토타입과의 연결만 끊어짐
Object.setPrototypeOf(haneul, IdolModel.prototype); // 이미 생성된 haneul라는 객체의 상속체인을 바꿈
console.log(haneul.sayHello()); // 부모가 바뀌어서 부모의 메소드인 sayHello()함수를 실행
                                // 모든 prototype은 constructor를 가진다, 그리고 constructor는 함수를 가리키는 circular reference이다.
console.log(haneul.constructor); // constructor는 사실 부모가된 IdolModel.prototype의 프로퍼티임 그러나, 상속법칙상 자식에서 부모의 것을 접근할 수 있음
console.log(haneul.constructor === IdolModel);
console.log(haneul.constructor === FemaleIdolModel);
console.log(natty.constructor === IdolModel);
console.log(Object.getPrototypeOf(haneul) === FemaleIdolModel.prototype); // false
console.log(Object.getPrototypeOf(haneul) === IdolModel.prototype);     //true 부모바꿔서 이게 true임
// haneul 생성 시 존재하는 FemaleIdolModel.prototype이 IdolModel.prototype으로 변경된게 아니라
// FemaleIdolModel.prototype은 유지 됐지만 FemaleIdolModel.prototype과 haneul 객체와의 연결만 끊기고 IdolModel.prototype과 haneul과의 연결이 생긴것

/**
 * 함수의 프로토타입을 변경 후 객체 생성
 */
FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype);         // true
console.log(eSeo.constructor);                                          // [Function: IdolModel]