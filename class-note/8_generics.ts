function logText(text) {
  console.log(text);
  return Text;
}

logText("d");
logText(10);
logText(true);

// 제네릭은 함수를 호출하는 시점에 타입을 정할 수 있다

function loglogText<T>(text: T): T {
  console.log(text);
  return text;
}

loglogText<string>("helloWorld");
loglogText<number>(98);

// 제네릭을 사용하는 이유는 타입을 다르게 받기 위해서 중복된 코드를 작성하는 행위를 방지할 수 있다.

function text(text: string) {
  console.log(text);
  //string으로 타입이 정해져있기 때문에 text. 하면 string 관련 메서드들을 활용할 수 있음
  return text;
}

text("10");

function num(num: number) {
  console.log(num);
  //number로 타입이 정해져있기 때문에 num. 하면 number 관련 메서드들을 활용할 수 있음
  return num;
}

num(10);

function everything(value) {
  console.log(value);
  // 여기서 value는 어떤 타입으로든 들어올 수 있기 때문에 value.을 찍어도 자동완성 기능을 활용할 수 없음
  return value;
}

everything("10");
everything(10);

// ------------------이런 중복을 줄이기 위해서 유니온 타입을 사용할 수는 없을까? 가능하다----------

function union(value: string | number) {
  console.log(value);
  // 여기서 value는 string 또는 number 타입이기 때문에 string과 number타입 둘 다에서 사용이 가능한 메서드들만 자동완성으로 제공된다.(교집합)
  return value;
}

// 또한 함수를 호출할 때 문자열을 인자로 넘겨주고 받은 return 값의 데이터 타입도 그대로 string | number가 된다.
let apple = union("hi");
// apple 변수에 담겨져 있는 hi 문자열의 타입이 string | number 타입이다. 따라서 string에만 사용가능한 메서드들을 사용할 수 없다.
apple.split("");
// 즉, input에 대한 문제는 해결했지만, 반환값에 대한 문제를 해결할 수 없다는 문제가 발생한다.
union(100);

//--------------이러한 문제점들을 해결할 수 있는 것이 제네릭이다.--------------------------
// 함수를 호출하는 시점에 타입을 정할 수 있다.
// 여기서는 함수에 제네릭을 사용하는 방법에 대해 공부!!

function generic<T>(value: T): T {
  console.log(value);
  return value;
}

const banana = generic<string>("banana");
banana.split("");
const melon = generic<number>(102);
melon.toFixed(2);

// 즉 제네릭은 실제로 함수를 정의할 때 타입을 비워놓은 상태에서 타입에 무엇이 들어갈지는 호출하는 시점에 정의하는 것이다.

// **************그럼 이제 interface에 제네릭을 정의하는 방법에 대해서 알아보자************

interface DropDown {
  value: string;
  selected: boolean;
}

var item: DropDown = { value: "12", selected: false };

interface DDropDown<T> {
  value: T;
  selected: boolean;
}

var item2: DDropDown<string> = { value: "12", selected: true };

// ---------------------------------------------------------------------------
// 제네릭의 타입 제한 - 1

function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  // 에러가 발생하는 이유는? 타입스크립트에서는 "hello" 문자열이 들어간다고 인식하지 못하기 때문에 length 프로퍼티를 사용할 수 없음
  // 제네릭에 조금 더 힌트를 줄 수 있다. 이것을 타입 제한이라고 한다.
  // 여기서는 T의 배열로 타입을 제한 한 것이다.
  // 물론 호출시에 전달한 인자가 유효한 인자는 아니다.
  return text;
}

logTextLength<string>("hello");

// 제네릭 타입 제한 2 - 정의된 타입 이용하기

interface LengthType {
  length: number;
}

function textLength<T extends LengthType>(text: T): T {
  console.log(text.length);
  return text;
}

textLength<string>("hello");
// 숫자는 length 프로퍼티 사용이 불가능하기 때문에 에러가 발생함
// 이렇게 타입을 제한할 수 있다.
textLength<number>(19);

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  // 쇼핑 아이템에 있는 키들 중에 한 가지가 바로 제네릭 타입이 된다.
  return itemOption;
}

// getShoppingItemOption<string>("hello");
// getShoppingItemOption<number>(100);
getShoppingItemOption("name");
getShoppingItemOption("price");
getShoppingItemOption("stock");

interface a {
  name: string;
}

interface b {
  age: number;
}

// var kkk: b = {
//   age: 22,
// };

function aaaaaa<T extends b>(value: T) {
  console.log(value);
}

aaaaaa({ age: 20 });
