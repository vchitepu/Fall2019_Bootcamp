/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var listingSchema = new Schema({
  code : {type:String, required:true, unique:true},
  name : {type:String, required:true},
  coordinates : {
    latitude : {type:Number},
    longitude : {type:Number} 
  },
  address : {type:String},
  

});

listingSchema.pre('save', function(next) {
  var current_date = new Date();
  this.updated_at = current_date;

  if(this.created_at == false){
    this.created_at = date;
  }
  next()
});

var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
