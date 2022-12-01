const persons = [
    {id: 1, name: 'John', age: 30},
    {id: 2, name: 'Sara', age: 25},
    {id: 3, name: 'Max', age: 35}
  ];
console.log(persons);

const addPerson = [
    ...persons,
    {id: 4, name: 'Müller', age: 55}
];
console.log(addPerson);

const updatePerson = persons.map(person => {
    if(person.id === 2) {
      return {...person, age: 35}
    }
    return person;
  });
console.log(updatePerson);

const filterPerson = persons.filter(person => person.id !== 1);
console.log(filterPerson);

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
const sum = reviews.reduce((a, b) => a + b);
const avg = sum / reviews.length;
console.log(avg);


const count = reviews.reduce((total, num) => {
  if (num >= 4) {
    total.good++;
  } else if (num >= 2.5) {
    total.ok++;
  } else {
    total.bad++;
  }
  return total;
}, {
  good: 0,
  ok: 0,
  bad: 0
});
console.log(count);