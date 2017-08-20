var express = require("express");
var app     = express();
var path    = require("path");


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'testdb'
});


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/bundle.js',function(req,res){
  res.sendFile(path.join(__dirname+'/html/bundle.js'));
  //__dirname : It will resolve to your project folder.
});

app.get('/lib/jquery-1.3.2.min.js',function(req,res){
  res.sendFile(path.join(__dirname+'/html/lib/jquery-1.3.2.min.js'));
  //__dirname : It will resolve to your project folder.
});


app.get('/abc',function(req,res){
  console.log("requset recieved");

  connection.query('select *  from student;',  (error, results, fields) => {
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(results);
  });
});

app.listen(3000);

console.log("Running at Port 3000");

