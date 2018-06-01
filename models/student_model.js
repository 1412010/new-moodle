var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    
});
mongoose.model('student', StudentSchema);

module.exports = mongoose.model('student');