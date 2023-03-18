"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  const D = Math.pow(b, 2) - 4 * a * c;

  if (D === 0) {
    const x1 = -b / (2 * a);
    arr.push(x1);
  }

  if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if ([...arguments].some((e) => isNaN(e))) {
    return false;
  }

  const pct = +((percent / 100) / 12);
  const loanBody = +amount - +contribution;
  const mounthlyPmt = loanBody * (pct + (pct / (((Math.pow((1 + pct), +countMonths)) - 1))));

  return +(mounthlyPmt * countMonths).toFixed(2);
}

console.log(calculateTotalMortgage(15, 0, 10000, 36));