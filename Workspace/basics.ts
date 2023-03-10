function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input!"); // This is how we throw an error in regular javascript, there is better ways to do this in typescript however
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const resultPhrase = "Result is: ";
const number1 = 5;
const number2 = 2.8;
const printResult = true;

add(number1, number2, printResult, resultPhrase);
