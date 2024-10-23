/**
 * Using function to create objects
 * new 키워드로 생성: this를 IdolFunction으로 매핑
 * new 키워드 없이 일반함수호출처럼 생성: this를 global로 매핑
 */
function IdolFunction(name, year) {
  // console.log(this);        // new키워드로 생성되면 IdolFunction에 매핑 아니라면 global에 매핑
  // console.log(new.target);  // new 키워드로 생성됐으면 new가 실행이 된 대상의 함수가 반환
  //                           // 아니라면 undefined 반환

  // new키워드 없이 호출 했을 때 new키워드로 생성하여 만들어진 객체 반환해줌
  // if(!new.target) {
  //   return new IdolFunction(name, year);
  // }
  this.name = name;
  this.year = year;
  this.dance = function() {
    return `${this.name}이 춤을 춥니다.`
  }
}

/**
 * console.log(this);
 * new키워드로 생성했을 때
 * this가 자동으로 IdolFunction으로 매핑이 됨을 확인 
 * this가 IdolFunction인스턴스니까
 * name과 year 등등이 이 IdolFunction {} 인스턴스에 들어가게 된다.
 */

const sungChan = new IdolFunction('성찬', 2001);
console.log(sungChan);
// console.log(sungChan.dance());


/**
 * console.log(this);
 * new키워드를 쓰지 않고 호출할 떄
 * this가 자동으로 global이 된다.
 */
// 생성자 함수를 일반 함수 호출하듯이 new 키워드를 빼고 호출하면
// IdolFunction 함수 자체의 리턴값이 안써져있다 그럼 return undefined여서 undefined가 출력됨
// 그래서 생성자 함수는 꼭 new 키워드가 필요함
// 그러면 this.name, this.year, this.dance()는 어디로 갔냐
// JS에서는 이 파일이 실행됐을 때 자동으로 실행되는 global이라는 객체가 있는데
// global 객체는 JS엔진을 nodejs에서 실행할 때 필요한 값들을 다 들고 있다.

// 즉, new 키워드 없이 생성자 함수를 실행해버리면
// this키워드가 global에 붙어버려서 global의 값들을 설정하게 되어버린다.
const wonBin = IdolFunction('원빈', 2002);
console.log(wonBin);
console.log(global.name);
console.log(global.dance());


// 화살표 함수는 생성자 함수가 될 수 있는가??
// TypeError: IdolFunctionArrow is not a constructor
// 화살표 함수는 생성자 함수가 아니다 new 키워드 쓸 수 없어
const IdolFunctionArrow = (name, year) => {
  this.name = name;
  this.year = year;
}


// const shotaro = new IdolFunctionArrow('쇼타로', 2000); TypeError: IdolFunctionArrow is not a constructor