/**
 * Static Keyword
 */
// class IdolModel {
//   name;
//   year;
//   static groupName = '키오프';

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   static returnGroupName() {
//     return '키오프';
//   }
// }
// const belle = new IdolModel('벨', 2004);  // 인스턴스객체에 static프로퍼티는 귀속되지 않음 즉, 안뜸
// console.log(belle);

// console.log(IdolModel.groupName); // static프로퍼티는 class자체에 직접 귀속됨.
// console.log(IdolModel.returnGroupName());


/**
 * factory constructor
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /** 
   * factory constructor는 static method로 구현
   * 템플릿화 해놓은 object나 array를 가지고
   * static method의 인자로 그 object이나 array를 넣으면 
   * 그 안(static method)에서 인스턴스를 만들어 반환 하는 것
   * 
   * 장점: 객체나 배열 등 다양한 입력 형식으로부터 인스턴스를 생성할 수 있다는 점.
   */


  // object로 부터 이 클래스의 인스턴스를 만들어 반환
  static fromObject(object) { // static method
    return new IdolModel(
      object.name,        // object 객체에는 name, year라는 key에 상응하는 value가 있어야한다.
      object.year,
    );
  }

  // 배열로 부터 이 클래스의 인스턴스를 만들어 반환
  static fromList(list) {
    return new IdolModel(
      list[0],
      list[1],
    );
  }
}

const belle2 = IdolModel.fromObject({
  name: '벨',
  year: 2004,
});
console.log(belle2);

const haneul = IdolModel.fromList([
  '하늘',
  2005,
]);
console.log(haneul);