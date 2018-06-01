var mongoose = require('mongoose');

var TeacherSchema = new mongoose.Schema({
    
});
mongoose.model('account', TeacherSchema);

module.exports = mongoose.model('account');