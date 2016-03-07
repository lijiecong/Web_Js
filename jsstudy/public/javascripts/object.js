/**
 * Created by jli on 2016/3/3.
 */
var one ={a:10, b:12};

var two = Object.create(one);

var three =  Object.create(one);


function Graph() {
    this.vertexes = [];
    this.edges = [];
}

Graph.prototype = {
    addVertex: function(v){
        this.vertexes.push(v);
    },
    protov:88
};

var g1 = new Graph();
var g2 = new Graph();
Object.getPrototypeOf(g1);


function Person(firstName) {
    this.firstName = firstName;
}

Person.prototype.sayHello = function() {
    console.log("Hello, I'm " + this.firstName);
};

var person1 = new Person("Alice");
person1.sayHello();

console.log(person1.firstName);

Person.call()

//console.log(  two.__proto__ === Object.getPrototypeOf(two));




