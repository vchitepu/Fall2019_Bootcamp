'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js'),
    listings = require('./listings.json');



let db = mongoose.connect(config.db.uri, {
  useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology:true,
  family:4
}).catch(error => handleError(error));

for(var i = 0; i < listings.entries.length; i++ ){
  
  var listing = Listing(listings.entries[i]);
  listing.save(function(err){
    if(err){
      console.log(i);
      throw err;
    }
  });
}

// 1 second time delay otherwise it would kill connection during the last write to DB
setTimeout(function() {mongoose.disconnect()}, 5000); 
