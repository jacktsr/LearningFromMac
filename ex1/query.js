var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    // query statement
    var query = {address : /^B/ };
    db.collection("customers").find(query).toArray(function(err, result){
      if(err) throw err;
      console.log(result);
      db.close();
    });
});
