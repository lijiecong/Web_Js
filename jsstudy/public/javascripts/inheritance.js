/**
 * Created by jli on 2016/3/3.
 */

"use strict";

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {

    constructor(sideLength) {
        super(sideLength, sideLength);
    }

    get area() {
        return this.height * this.width;
    }
    set sideLength(newLength) {
        this.height = newLength;
        this.width = newLength;
    }
}

var square = new Square(2);
var square2 = new Square(6);


function Person (name, age) {
    this.name = name;
    this.age = age;
    this.say = function(){
        console.log('hello, my name is ' + this.name);
    };
}

function Man(name, age) {
    Person.call(this, name, age);
    this.pp = 55;
}

//Man.prototype = new Person();

var man1 = new Man('joe', 10);



const util = require('util');
const EventEmitter = require('events');

function MyStream() {
    EventEmitter.call(this);
}

util.inherits(Man, Person);

var man2 = new Man('david', 20);

util.inherits(MyStream, EventEmitter);


