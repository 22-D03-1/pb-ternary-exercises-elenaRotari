//1
const isDog = true;
const result1 = isDog ? "pat ,pat" : "find me a dog to pat ";
console.log({ result1 });

//2
const speedLimit = 50;
const yourSpeed = 60;
const result2 =
  yourSpeed > speedLimit
    ? "you're going too fast!"
    : "You're driving below the speed limit, Oma";
console.log({ result2 });

//3
const age = 37;
const result3 = age < 16 ? "serve butter beer" : "serve beer";

console.log({ result3 });

//4
const isStudent = true;
const result4 = isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log({ result4 });

//5
const okMarie = "cake";
const result5 = okMarie ? "Let them eat cake" : "Oh, bother";
console.log({ result5 });

//6

const num1 = 30;
const result6 =
  num1 % 2 === 0
    ? `"the number ${num1} is even"`
    : `"the number ${num1 + 1} +1 is even`;
console.log({ result6 });
const num2 = 939;
const result7 =
  num2 % 2 === 0
    ? `"the number ${num2} is even"`
    : `"the number ${num2}  is odd`;
console.log({ result7 });
const num3 = 40.9;
const result8 =
  num3 % 2 === 0
    ? `"the number ${num3} is even"`
    : `"the number ${num3} is even`;
console.log({ result8 });
