/**
 * Super and Override
 * 
 * super키워드: 부모클래스를 뜻함
 * 상속받은 속성(변수)을 가져올땐 super키워드 사용X, this 키워드 사용O
 * 상속받은 메소드나 생성자를 가져올 땐 super키워드 사용O
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  position;

  /** 
   * 상속은 속성, 메소드, 생성자 등등을 상속받는데
   * 자식클래스에서 만든 속성때문에 생성자를 덮어써야 한다면 아래처럼 또 생성하면 됨
   * 근데 그 안에서 기존생성자(부모클래스의생성자)를 사용하고 싶으면
   * super키워드를 쓰면됨
   */
  // 생성자 오버라이딩
  constructor(name, year, position) {
    super(name, year);          // super는 부모클래스를 의미
    this.position = position;
  }

  // 메소드 오버라이딩
  sayHello() {      
   // return `안녕하세요 ${this.name}입니다. ${this.position}을 맡고있습니다.`
   return `${super.sayHello()} ${this.position}을 맡고있습니다.`
  }
}

const belle = new FemaleIdolModel('벨', 2004, '메인보컬');
console.log(belle);

const natty = new IdolModel('나띠', 2002);
console.log(natty);
console.log(natty.sayHello());
console.log(belle.sayHello());  