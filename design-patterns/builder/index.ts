import { UserBuilder, User } from './user';

const user: User = new UserBuilder('Vinayak')
  .setAge(25)
  .setPhone('192912812')
  .build();
console.log(user.getCredentials());
