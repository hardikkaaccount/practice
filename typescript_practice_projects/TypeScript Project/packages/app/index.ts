import { UserManager, User } from '../shared/utils';

const userManager = new UserManager();

const user1: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

const user2: User = {
  id: 2,
  name: 'Jane Smith',
  email: 'jane@example.com'
};

userManager.addUser(user1);
userManager.addUser(user2);

console.log('All users:', userManager.getAllUsers());
console.log('User with ID 1:', userManager.getUser(1));