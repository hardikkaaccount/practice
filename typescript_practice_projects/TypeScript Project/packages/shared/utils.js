"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserManager.prototype.getUser = function (id) {
        return this.users.find(function (user) { return user.id === id; });
    };
    UserManager.prototype.getAllUsers = function () {
        return __spreadArray([], this.users, true);
    };
    return UserManager;
}());
exports.UserManager = UserManager;
