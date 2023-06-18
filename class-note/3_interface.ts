// daehyun이라는 변수는 User라는 인터페이스를 갖는다라고 해석
// 반복되는 타입들에 대해서 하나의 인터페이스로 정의를 하고 그 인터페이스를 사용하여 중복된 내용을 제거할 수 있다는 장점이 있다.

interface User {
  name: string;
  age: number;
}

// 변수에 인터페이스 활용
let daehyun: User = {
  name: "woodaehyun",
  age: 30,
};

// 함수의 매개변수를 정의하는 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const userOne = {
  name: "thor",
  age: 1002,
};

getUser(userOne);

// 함수 스펙(구조)에 정의하는 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction = (a: number, b: number) => {
  return a + b;
};

// 인덱싱 방식을 정의하는 인터페이스
interface StringArr {
  [index: number]: string;
}

let stringArray: StringArr = ["a", "b", "c"];
stringArray[0] = "d";

// 딕셔너리 패턴
interface StringObj {
  [key: string]: number;
}

let StringObject: StringObj = {
  name: 123,
  address: 29392,
};

StringObject["name"] = 1929;

// 인터페이스 확장
interface Personn {
  name: string;
  age: number;
}

// interface Developer {
//   name: string;
//   age: number;
//   language: string;
// }

interface Developerr extends Personn {
  language: string;
}

let dddeveloper: Developerr = {
  language: "typescript",
  name: "woodaehyun",
  age: 30,
};
