// function sum(a, b) {
//   return a + b;
// }

// const result = sum(a, b);
//result.찍어도 암것도 안 나옴!

//보완 방법

// @ts-check

/**
 *
 * @param {number} a firstNumber
 * @param {number} b secondNumber
 * @returns
 */

const addCal = (a, b) => {
  return a + b;
};

addCal(10, 20);

// js독과 tscheck를 사용할 수 있지만 손이 너무 많이 가는 단점이 존재함! 그렇기 때문에 타입스크립트로 작성하는게 훨신 효율적임
