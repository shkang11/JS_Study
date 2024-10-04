/**
 * 클래스 문제풀기
 * 1) Country 클래스는 나라 이름, 나라에 해당되는 아이돌 그룹정보를
 *    리스트로 들고있다. (name 프로퍼티, idolGroups 프로퍼티)
 * 2) IdolGroup 클래스는 아이돌 그룹 이름 정보와 멤버 정보를 리스트로 들고 잇다.
 *    (name 프로퍼티, members 프로퍼티)
 * 3) Idol 클래스는 아이돌 이름과 출생년도 정보를 들고있다.
 *    (name 프로퍼티, year프로퍼티)
 * 4) MaleIdol 클래스는 Idol클래스와 동일하게 name, year 프로퍼티가 존재
 *    추가로 sing() 함수를 실행하면 ${이름}이 노래를 합니다. 라는 스트링 반환
 * 5) FemaleIdol 클래스는 Idol클래스와 동일하게 name, year 프로퍼티가 존재
 *    추가로 dance() 함수를 실행하면 ${이름}이 춤을 춥니다. 라는 스트링 반환
 */

class Idol {
  name; // 아이돌 이름
  year; // 출생 년도

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class MaleIdol extends Idol {
  sing() {
    return `${this.name}이 노래를 합니다.`; // 상속받은 부모클래스의 name속성을 가져와야함 
    // 일반 변수인 속성을 가져올때는 super키워드X, this키워드O
  }

  static fromObject(object) {
    return new MaleIdol(object.name, object.year);
  }
}

class FemaleIdol extends Idol {
  dance() {
    return `${this.name}이 춤을 춥니다.`; // 상속받은 부모클래스의 name속성을 가져와야함 
   // 일반 변수인 속성을 가져올때는 super키워드X, this키워드O
  }

  static fromObject(object) {
    return new FemaleIdol(object.name, object.year);
  }
}

class IdolGroup {
  groupName;
  members;  // 소속 멤버들 array
  constructor(groupName, members) {
    this.groupName = groupName;
    this.members = members;
  }
}

class Country {
  countryName;
  idolGroups;   // 해당 국적 아이돌 그룹들 array
  
