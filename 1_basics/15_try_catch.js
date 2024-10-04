/**
 * try...catch
 * 
 * 1) 에러를 발생 시킬 때 -> 던진다고 함. (throw)
 * 2) 명시적으로 인지 할 때 -> 잡는다고 함. (catch)
 */

function runner() {
  // 실행하고자 하는 코드를 try 안에다 넣음
  try {
    console.log('Hello');
  
    throw new Error('큰 문제가 생겼습니다!'); // 에러가 던지는 순간에 함수 정지됨
    
    console.log('Code Factory');
  } catch(e) {
    // e에는 잡은 에러의 내용이 들어옴
    console.log('---catch---');
    console.log(e);
  } finally {
    // finally는 try내부에서 에러가 나든 안나든 무조건 실행하는 곳임
    // try...catch 구문에서 finally 키워드는 optional이다.
    console.log('---finally---');
  }
}

runner();