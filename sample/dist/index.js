"use strict";
let b = true;
if (b) {
    console.log("hello");
}
let x = 22;
let person1 = { name: "shanker" };
console.log(person1.name);
let a = { prop: "someprop" };
console.log(a);
const lol = (a, b) => a * b;
lol.someprop = 'Shanker';
console.log(lol(2, 4), lol.someprop);
const ch = { shawn: "ss" };
//-----------------------
function calcArea(...args) {
    if (args.length == 2) {
        return args[0] * args[1];
    }
    else {
        return args[0] * args[0];
    }
}
console.log(calcArea(2));
class Robot {
    constructor(_name) {
        this._name = _name;
    }
    static isColorAvailable(color) {
        return Robot.availablecolors.includes(color);
    }
    askName() {
        console.log(`My name is ${this._name}`);
    }
    move(distance) {
        console.log(`The robot ${this._name} moved ${distance}`);
    }
    setname(value) {
        this._name = value;
    }
    getname() {
        return this._name;
    }
}
Robot.availablecolors = ['yellow', 'red'];
class FlyingRobot extends Robot {
    constructor(_name, _booster) {
        super(_name);
        this._booster = _booster;
        this.booster = _booster;
    }
    get booster() {
        return this._booster;
    }
    set booster(num) {
        this._booster = num;
    }
}
const robot = new Robot("shanker");
robot.askName();
const myrob = new FlyingRobot("Kalyan", 2);
console.log(myrob.booster);
class SwimmingRobot extends Robot {
    constructor(_name, _swim) {
        super(_name);
        this.swim = _swim;
    }
    getswim() {
        return this.swim;
    }
    setswim(swimm) {
        this.swim = swimm;
    }
}
const sbot = new SwimmingRobot("Vineet", 3);
console.log(sbot._name);
console.log(sbot.getswim());
