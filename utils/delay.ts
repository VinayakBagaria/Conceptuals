const delay = <T>(time: number, data: T): Promise<T> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });

class Users {
  async getUsers() {
    return await delay(1000, []);
  }

  async getUserById(id: number) {
    return await delay(50, {
      id: `user_${id}`,
    });
  }
}

(async function () {
  const users = new Users();

  console.log(await users.getUserById(22));
  console.log(await users.getUsers());
})();
