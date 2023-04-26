// Задача 1
function parseCount (value) {
  const result = Number.parseFloat(value);

  if (isNaN(result)) {
    throw new Error('Невалидное значение');
  }

  return result;
}

function validateCount (value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

// Задача 2
class Triangle {
  constructor(a, b, c) {
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error('Треугольник с такими сторонами не существует')
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const halfMeter = this.perimeter / 2;
    return +Math.sqrt(halfMeter * (halfMeter - this.a) * (halfMeter - this.b) * (halfMeter - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}