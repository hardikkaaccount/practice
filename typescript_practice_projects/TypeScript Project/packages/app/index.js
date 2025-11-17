"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../shared/utils");
var userManager = new utils_1.UserManager();
var user1 = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
};
var user2 = {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com'
};
userManager.addUser(user1);
userManager.addUser(user2);
console.log('All users:', userManager.getAllUsers());
console.log('User with ID 1:', userManager.getUser(1));