  constructor(countryName, idolGroups) {
    this.countryName = countryName;
    this.idolGroups = idolGroups;
  }
}

const karina = FemaleIdol.fromObject( { name: '카리나', year: 2000 } ); // FemaleIdol { name: '카리나', year: 2000 }
const giselle = FemaleIdol.fromObject({ name: '지젤', year: 2000 });
const winter = FemaleIdol.fromObject({ name: '윈터', year: 2001 });
const ningning = FemaleIdol.fromObject({ name: '닝닝', year: 2002 });

const aespaMembers = [karina, giselle, winter, ningning];
console.log(aespaMembers);
/**
 * [
 *    FemaleIdol { name: '카리나', year: 2000 },
 *    FemaleIdol { name: '지젤', year: 2000 },
 *    FemaleIdol { name: '원터', year: 2001 },
 *    FemaleIdol { name: '닝닝', year: 2002 }
 * ]
 */

const aespa = new IdolGroup('에스파', aespaMembers);
console.log(aespa);
/**
 * IdolGroup {
 *   groupName: '에스파',
 *   members: [
 *     FemaleIdol { name: '카리나', year: 2000 },
 *     FemaleIdol { name: '지젤', year: 2000 },
 *     FemaleIdol { name: '원터', year: 2001 },
 *     FemaleIdol { name: '닝닝', year: 2002 }
 *   ]
 * }
 */


const shotaro = MaleIdol.fromObject( { name: '쇼타로', year: 2000 } ); // MaleIdol { name: '쇼타로', year: 2000 }
const eunseok = MaleIdol.fromObject( { name: '은석', year: 2001 } );
const sungchan = MaleIdol.fromObject( { name: '성찬', year: 2001 } );
const wonbin = MaleIdol.fromObject( { name: '원빈', year: 2002 } );
const sohee = MaleIdol.fromObject( { name: '소희', year: 2003 } );
const anton = MaleIdol.fromObject( { name: '앤톤', year: 2004 } );

const riizeMembers =  [shotaro, eunseok, sungchan, wonbin, sohee, anton];
console.log(riizeMembers);
/**
 * [
 *   MaleIdol { name: '쇼타로', year: 2000 },
 *   MaleIdol { name: '은석', year: 2001 },
 *   MaleIdol { name: '성찬', year: 2001 },
 *   MaleIdol { name: '원빈', year: 2002 },
 *   MaleIdol { name: '소희', year: 2003 },
 *   MaleIdol { name: '앤톤', year: 2004 }
 * ]
 */

const riize = new IdolGroup('라이즈', riizeMembers);
console.log(riize);
/**
 * IdolGroup {
 *   groupName: '라이즈',
 *   members: [
 *      MaleIdol { name: '쇼타로', year: 2000 },
 *      MaleIdol { name: '은석', year: 2001 },
 *      MaleIdol { name: '성찬', year: 2001 },
 *      MaleIdol { name: '원빈', year: 2002 },
 *      MaleIdol { name: '소희', year: 2003 },
 *      MaleIdol { name: '앤톤', year: 2004 }
 *   ]
 * }
 */

const kiofMembers = [
  { name: '쥴리',
    year: 2000,
  },
  {
    name: '나띠',
    year: 2002,
  }, 
  {
    name: '벨',
    year: 2004,
  },
  {
    name: '하늘',
    year: 2005
  },
];

const cKiofMembers = kiofMembers.map((x) => FemaleIdol.fromObject(x)); // 배열의 map()함수 x는 배열의 모든 요소를 순회하는 것임 리턴값들로 배열을 만들어 리턴해줌
const kiof = new IdolGroup('키스오브라이프', cKiofMembers);
console.log(kiof);
/**
 * IdolGroup {
     groupName: '키스오브라이프',
     members: [
       FemaleIdol { name: '쥴리', year: 2000 },
       FemaleIdol { name: '나띠', year: 2002 },
       FemaleIdol { name: '벨', year: 2004 },
       FemaleIdol { name: '하늘', year: 2005 }
     ]
   }
 */

const koreanIdolGroups = [aespa, riize, kiof];
console.log(koreanIdolGroups);
/**
 * [
 *   IdolGroup {
 *     groupName: '에스파',
 *     members: [ [FemaleIdol], [FemaleIdol], [FemaleIdol], [FemaleIdol] ] 
 *   },
 *   IdolGroup {
 *     groupName: '라이즈',
 *     members: [ [MaleIdol], [MaleIdol], [MaleIdol], [MaleIdol], [MaleIdol], [MaleIdol] ]
 *   },
 *   IdolGroup {
 *     groupName: '키스오브라이프', 
 *     members: [ [FemaleIdol], [FemaleIdol], [FemaleIdol], [FemaleIdol] ]
 *   }
 * ]
 */
const korea = new Country('대한민국', koreanIdolGroups);

/**
 * Country {
 *   countryName: '대한민국',
 *   idolGroups: [
 *     IdolGroup {
 *       groupName: '에스파',
 *       members: [Array]
 *     },
 *     IdolGroup: {
 *       groupName: '라이즈',
 *       members: [Array]
 *     },
 *     IdolGroup: {
 *       groupName: '키스오브라이프',
 *       members: [Array]
 *     } 
 *   ]
 * }
 */
console.log(korea);

const allTogether = new Country(
  '대한민국',
  [
    new IdolGroup('에스파', aespaMembers),
    new IdolGroup('라이즈', riizeMembers),
    new IdolGroup('키스오브라이프', kiofMembers.map((x) => new FemaleIdol(x['name'], x['year']))),
    // new IdolGroup('키스오브라이프', kiofMembers.map((x) => FemaleIdol.fromObject(x))),  factory constructor를 사용하는 것도 가능 윗줄과 동일하여 주석으로 지움처리
  ],
);
console.log(allTogether);