/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과 (immutable 불변 ex)문자열 변경불가 let str = "hello"  str[0] = 'b' 이짓거리 불가능)
 * 한개의 오브젝트 타입이있다. (mutable 변함 ex) 객체내부에 추가, 변경, 삭제가능)
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

// 1) Number type
const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log('-----------------');

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('-----------------');

const nan = NaN;        // NaN의 뜻은 not a number이지만 number타입이다.
console.log(nan);
console.log(typeof nan);
console.log('-----------------');

/**
 * 2) String type
 * 
 * 숫자 리터럴: 각 변수가 값 자체를 가지며, 엔진에 따라 중복 생성이 일어날 수도 있고, 동일한 숫자를 재사용할 수도 있습니다.
 * 문자 리터럴: 인터닝 과정을 거쳐 동일한 문자열이 메모리에 한 번만 생성되며, 각 변수는 그 문자열의 주소를 참조합니다.
 */

const js = '"J"S';
console.log(js);
console.log(typeof js);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) back slash -> \\
 * 4) single quotation -> \'
 * 5) double quotation -> \"
 */
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\JS';
console.log(backSlash);
const singleQuotation = '아이브\'JS';
console.log(singleQuotation);

/**
 * 하지만 Escaping Character를 남발하기엔 너무 귀찮아ㅏㅏ
 * Template Literal 문자 그대로 작성해서 출력되면 조켄네.. -> 백틱사용하면됨
 */

const iveWonYoung2 = `아이브i '" / / / / / /
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
// 하지만 더 좋은 방법이... -> 백틱사용 
console.log(`${groupName} 안유진`);
console.log('-----------------');

/**
 * 3) Boolean type
 */
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);
console.log('-----------------');

/**
 * 4) undefined type
 * 
 * 값이 없다는 뜻, 지정되지 않았다는 뜻
 * 사용자가 직접 값을 초기화 하지 않았을 때
 * 지정되는 값이다 -> 즉, 선언만 하고 할당해주지 않으면 들어있는 값
 * 
 * 직접 undefined로 값을 초기화 하는 건 지양해야한다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log('-----------------');


/**
 * 5) null type
 * 
 * undefined와 마찬가지로 값이 없다는 뜻
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화 할 때 사용 됨
 */
let init = null;
console.log(init);          // 값이 null이니까
console.log(typeof init);  // 타입이 null type이어야 할 텐데 object type으로 찍힘 -> 버그임
console.log('-----------------');

/**
 * 6) Symbol type
 * 
 * 유일무이한 값을 생성할 때 사용한다
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출
 */

const test1 = '1';
const test2 = '1';
console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);
console.log('-----------------');

/**
 * Object type
 * 
 * map
 * 키: 벨류 쌍으로 이루어져있다.
 * key: value
 */

const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/**
 * Array type
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 */

const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembersArray);

/**
 * index
 * 
 * 0부터 시작
 * 1씩 올라간다.
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = 'JS'; // 내용 바꾸기 가능 왜? Object타입은 mutable이라서
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할 지 명시를 한다.
 *                  C, JAVA
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론'한다.
 *                  JS
 */                 


// data types 전체 정리
/**
 * 1. Primitive Types (원시 타입)
 * 
 * 프리미티브 타입은 JavaScript에서 불변(immutable)하며, 총 6가지가 존재합니다:
 * 
 * 1) Number
 *    - 숫자 타입으로, 정수 및 실수를 포함합니다.
 *    - `Infinity`와 `NaN`도 `Number` 타입으로 분류됩니다.
 * 
 * 2) String
 *    - 문자열 타입. 불변성을 가지며, 변수에 저장될 때는 해당 문자열의 메모리 주소를 참조합니다.
 * 
 * 3) Boolean
 *    - `true` 또는 `false` 값만 가질 수 있는 타입입니다.
 * 
 * 4) undefined
 *    - 변수가 선언되었으나 값이 할당되지 않은 경우 자동으로 할당되는 값입니다.
 *    - 직접 할당하지 않는 것이 좋습니다.
 * 
 * 5) null
 *    - 값이 없음을 명시적으로 나타내는 값입니다.
 *    - `typeof null`이 `object`로 표시되는 것은 자바스크립트의 초기 설계 결함으로, 현재는 수정되지 않은 버그입니다.
 * 
 * 6) Symbol
 *    - 유일무이한 식별자를 생성하는 타입으로, 심볼 값끼리는 항상 다른 값을 가집니다.
 *    - 각 심볼은 유일하기 때문에, 동일한 문자열을 인자로 넘겨도 서로 다른 심볼을 생성합니다.
 */

/**
 * 2. Object Type (객체 타입)
 * 
 * - 객체는 `key-value` 형태로 데이터를 저장합니다.
 * - `Array`, `Function`도 객체 타입의 일종입니다.
 * - 객체 타입은 가변(mutable)성을 가지고 있으며, 내부 속성을 변경하거나 추가/삭제할 수 있습니다.
 * 
 * - **Array (배열)**: 값들을 리스트 형식으로 나열할 수 있는 타입입니다.
 *   - 예: const arr = ['A', 'B', 'C'];
 * - **Object (객체)**: key-value 쌍을 통해 데이터를 저장합니다.
 *   - 예: const obj = { key1: 'value1', key2: 'value2' };
 */

/**
 * 3. 불변성(Immutable) vs. 가변성(Mutable)
 * 
 * - **불변성**: 프리미티브 타입의 값은 한 번 생성되면 변경되지 않습니다.
 *   - 예: 문자열은 한 번 생성되면 그 값을 변경할 수 없습니다.
 *   - 예: str[0] = 'b'; // 오류 발생
 * 
 * - **가변성**: 객체 타입은 변수에 할당된 후에도 내부 속성을 변경할 수 있습니다.
 *   - 예: 배열의 요소를 변경하거나 객체의 속성을 추가/삭제할 수 있습니다.
 *   - 예: arr[0] = 'new value'; // 정상 동작
 */

/**
 * 4. 기타 정보 및 코드 예제
 * 
 * - 문자열의 **이스케이프 문자**: `\n` (새 줄), `\t` (탭), `\\` (백슬래시), `\'` (작은 따옴표), `\"` (큰 따옴표)
 * - **템플릿 리터럴 (Template Literal)**:
 *   - 백틱(``` ` ```)을 사용하여 문자열 내에 표현식을 쉽게 삽입하거나 멀티라인 문자열을 작성할 수 있습니다.
 *   - 예: 
 *     ```javascript
 *     const name = 'JS';
 *     console.log(`Hello, ${name}`); // 출력: Hello, JS
 *     ```
 */

/**
 * 5. 추가 설명
 * 
 * - **Number와 String의 저장 방식**:
 *   - Number 타입은 값 자체가 저장됩니다.
 *   - String 타입은 인터닝 과정을 통해 동일한 문자열이 있을 경우 메모리에 한 번만 생성되고, 각 변수는 해당 문자열의 메모리 주소를 참조합니다.
 * 
 * - **undefined와 null의 차이**:
 *   - `undefined`: 변수가 선언만 되고, 값이 할당되지 않은 상태를 나타냅니다.
 *   - `null`: 값이 없음을 명시적으로 나타내기 위해 개발자가 설정한 상태입니다.
 * 
 * - **템플릿 리터럴의 장점**:
 *   - 문자열 내에서 표현식을 쉽게 삽입할 수 있습니다.
 *   - 멀티라인 문자열 작성이 가능합니다.
 */
