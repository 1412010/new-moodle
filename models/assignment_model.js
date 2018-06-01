var mongoose = require('mongoose');

var AssignmentSchema = new mongoose.Schema({
   
});
mongoose.model('assignment', AssignmentSchema);

module.exports = mongoose.model('assignment');