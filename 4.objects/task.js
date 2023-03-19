function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks = [...this.marks, ...marks];
  }
}

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }

  return this.marks.reduce((acc, cur, idx, arr) => {
    acc += cur;
    if (idx === arr.length - 1) {
      return acc / arr.length;
    }

    return acc;
  }, 0)
}

Student.prototype.exclude = function (reason) {
  if (this.subject) delete this.subject;
  if (this.marks) delete this.marks;
  this.excluded = reason;
}

const student = new Student("Василиса", "женский", 19);
console.log(student);