const names = ['Dimas', 'Erlya'];

const namesWithExcMark = names.map((name) => `${name}!`);

console.log(namesWithExcMark)

const createPersonWithAge = (age, person) => {
    return { ...person, age }
}

const Person = {
    name: "Erlya"
}

const newPerson = createPersonWithAge(19, Person)

console.log(Person)
console.log(newPerson)
console.log(createPersonWithAge(10, Person))
