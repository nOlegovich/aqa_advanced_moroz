const TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';
const USER_URL = 'https://jsonplaceholder.typicode.com/users/1';

async function getTodo() {
  const response = await fetch(TODO_URL);
  if (!response.ok) {
    throw new Error(`Помилка запиту todo: ${response.status}`);
  }
  return response.json();
}

async function getUser() {
  const response = await fetch(USER_URL);
  if (!response.ok) {
    throw new Error(`Помилка запиту user: ${response.status}`);
  }
  return response.json();
}

async function main() {
  try {
    const todo = await getTodo();
    console.log('env Todo:', todo);

    const user = await getUser();
    console.log('env User:', user);

    const allResult = await Promise.all([getTodo(), getUser()]);
    console.log('Promise.all:', allResult);

    const raceResult = await Promise.race([getTodo(), getUser()]);
    console.log('Promise.race:', raceResult);
  } catch (error) {
    console.error('Помилка:', error.message);
  }
}

main();