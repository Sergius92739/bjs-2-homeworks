"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  const d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    const x1 = -b / (2 * a);
    arr.push(x1);
  }

  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
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