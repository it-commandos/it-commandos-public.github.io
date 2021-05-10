const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/images"));
app.use(express.static(__dirname+"/fonts"))


app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/about-us', function(req,res){
    res.sendFile(__dirname + '/about-us.html');
});
