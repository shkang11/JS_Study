/**
 * Getter and Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * getter 
   * get 키워드를 이용해서 정의
   * 함수처럼 (){} 사용하여 정의
   * 하지만 함수가 아니다!!!
   * 
   * getter의 역할
   * 1) 데이터를 가공해서 새로운 데이터를 반환 할 때
   * 2) private한 값을 반환 할 때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  /**
   * setter - 지금은 잘 사용하지 않음 왜? immutable 함을 해치기 때문에
   * set 키워드를 이용해서 정의
   */
  set setName(name) {
    this.name = name;
  }
}
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear); // getter가 클래스 내에서 함수처럼 정의됐지만 함수가 아니고 
                                // 프로퍼티를 접근하듯이 사용하면 됨

yuJin.setName = '장원영'; // setter도 마찬가지로 프로퍼티에 접근하듯이 사용하면 됨
                          // setter는 = 뒤의 값이 파라미터 안으로 들어가게 된다.
console.log(yuJin);


// getter가 의미 있는 순간: private 속성에 접근 가능

class IdolModel2 {
  #name;    // #은 private 속성을 나타냄
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); // 인스턴스 출력 시 private 속성의 값은 숨김 private은 외부에서 접근 불가
console.log(yuJin2.name);   // getter로 private 값에 접근 
yuJin2.name = 'JS';         // setter실행  = 뒤의 값이 파라미터로 들어감, setter도 private한 값에 대입 가능하니까 이게 가능
console.log(yuJin2.name);   // getter실행