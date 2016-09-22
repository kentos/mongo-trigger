module.exports = require('./lib');

var MongoStream = require('mongo-trigger');

var watcher = new MongoStream({format: 'pretty'});

// watch the collection
watcher.watch('test.test', function(event) {
  // parse the results
  console.log('something changed:', event);
});
