// 타입 별칭 vs 인터페이스

interface Person {
  name: string;
  age: number;
}

type Peerson = {
  name: string;
  age: number;
};

let person: Person = {
  name: "woodae",
  age: 30,
};

// example
type MyString = string;
let myString: MyString = "hello";

// example
type Todo = {
  id: number;
  title: string;
  done: boolean;
};

let getTodos = (todo: Todo) => {
  console.log(todo);
};

/* 
타입 별칭의 특징 

타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같습니다. 
이러한 특징은 VSCode 상의 프리뷰 상태로 다른 타입과 어떤 차이점이 있는지 확인해볼 수 있습니다.

- 타입은 확장이 되지 않는다. 즉 extends 될 수 없다.
타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부입니다.
인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능합니다. 
따라서, 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천합니다.
(typescript 공식문서에도 그렇게 나와 있음)
typescript 공식문서 : 좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙에 따라 가급적 확장 가능한 인터페이스로 선언하면 좋습니다 😃
*/
