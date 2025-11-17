import { UserManager, User } from '../utils';

describe('UserManager', () => {
  let userManager: UserManager;
  let testUser: User;

  beforeEach(() => {
    userManager = new UserManager();
    testUser = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com'
    };
  });

  test('should add a user', () => {
    userManager.addUser(testUser);
    const users = userManager.getAllUsers();
    expect(users).toHaveLength(1);
    expect(users[0]).toEqual(testUser);
  });

  test('should get a user by id', () => {
    userManager.addUser(testUser);
    const user = userManager.getUser(1);
    expect(user).toEqual(testUser);
  });

  test('should return undefined for non-existent user', () => {
    const user = userManager.getUser(999);
    expect(user).toBeUndefined();
  });

  test('should get all users', () => {
    const user1: User = { id: 1, name: 'User 1', email: 'user1@example.com' };
    const user2: User = { id: 2, name: 'User 2', email: 'user2@example.com' };
    
    userManager.addUser(user1);
    userManager.addUser(user2);
    
    const users = userManager.getAllUsers();
    expect(users).toHaveLength(2);
    expect(users).toContainEqual(user1);
    expect(users).toContainEqual(user2);
  });
});