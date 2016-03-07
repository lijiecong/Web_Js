/**
 * Created by jli on 2016/3/3.
 */



var a = {
    x: 10,
    calculate: function (z) {
        return this.x + this.y + z;
    }
};

var b = {
    y: 20,
    __proto__: a
};

function CA(){
    this.y = 30;
}

function CAProto(){
    this.x = 10;
    this.calculate = function (z) {
        return this.x + this.y + z;
    };
};

CA.prototype = CAProto;

var c = new CA();

console.log(b.calculate(30));
console.log(c.calculate(50));