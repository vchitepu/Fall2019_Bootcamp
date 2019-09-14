/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js'),
    listings = require('./listings.json');

/* Connect to your database using mongoose - remember to keep your key secret*/
let db = mongoose.connect(config.db.uri, {
  useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology:true,
  family:4

}).catch(error => handleError(error));
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  Listing.findOne({name:'Library West'}, function(err,query){
    if(!err){
      console.log('QUERIED DOCUMENT')
      console.log(query);
    }
    else throw err;

  });
};
var removeCable = function() {
  Listing.findOneAndRemove({code:'CABL'}, function(err,removed){
    if(!err){
      console.log('REMOVED DOCUMENT')
      console.log(removed);
    }
    else throw err;
  });
};
var updatePhelpsMemorial = function() {
  // Do you guys mean Phelps Lab???

  Listing.findOneAndUpdate({name:'Phelps Laboratory'}, {address:'1953 Museum Rd, Gainesville, FL 32603'}, function(err){
    if(!err){
      Listing.findOne({name:'Phelps Laboratory'}, function(err, update){
        console.log('UPDATED DOCUMENT')
        console.log(update)
      });
    }
    else throw err;
  });

};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, query){
    if(!err){
      console.log('ALL DOCUMENTS')
      console.log(query);
    }
    else throw err;
  })
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();

setTimeout(function() {mongoose.disconnect()}, 1000) 
