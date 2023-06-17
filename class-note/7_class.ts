class Person {
  // class의 경우 타입스크립트를 적용하기 위해 멤버 변수의 타입을 최상단에 설정해 주어야 한다.
  // 변수의 접근 범위도 설정할 수 있다. private, public(기본 설정)
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
