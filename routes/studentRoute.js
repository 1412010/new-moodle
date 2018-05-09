var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render("indexStudent", {});
});

router.get('/course/:id', function(req, res, next) {
  res.render("studentCourseDetail", {courseTitle: req.params.id});
});

router.get('/deadline/:id', function(req, res, next) {
  res.render("studentDeadlineDetail", {deadlineTitle: req.params.id});
});

module.exports = router;
