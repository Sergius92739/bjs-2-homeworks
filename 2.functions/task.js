// Задача 1
function getArrayParams(...arr) {
  if ([...arr].length === 0) {
    return 0;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const avg = [...arr].reduce((acc, cur) => acc + cur, 0);

  return { min, max, avg };
}

getArrayParams(-99, 99, 10); // { min: -99, max: 99, avg: 3.33 }
getArrayParams(1, 2, 3, -100, 10); // { min: -100, max: 10, avg: -16.80 }
getArrayParams(5); // { min: 5, max: 5, avg: 5 }

// Задача 2
function summElementsWorker(...arr) {
  if ([...arr].length === 0) {
    return 0;
  }
  return [...arr].reduce((acc, cur) => acc + cur, 0);
}

function differenceMaxMinWorker(...arr) {
  if ([...arr].length === 0) return 0;

  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if ([...arr].length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;
  const arrgs = [...arr];

  for (let i = 0; i < arrgs.length; i++) {
    if (arrgs[i] % 2 === 0) {
      sumEvenElement += arrgs[i];
    } else {
      sumOddElement += arrgs[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if ([...arr].length === 0) return 0;
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  const arrgs = [...arr];

  for (let i = 0; i < arrgs.length; i++) {
    if (arrgs[i] % 2 === 0) {
      sumEvenElement += arrgs[i];
      countEvenElement += 1;
    }
  }

  return sumEvenElement / countEvenElement;
}

// summElementsWorker
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

// differenceMaxMinWorker
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10

// differenceEvenOddWorker
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

// averageEvenElementsWorker
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38

//  Задача 3
function makeWork(arrOfArr, func) {}
