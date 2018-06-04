var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render("indexTeacher", {title: "Teacher Page"});
});

router.get('/api/khoahoc', function(req, res, next) {
    //console.log(global.giaoVien.khoaHoc);
    res.json(global.giaoVien.khoaHoc);
});

router.put('/api/khoahoc/baitap', function(req, res, next) {
    console.log(req.body);
    try {
        var btmoi = {};
        btmoi.name = req.body['newExe[name]'];
        btmoi.deadline = {
            date: req.body['newExe[deadline][date]'],
            month: req.body['newExe[deadline][month]'],
            year: req.body['newExe[deadline][year]'],
            hour: req.body['newExe[deadline][hour]'],
            minute: req.body['newExe[deadline][minute]']
        };
        btmoi.maxsize = req.body['newExe[maxsize]'];
        btmoi.content = req.body['newExe[content]'];
        btmoi.fileName = req.body['newExe[fileName]'];
        btmoi.quantity = 0;
        var d = new Date();
        btmoi.lastUpdate = {
            date: d.getDate(),
            month: d.getMonth()+1,
            year: d.getFullYear(),
            hour: d.getHours(),
            minute: d.getMinutes()
        };
        btmoi.id = global.giaoVien.khoaHoc[1].baiTap.length;
        console.log(btmoi);
        global.giaoVien.khoaHoc[1].baiTap.push(btmoi);
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;
