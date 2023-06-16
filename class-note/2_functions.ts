// 함수의 파라미터에 타입을 정의하는 방힉
function sumNumber(a: number, b: number) {
  return a + b;
}

sumNumber(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function sumNumber2(): number {
  return 92;
}

// 함수에 타입을 정의하는 방식
function numberPlus(a: number, b: number): number {
  return a + b;
}

function plus(a: number, b: number): number {
  return a + b;
}

plus(10, 20);

// 함수의 옵셔널 파라미터가 필요한 경우
function log(a: string, b?: string) {
  console.log(a);
  b && console.log(b);
}

log("hello world");
log("hello world", "abc");
