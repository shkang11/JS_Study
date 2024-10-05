/**
 * All about objects
 * 
 * 객체를 선언 할 때 사용 할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화 해서 객체 생성 - class와 OOP
 * 3) function을 사용 해서 객체 생성
 */

const wonBin = {
  name: '원빈',
  year: 2002,
};
console.log(wonBin);

class IdolModel {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

console.log(new IdolModel('원빈', 2002));


// 생성자 함수
function IdolFunction(name, year){
  this.name = name;
  this.year = year;
}
const soHee = new IdolFunction('소희', 2003);
console.log(soHee);