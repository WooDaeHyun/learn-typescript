// 유니온 타입은 특정 타입 이상을 사용할 수 있게 만드는것이다.
// 연산자를 이용한 타입 정의 => union type, intersection type

// 1. 유니온 타입  *** | << 파이프라고 함 ***

const hello: string | number | boolean = 290;

function logMessage(value: string | number): void {
  // 아래 if문들을 타입 가드라고 함 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정! 추후 배울 예정
  if (typeof value === "string") {
    // value. 찍으면 string과 관련된 메서드들을 자동완성 해준다.
    console.log(value);
  } else if (typeof value === "number") {
    // value. 찍으면 number와 관련된 메서드들을 자동완성 해준다.
    console.log(value);
  }
  throw TypeError("value must be string or number!!");
}

logMessage("hello");
logMessage(100);

// 유니온 타입의 특징
// 유니온 타입을 사용하여 2개의 인터페이스의 적용이 가능하게 작성할 때, 타입 가드 없이 객체의 프로퍼티에 접근하게 되면
// 공통된 속성만 사용할 수 있게 된다.
// 그렇지 않으면 타입스크립트 입장에서는 에러가 발생할 수 있다고 생각하기 때문이다.

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeOne(someone: Person | Developer): void {
  // 유니온 타입으로 2개 이상의 인터페이스를 사용했을 때 공통된 속성만 사용할 수 있다!! 라는 것 주의 !!
  someone.name;
  // 아래 두 개는 타입 에러 발생함!! 타입을 보장할 수 없기 때문에 발생
  // someone.skill;
  // someone.age;
}
askSomeOne({ name: "a", skill: "b" });
askSomeOne({ name: "a", age: 2 });

// 2. 인터섹션 타입 ( & )

function askOne(someone: Person & Developer): void {
  // 유니온 타입과 다르게 위 두 인터페스를 모두 포함하는 하나의 타입이라고 정의한다.
  someone.name;
  someone.skill;
  someone.age;
}

// askOne({ name: "a", skill: "b" });  << 타입 에러 발생
askOne({ name: "a", skill: "b", age: 2 });
