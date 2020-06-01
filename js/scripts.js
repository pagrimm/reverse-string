const inputString = prompt("input string to be reversed");

function reverseString1(inputString) {
  let reversed = "";
  for (var i = inputString.length - 1; i>=0; i--) {
    reversed = reversed + inputString[i]
  }
  return reversed;
}

console.log("By For Loop")
console.log(reverseString1(inputString));

function reverseString2(inputString) {
  let reversed = ""
  for (let char of inputString) {
    reversed = char + reversed;
  }
  return reversed;
}

console.log("By For Loop with for...of")
console.log(reverseString2(inputString));

function reverseString3(inputString) {
  return inputString.split("").reverse().join("");
}

console.log("By array splitting, reversing, joining")
console.log(reverseString3(inputString));