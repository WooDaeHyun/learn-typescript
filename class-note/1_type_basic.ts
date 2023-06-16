// JS 문자열 선언
const string = "hello";

// ****변수****를 선언하고 변수의 타입을 지정하는 방식이다.

// ----- 1. TS 문자열 -----
const str: string = "hello";

// ----- 2. TS 숫자 -----
const number: number = 10;

// ----- 3. TS 배열 -----
// array변수는 Array타입이고 number타입의 요소만 들어갈 수 있다.
const array: Array<number> = [1, 2, 3];
const array2: number[] = [1, 2, 3];
// array변수는 Array타입이고 string타입의 요소만 들어갈 수 있다.
const heros: Array<string> = ["Thor", "Capt", "Hulk"];
const heros2: string[] = ["Thor", "Capt", "Hulk"];

// ----- 4. TS 튜플 -----

// 배열의 요소들에 string type의 값만 넣겠다.
const seoul: string[] = ["songpa", "gangnam"];

// 튜플은 더 나아가 배열의 특정 index의 타입까지 정의를 하는 것을 의미함
// 즉 모든 index의 타입이 정의되어 있는 배열이다.
const tuple: [string, number, boolean] = ["seoul", 10, true];

// -----5. TS 객체 -----
const obj: object = {};
// 각 프로퍼티의 값들에 대한 타입 정의를 하는 방법
// 타입 정의한 프로퍼티와 값이 객체 내에 있어야 한다.
// 즉 객체를 보다 구체적으로 정의하는 것이다.
const object: { name: string; age: number } = {
  name: "jhon doe",
  age: 30,
};

// -----6. TS Boolean -----
const isTrue: boolean = true;

/* 
1. string
2. number
3. boolean
4. array
5. tuple
6. object
*/

// 문자열
var a: string = "hello";
// 숫자
var b: number = 92;
// 객체
var c: object = {};
// 객체
var d: { name: string; age: number } = { name: "hello", age: 92 };
// 배열
var e: Array<string> = ["2", "3", "4"];
// 배열
var f: Array<object> = [{}, {}];
// 배열
var g: string[] = ["s", "d", "e"];
// 튜플
var h: [string, number, boolean] = ["d", 92, false];
// 불리언
var z: boolean = false;

var kk: {} = 92;
