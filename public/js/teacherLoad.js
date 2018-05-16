function loadMain () {
    $("#data").load('/teacherTL/main.html');
    var str = '<li><a href="/teacher"><span class="fa fa-home"> </span></a></li>';
    str += '<li><a href="#" onclick="loadMain()">My Courses</a></li>';
    $('#breadcrumb').html(str);
}

function loadCourse () {
    $("#data").load('/teacherTL/course.html');
    var str = '<li><a href="/teacher"><span class="fa fa-home"> </span></a></li>';
    str += '<li><a href="#" onclick="loadMain()">My Courses</a></li>';
    str += '<li><a href="#" onclick="loadCourse()">Khóa học 1</a></li>';
    $('#breadcrumb').html(str);
}

function loadExeDetail () {
    $("#data").load('/teacherTL/exeDetail.html');
    var str = '<li><a href="/teacher"><span class="fa fa-home"> </span></a></li>';
    str += '<li><a href="#" onclick="loadMain()">My Courses</a></li>';
    str += '<li><a href="#" onclick="loadCourse()">Khóa học 1</a></li>';
    str += '<li><a href="#" onclick="loadExeDetail()">Bài tập A</a></li>';
    $('#breadcrumb').html(str);
}

function loadAddExe () {
    $("#data").load('/teacherTL/addExe.html');
    var str = '<li><a href="/teacher"><span class="fa fa-home"> </span></a></li>';
    str += '<li><a href="#" onclick="loadMain()">My Courses</a></li>';
    str += '<li><a href="#" onclick="loadCourse()">Khóa học 1</a></li>';
    str += '<li><a href="#" onclick="loadAddExe()">Thêm bài tập</a></li>';
    $('#breadcrumb').html(str);
}

function loadEditExe () {
    $("#data").load('/teacherTL/editExe.html');
    var str = '<li><a href="/teacher"><span class="fa fa-home"> </span></a></li>';
    str += '<li><a href="#" onclick="loadMain()">My Courses</a></li>';
    str += '<li><a href="#" onclick="loadCourse()">Khóa học 1</a></li>';
    str += '<li><a href="#" onclick="loadEditExe()">Sửa Bài tập A</a></li>';
    $('#breadcrumb').html(str);
}