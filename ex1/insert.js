var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    // data for insert
    var myobj = [
      {name: "TSR Corp2", address: "Tokyo, Japan"},
      {name: "TSR Corp3", address: "Hongkong, China"},
      {name: "TSR Corp4", address: "Shenzhen, China"},
      {name: "TSR Corp5", address: "Singapore, Singapore"},
      {name: "TSR Corp6", address: "California, USA"},
      {name: "TSR Corp7", address: "New york, USA"},
      {name: "TSR Corp8", address: "Berlin, German"},
      {name: "TSR Corp9", address: "Chiangmai, Thailand"},
      {name: "TSR Corp10", address: "Nakonratchasrima, Thailand"},
      {name: "TSR Corp11", address: "Udonthani, Thailand"},
      {name: "TSR Corp12", address: "Vientiane, Lao P.D.R"},
    ];
    // use insertOne for insert data
    db.collection("customers").insert(myobj, function(err, res){
      if(err) throw err;
      console.log(res.insertedCount + " record inserted");
      db.close();

    });
});
