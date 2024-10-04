/**
 * Class Keyword
 */

class IdolModel {
  name; // JS에서 속성정의는 optional이다.
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // 메소드: 클래스 내부의 함수를 메소드라고 부른다.
  // 메소드는 function 키워드 없이 사용자가 지정한 이름으로 정의 한다.
  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yuJin.name);    // class로 생성한 instance는 객체(object)다 .으로 접근가능
console.log(yuJin.year);
console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log(typeof IdolModel); // class는 function 함수로 인식
console.log(typeof yuJin);     // class로 생성한 instance는 object객체다.