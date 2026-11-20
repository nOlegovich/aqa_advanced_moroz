const person = {
  firstName: "Назарій",
  lastName: "Мороз",
  age: 100,
};

person.email = "nazariy.moroz@example.com";

delete person.age;

console.log(person);