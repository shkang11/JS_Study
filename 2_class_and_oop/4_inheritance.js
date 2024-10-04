/**
 * Inheritance
 * 상속 객체들 간의 관계를 구축하는 방법
 * 수퍼클래스(부모클래스)라는 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel{  // FemaleIdolModel은 IdolModel을 상속받는다. 속성, 생성자, 메소드를 상속받음. 
  dance() {                               // 그래서 IdolModel에 있는 생성자를 사용할 수 있다.
    return `여자 아이돌이 춤을 춥니다.`;
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return `남자 아이돌이 노래를 부릅니다.`;
  }
}

const belle = new FemaleIdolModel('벨', 2004);
console.log(belle);

const wonbin = new MaleIdolModel('원빈', 2002);
console.log(wonbin);

console.log(belle.dance());
console.log(belle.name);

console.log(wonbin.sing());
console.log(wonbin.year);

const parent = new IdolModel('부모님', 1930);
console.log(parent);
console.log(parent.name);
// console.log(parent.dance()); // 부모는 자식의 것에 접근을 못한다. (당연한 것임 부모는 상속해주는거지 상속받는게 아님) 

console.log(belle instanceof IdolModel);
console.log(belle instanceof FemaleIdolModel);
console.log(belle instanceof MaleIdolModel);

console.log('---------------');
console.log(wonbin instanceof IdolModel);
console.log(wonbin instanceof FemaleIdolModel);
console.log(wonbin instanceof MaleIdolModel);

console.log('---------------');
console.log(parent instanceof IdolModel);
console.log(parent instanceof FemaleIdolModel); 
console.log(parent instanceof MaleIdolModel);   