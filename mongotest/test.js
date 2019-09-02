var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/mongotest', function(err, client) {
    console.log('Connected to MongoDB!');

    
    var db = client.db('testing');
    var collection = db.collection('testing');
    collection.insert({'title': 'Snowcrash'}, function(err, docs) {
        console.log(docs.ops.length + ' records inserted.');
        console.log(docs.ops[0]._id + ' - ' + docs.ops[0].title);

        collection.findOne({title: 'Snowcrash'}, function(err, doc) {
            console.log(doc._id + ' - ' + doc.title);
            client.close();
        });
    });
});