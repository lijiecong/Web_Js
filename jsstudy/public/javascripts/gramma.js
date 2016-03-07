/**
 * Created by jli on 2016/3/3.
 */


function ForIn( obj ){
    for(var idx in obj){
        console.log(idx + " " + obj[idx]);
    }
}

function ForOf(obj){
    for( var value in obj ){
        console.log(value);
    }
}

var array = ["hello", 'day', 'night'];

//ForIn(array);
//ForOf(array);

var map = new Map();

map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");
map.set("key4", "value4");

for( var value in map ){
    console.log(value);
}

console.log(map.keys());
map.forEach()

for( var key in map ){
    console.log(value);
}
