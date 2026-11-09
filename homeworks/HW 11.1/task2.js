const TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';
const USER_URL = 'https://jsonplaceholder.typicode.com/users/1';

function getTodo() {
  return fetch(TODO_URL).then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка запиту todo: ${response.status}`);
    }
    return response.json();
  });
}

function getUser() {
  return fetch(USER_URL).then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка запиту user: ${response.status}`);
    }
    return response.json();
  });
}

getTodo()
  .then((todo) => console.log('env Todo:', todo))
  .catch((error) => console.error(error.message));

getUser()
  .then((user) => console.log('env User:', user))
  .catch((error) => console.error(error.message));


const allResult = Promise.all([getTodo(), getUser()]);
const raceResult = Promise.race([getTodo(), getUser()]);

allResult
  .then(([todo, user]) => {
    console.log('Promise.all -> todo:', todo);
    console.log('Promise.all -> user:', user);
  })
  .catch((error) => console.error('Promise.all помилка:', error.message));

raceResult
  .then((firstResult) => {
    console.log('Promise.race -> перший результат:', firstResult);
  })
  .catch((error) => console.error('Promise.race помилка:', error.message));