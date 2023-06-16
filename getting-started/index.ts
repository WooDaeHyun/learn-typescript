var sum = (a: number, b: number): number => {
  return a + b;
};

sum(10, 20);

// 위의 상태로는 브라우저가 읽을 수가 없어 왜냐하면 브라우저는 html, css, js만 읽을 수 있기 때문이지!!
// 따라서 ts파일을 js파일로 변환을 해줘야 한다.(컴파일)
// compile : ts 파일을 js 파일로 변환하는 작업이다.
// 타입스크립트 라이브러리를 설치하고
// tsc (typescript compile) 명령어를 입력하면 ts 파일이 js 파일로 컴파일된다.

// typescript 웹에서 playground로 가면 ts 파일을 js 파일로 compile 했을 때 결과물들을 직접 볼 수 있다.
