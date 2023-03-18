// Задача 1
function getArrayParams(...arr) {
  if (arr.length === 0) return 0;

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const avg = +([...arr].reduce((acc, cur) => acc + cur, 0) / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задача 2
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  return [...arr].reduce((acc, cur) => acc + cur, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

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
  if (arr.length === 0) return 0;

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

//  Задача 3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    const element = arrOfArr[i];
    const result = func(...element);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
