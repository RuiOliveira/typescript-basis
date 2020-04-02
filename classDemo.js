"use strict";
exports.__esModule = true;
var Demo = /** @class */ (function () {
    function Demo(ssn) {
        this.ssn = ssn;
    }
    Demo.prototype.getUsername = function () {
        return this.username;
    };
    Demo.prototype.setUsername = function (username) {
        this.username = username;
    };
    Demo.prototype.getSsn = function () {
        return this.ssn;
    };
    return Demo;
}());
exports.Demo = Demo;
/*
let c = new Demo(123);
c.setUsername("Rui Oliveira");
console.log(c.getUsername());
console.log(c.getSsn());
*/ 
