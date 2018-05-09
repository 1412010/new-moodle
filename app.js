var createError = require("http-errors");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var fs = require("fs");
var hbs = require("hbs");
var hbsUtils = require("hbs-utils")(hbs);

var homeRouter = require("./routes/home");
var studentRoute = require("./routes/studentRoute");
var teacherRoute = require("./routes/teacherRoute");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// register all partials
var partialsDir = __dirname + "/views/partials";

hbsUtils.registerWatchedPartials(partialsDir);
// var filenames = fs.readdirSync(partialsDir);

// filenames.forEach(function(filename) {
//     var matches = /^([^.]+).hbs$/.exec(filename);
//     if (!matches) {
//         return;
//     }
//     var name = matches[1];
//     var template = fs.readFileSync(partialsDir + "/" + filename, "utf8");
//     hbs.registerPartial(name, template);
// });

app.use("/", homeRouter);
app.use("/teacher", teacherRoute);
app.use("/student", studentRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});


module.exports = app;
