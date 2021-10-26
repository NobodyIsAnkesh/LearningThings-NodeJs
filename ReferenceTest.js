// var people = [
//     { name: 'Anees', age: 45 },
//     { name: 'Fahad', age: 55 }
// ];

// function changeAge(age) {
//     age = 25;
// }
// changeAge(people[0].age);
// console.log(people);

// function changePerson(person) {
//     var newPerson = person;
//     newPerson.age = 25;
// }
// changePerson(people[0]);
// var x = { name: "Anees" };
// var y = x;
// x.age = 25;
// console.log(y);
// changeAge(person[0].age);

// console.log(people);


// function replacePerson(person, name, age) {
//     person = { name: name, age: age };
// }

// replacePerson(people[1], 'Jack Newtown', 35);
// console.table(people);

var people = [
    { name: 'Anees', age: 45 }
];
function changePerson(person) {
    person.age = 25;
}
changePerson(people[0]);
console.log(people);