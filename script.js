// splice(str)

let users = ["developer", " manager", " superiors",];

users.splice(2, 3, " workshop");
console.log(users);

// slice
let arr = ["a", "b", "c", "d"];

console.log(arr.slice(0, 2));
console.log(arr.slice(-3));

// map 
let numbers = [100, 150, 200, 250];

let conclusion = numbers.map(number => number * 4 / 2 + " kg");
console.log(conclusion);

// for
let x = [1, 2, 3, 4];

let y;
for (i = 0; i < x.length; i++) {
  console.log(x[i]);
}

// forEach
let heroes = ["Frodo", "Gandalf", "Legolas"];

heroes.forEach((item, index, array) => {
  console.log(`${item} имеет позицию ${index} в ${array}`);
});

// filter
let symbols = [15, 25, 13, 44, 5];

let symbol = symbols.filter(num => num >= 15);
console.log(symbol);

// reduce 
let arrReduce = [1, 3, 5, 7, 9];

let result = arrReduce.reduce((sum, current) => sum + current, 0);
console.log(result);

// sort(fn) 
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arrSort = [8, 2, 7, 5, 4];
arrSort.sort(compareNumeric);
console.log(arrSort);

// some 
let positiveNumber = [-1, -2, -3, 4];

let check = positiveNumber.some(function(elem){
  if (elem >= 0) {
    return true
  } else {
    return false;
  }
})
console.log(check);

// every
let composition = [1, 2, 3, 4, 5];

let check_1 = composition.every(function(elem, index){
  if (elem * index < 30) {
    return true;
  }else {
    return false;
  }
});
console.log(check_1);
