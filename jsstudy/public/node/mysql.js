/**
 * Created by jli on 2016/3/23.
 */

var mysql = require('mysql');

var conn = mysql.createConnection({
    host:'192.168.8.199',
    user:'jli',
    password:'123456',
    database:"50etf_option"
});

conn.connect( function (err){
    if( err ){

        console.error("connect to mysql server failed " + err.stack);
    }
    else {
        console.info("Connect to mysql server succeed");
    }
});

conn.query("select *  from 510050_2016_03 limit 2", function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows.length);
});


conn.end();

