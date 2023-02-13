console.log('Задание 1');
function city (arr) {
    return arr.join(", ") + ".";
}
console.log(city(["Москва","Санкт-Петербург","Воронеж"]));
    
console.log('Задание 2');
function round (num) {
    return Math.floor(num/5)*5;
}
console.log(round(41.7));

console.log('Задание 3');
let elem =100;
function task3(int) {
    let Num = String(int);
    let NumArr = [];
    for (let i = 0; i < Num.length; i++) {
    NumArr.push(Num.charAt(i));
    }

    let endPosition = NumArr[NumArr.length-1];
    let penultPosition = NumArr[NumArr.lenght-2];

    if ((endPosition >=5 && endPosition  <=9) || (endPosition === "0") ||
    (endPosition == 1 && penultPosition ==1) ||
    (endPosition >=2 && endPosition <=4 && penultPosition == 1))
    {
        console.log(int + " компьютеров");
    }
    if (endPosition == 1 && penultPosition !=1){
        console.log(int + " компьютер");
    }
    if (endPosition >= 2 && endPosition <=4 && penultPosition !=1) {
        console.log(int + " компьютера");
    }
}
task3(elem);

console.log('Задание 4');
function task4 (n) {
    if (n === 1){
        return false;
    }
    else if  (n === 2){
      return true;
    }
    else {
    for (let x =2; x < n; x++){
        if (n % x === 0) {
            return false;
        }
    }
        return true;
    }
   };
console.log(task4(7));

console.log('Задание 5');
function task5 (first, second){
    first = new Set(first);
    second = new Set(second);
    return [...first].filter(item => second.has(item));
}
 
let first = [7, 17, 1, 9, 1, 17, 56, 56, 23];
let second = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];
let result = task5(first, second);
console.log (result);

console.log('Задание 6');
let res = '    ';

function buff(val){
  let buff = '';
  let pad = 4 - val;
    while( pad-- > 0 )
      buff += ' ';            
  return buff;
}

let x = 5;
for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x; j++) {
      if(i == 1 && j > 1){
        res += ' ' + j + ' ' + buff((j+'').length+2);
      } 
      else if(j == 1 && i>1){
        res += '' + i + ' ';
      } 
      else if(i>1 && j>1){
        res += buff((i*j+'').length ) + i*j;
      }
    }
  res += '\n'
}

console.log(res)