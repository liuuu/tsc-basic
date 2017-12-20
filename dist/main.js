"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
new app_1.App();
var Person = /** @class */ (function () {
    function Person() {
        console.log('haha haha ha');
    }
    return Person;
}());
var name = app_1.obj.name;
new Person();
