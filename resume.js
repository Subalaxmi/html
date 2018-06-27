var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/suba');

var resumeSchema = mongoose.Schema({
  name: {type:String},
  contact: Number,  
  feedback: {type:String}
});


var resume = mongoose.model('resume', resumeSchema,'resume');

module.exports=resume;