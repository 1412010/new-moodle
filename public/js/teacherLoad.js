function loadMain () {
    $("#data").load('/teacherTL/main.html');
    $.ajax({
        url: "/teacher/api/khoahoc",
        success: function (result) {
            var obj = result;
            var str = "";
            for (var i = obj.length - 1; i >= 0; i--) {
                str += '<div class="row list-item" style="margin-top: 2%;" onclick="loadCourse(1)">';
                str += '<div class="col-md-12">' + obj[i].name + '</div>';
                str += '</div>';
            }
            $("#contentMain").html(str);
        }
    });
    
    var str = '<li><a href="/teacher"><span class="fa fa-home"> </span></a></li>';
    str += '<li><a href="#" onclick="loadMain()">Danh sách khóa học</a></li>';
    $('#breadcrumb').html(str);
}

function loadCourse (idx = 1) {
    $("#data").load('/teacherTL/course.html');
    $.ajax({
        url: "/teacher/api/khoahoc",
        success: function (result) {
            var obj = result[idx];
            $("#title").html(obj.name);
            var str = "";
            for (var i = obj.baiTap.length - 1; i >= 0; i--) {
                str += `
                <div class="card mb-1" style="cursor: pointer;">
                    <div class="card-body">
                        <div class="card-title">
                            <h5 id="labBt1">${obj.baiTap[i].name}</h5>
                            <button class="btn btn-primary float-right editBt1" hidden style="z-index: 1000;" onclick="loadEditExe()">
                                <i class="fa fa-pencil-alt"></i>
                            </button>
                        </div>
                        <div class="card-text" style="cursor: pointer;" onclick="loadExeDetail(${i})">
                            <p>
                            Hạn chót: ${obj.baiTap[i].deadline.hour}h${obj.baiTap[i].deadline.minute} - ${obj.baiTap[i].deadline.date}/${obj.baiTap[i].deadline.month}/${obj.baiTap[i].deadline.year}
                            </p>
                            <p>
                                <span class="col-md-9 col-sm-7 pl-0">
                                Lần cập nhật cuối: ${obj.baiTap[i].lastUpdate.hour}h${obj.baiTap[i].lastUpdate.minute} - ${obj.baiTap[i].lastUpdate.date}/${obj.baiTap[i].lastUpdate.month}/${obj.baiTap[i].lastUpdate.year}
                                </span>
                                <span class="col-md-3 col-sm-5">Số bài nộp:
                                    <strong>${obj.baiTap[i].quantity}</strong>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>`;
            }
            $("#exeList").html(str);
        }
    });
    var str = '<li><a href="/teacher"><span class="fa fa-home"> </span></a></li>';
    str += '<li><a href="#" onclick="loadMain()">Danh sách khóa học</a></li>';
    str += '<li><a href="#" onclick="loadCourse()">Khóa học 2</a></li>';
    $('#breadcrumb').html(str);
}

function loadExeDetail (idx = 1) {
    $("#data").load('/teacherTL/exeDetail.html');
    $.ajax({
        url: "/teacher/api/khoahoc",
        success: function (result) {
            var obj = result[1].baiTap[idx];
            $("#title").html(obj.name);
            $("#deadline").html(`${obj.deadline.hour}h${obj.deadline.minute} - ${obj.deadline.date}/${obj.deadline.month}/${obj.deadline.year}`);
            $("#lastUpdate").html(`${obj.lastUpdate.hour}h${obj.lastUpdate.minute} - ${obj.lastUpdate.date}/${obj.lastUpdate.month}/${obj.lastUpdate.year}`);
            $("#quantity").html(obj.quantity);
            $("#exeContent").html(obj.content);
            $("#maxsize").html(obj.maxsize);
            var str = '<li><a href="/teacher"><span class="fa fa-home"> </span></a></li>';
            str += '<li><a href="#" onclick="loadMain()">Danh sách khóa học</a></li>';
            str += '<li><a href="#" onclick="loadCourse()">Khóa học 2</a></li>';
            str += '<li><a href="#" onclick="loadExeDetail()">' + obj.name + '</a></li>';
            $('#breadcrumb').html(str);
        }
    });
}

function loadAddExe () {
    $("#data").load('/teacherTL/addExe.html');
    var str = '<li><a href="/teacher"><span class="fa fa-home"> </span></a></li>';
    str += '<li><a href="#" onclick="loadMain()">Danh sách khóa học</a></li>';
    str += '<li><a href="#" onclick="loadCourse()">Khóa học 2</a></li>';
    str += '<li><a href="#" onclick="loadAddExe()">Thêm bài tập</a></li>';
    $('#breadcrumb').html(str);
}

function loadEditExe () {
    $("#data").load('/teacherTL/editExe.html');
    var str = '<li><a href="/teacher"><span class="fa fa-home"> </span></a></li>';
    str += '<li><a href="#" onclick="loadMain()">Danh sách khóa học</a></li>';
    str += '<li><a href="#" onclick="loadCourse()">Khóa học 2</a></li>';
    str += '<li><a href="#" onclick="loadEditExe()">Chỉnh sửa bài tập</a></li>';
    $('#breadcrumb').html(str);
}