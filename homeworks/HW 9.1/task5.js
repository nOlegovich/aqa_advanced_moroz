const users = [
  { name: "Jktu", email: "Jktu@example.com", age: 20 },
  { name: "Oleg", email: "Oleg@example.com", age: 30 },
  { name: "Dima", email: "Dima@example.com", age: 40 },
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}

for (const user of users) {
  const { name, email, age } = user;
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}