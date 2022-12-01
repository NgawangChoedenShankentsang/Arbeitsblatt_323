const gradeMap = {
    a: 'Excellent Job',
    b: 'Nice Job',
    c: 'Well done',
    d: 'What happened',
    f: 'Not good'
  }
  const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];
  function getGradeLetter(grade) {
    if (grade >= 90) {
      return 'a';
    } else if (grade >= 80) {
      return 'b';
    } else if (grade >= 70) {
      return 'c';
    } else if (grade >= 60) {
      return 'd';
    } else {
      return 'f';
    }
  }
  function curriedFeedback(gradeMap) {
    return function (name, grade) {
      const gradeLetter = getGradeLetter(grade);
      return `${gradeMap[gradeLetter]} ${name}, you got an ${gradeLetter}`;
    }
  }
  const studentFeedback = studentGrades.map(student => {
    const feedback = curriedFeedback(gradeMap);
    return feedback(student.name, student.grade);
  });
  console.log(studentFeedback);


const R = require('./rambda.min.js');
const array = ['apple', 'orange', 'banana'];
const addPrefix = R.curry((prefix, element) => `${prefix}${element}`);  
const prefixedArray = R.map(addPrefix('fruit_'), array);
console.log(prefixedArray); 

// Impure function
function arrayLength(arr) {
    return arr.length;
}

// Pure function
function arrayLength(arr) {
    let length = 0;
    for (let i = 0; i < arr.length; i++) {
        length++;
    }
    return length;
}
