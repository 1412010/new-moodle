var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render("indexTeacher", {title: "Teacher Page"});
});

router.get('/api/khoahoc', function(req, res, next) {
    //console.log(global.giaoVien.khoaHoc);
    res.json(global.giaoVien.khoaHoc);
});

module.exports = router;
