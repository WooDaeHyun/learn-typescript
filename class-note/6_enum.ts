/*
이넘(Enums) : 이넘은 특정 값들의 집합을 의미하는 자료형입니다.
타입스크립트에서는 문자형 이넘과 숫자형 이넘을 지원합니다.
*/

// enum은 별도의 값을 지정하지 않았을 때 숫자형 이넘으로 취급된다는 특징이 있음
// 초기화를 하지 않으면 숫자 이넘의 경우 0부터 시작함
// 숫자 이넘의 경우 초기화를 하면 그 숫자부터 시작해서 1씩 증가함
enum shoes {
  nike = 10,
  adidas,
}

var myShoes = shoes.adidas;
console.log(myShoes); // 11

// 문자형 enum 사용법

enum car {
  benz = "BENZ",
  bmw = "BMW",
  audi = "AUDI",
}

var myCar = car.benz;
console.log(myCar); // BENZ;

// 활용사례
enum Answer {
  yes = "Y",
  no = "N",
}

function Ques(answer: Answer) {
  if (answer === Answer.yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.no) {
    console.log("오답입니다.");
  }
}

Ques(Answer.yes);

// Ques("yes"); // 타입 에러 발생합 이넘 타입이기 때문에 이넘에서 제공한 데이터만 인자로 넣을 수 있음
