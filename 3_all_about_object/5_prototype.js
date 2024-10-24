/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티
// class 강의에서 배울 때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype); // {} 값이 숨겨져 있음

console.dir(IdolModel.prototype, {
  showHidden: true,
});

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

// new 키워드로 함수의 객체를 생성할 때는 함수의 프로토타입 값을 객체의 __proto__에 집어 넣게 된다.
// 모든 __proto__는 실제 무언가의 prototype을 레퍼런스 하고있다.
// __proto__는 부모의 상속체인을 뜻함
// 프로토 타입 체인
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);
console.log(testObj.__proto__ === Object.prototype);
console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__); // null

console.log(yuJin.toString());  // 어떻게든 객체를 생성하게되면 공통적으로 사용할 수 있는 메소드인 toString()
console.log(Object.prototype.toString()); // yuJin객체는 IdolModel.prototype을 상속받음  yuJin.__proto__ === IdolModel.prototype
                                          // IdolModel.prototype은 Object.prototype을 상속받음 IdolModel.prototype.__proto__ === Object.prototype
                                          // 상속해주는 대상의 모든 프로퍼티들 상속받은 child가 사용할 수 있다
                                          // 고로 yuJin객체는 Object.prototype에 있는 기능까지 사용가능

function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function() {
    return `${this.name}이 인사를 합니다.`;
  }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2004);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello);
console.log(yuJin2.hasOwnProperty('sayHello')); // sayHello는 yuJin2의 고유 프로퍼티 라는 뜻

function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}

// 리소스를 효율적으로 사용해보자
IdolModel3.prototype.sayHello = function() {
  return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003); 
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello()); 
console.log(wonYoung3.sayHello());
// IdolModel3 생성자함수에 직접 sayHello()함수를 넣은게 아니고
// IdolModel3.prototype에 sayHello라는 함수를 넣음
// prototype은 실제 객체를 만들면 __proto__가 레퍼런스하는 객체이다.
// prototype은 부모의 역할
// 즉, sayHello는 상속이돼서 실행이 가능

console.log(yuJin3.sayHello === wonYoung3.sayHello); // true 리소스를 한공간에만 만들어 효율적으로 사용해보기
// true 나오는이유: IdolModel3.prototype에 sayHello()함수가 저장돼있고
//                 각각 객체별로 생성을 따로 하는게 아니기 때문 

console.log(yuJin3.hasOwnProperty('sayHello')); // false
// hasOwnProperty가 true면 실제 yuJin3 객체 안에 선언되어있는 값
//                  false면 상속받은 값
// false가 나온이유: yuJin3는 IdolModel3.prototype를 상속받고있는데 
// IdolModel3.prototype에 선언되어있는 sayHello() 프로퍼티를 자식에서 접근한 것일 뿐,
// yuJin3객체안에는 sayHello() 프로퍼티가 없다.


// 그럼 생성자 함수일 때 static메소드는 어떻게 정의 하느냐? 아래처럼 하면 됨
IdolModel3.sayStaticHello = function() {
  return `안녕하세요 저는 static method 입니다.`;
}
console.log(IdolModel3.sayStaticHello());

/**
 * Overriding - 프로퍼티 셰도잉 class에서 override와 같음
 */
function IdolModel4(name, year) {
  this.name = name;
  this.year = year;
  this.sayHello = function() {  // prototype에서 상속받은 sayHello함수를 인스턴스의 sayHello함수로 overriding
    return `안녕하세요 저는 인스턴스 메서드 입니다!`;
  }
}

IdolModel4.prototype.sayHello = function() {
  return `안녕하세요 저는 prototype 메서드 입니다!`;
}

const yuJin4 = new IdolModel4('안유진', 2003);
console.log(yuJin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) { // 위에도 IdolModel있는데 똑같이 선언한이유? 함수는 덮어써지기 때문에
  this.name = name;
  this.year = year;
}

// 프로토타입에 추가 인스턴스만들 때 모두 상속을 해주기 때문에 효율적으로 관리가능
IdolModel.prototype.sayHello = function() {
  return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;
  this.dance = function() {
    return `${this.name}가 춤을 춥니다.`;
  }
}

const gaEul = new IdolModel('가을', 2002);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(ray.sayHello());

// 객체를 생성 후 객체의 프로토타입 변경. setPrototypeOf(객체, 바꿀프로토타입)
// 함수의 프로토타입은 유지되고 객체가 연결됐었던 프로토타입과의 연결만 끊어짐
Object.setPrototypeOf(ray, IdolModel.prototype);  // 이미 생성된 ray라는 객체의 상속체인을 바꿔버림
console.log(ray.sayHello()); // 변경한 프로토타입의 함수를 실행
console.log(ray.constructor); // 모든 프로토타임은 constructor를 가진다, constructor는 함수를 가리키는 circular reference이다.
    // ray의 proto도 constructor가 있을 거라서 ray가 상속받아서 constructor값을 가져올 수 있다.
console.log(ray.constructor === FemaleIdolModel);
console.log(ray.constructor === IdolModel);
console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);
// ray 생성 시 원래 사용됐던 FemaleIdolModel.prototype이 IdolModel.prototype으로 변경되지는 않았다
// 즉, FemaleIdolModel.prototype은 그대로 유지됐지만 FemaleIdolModel.prototype과 ray 객체와의 연결만 끊긴것


// 함수의 프로토타입 변경 후 객체 생성
FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);