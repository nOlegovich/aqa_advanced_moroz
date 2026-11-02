const car1 = {
  brand: "Toyota",
  model: "Corrola",
  year: 2026,
};

const car2 = {
  brand: "BMW",
  model: "X5",
  owner: "Мороз Назарй",
};

const car3 = { ...car1, ...car2 };

console.log(car3);