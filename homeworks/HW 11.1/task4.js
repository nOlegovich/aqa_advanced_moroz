const TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';
const USER_URL = 'https://jsonplaceholder.typicode.com/users/1';

class PromiseApi {
  request(url) {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`Помилка запиту ${url}: ${response.status}`);
      }
      return response.json();
    });
  }

  getTodo() {
    return this.request(TODO_URL);
  }

  getUser() {
    return this.request(USER_URL);
  }

  getAll() {
    return Promise.all([this.getTodo(), this.getUser()]);
  }

  getFirst() {
    return Promise.race([this.getTodo(), this.getUser()]);
  }
}

class AsyncApi {
  async request(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Помилка запиту ${url}: ${response.status}`);
    }
    return response.json();
  }

  async getTodo() {
    return this.request(TODO_URL);
  }

  async getUser() {
    return this.request(USER_URL);
  }

  async getAll() {
    return Promise.all([this.getTodo(), this.getUser()]);
  }

  async getFirst() {
    return Promise.race([this.getTodo(), this.getUser()]);
  }
}


const promiseApi = new PromiseApi();

promiseApi
  .getAll()
  .then(([todo, user]) => console.log('PromiseApi.getAll:', todo, user))
  .catch((error) => console.error(error.message));


  
promiseApi
  .getFirst()
  .then((result) => console.log('PromiseApi.getFirst:', result))
  .catch((error) => console.error(error.message));




const asyncApi = new AsyncApi();

(async () => {
  try {
    const [todo, user] = await asyncApi.getAll();
 console.log('AsyncApi.getAll:', todo, user);

    const first = await asyncApi.getFirst();
    console.log('AsyncApi.getFirst:', first);
  } catch (error) {
    console.error(error.message);
  }
})();