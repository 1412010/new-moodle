$(document).ready(function() {
    $('#data').ready(function() {
        $("#data").load('/teacherTL/main.html');
    });

    $('#data').on('click', '#kh1' ,function () {
        $("#data").load('/teacherTL/course.html');
    });

    $('#data').on('click', '#editMode' ,function () {
        var tmp = $("#addExe").attr("name");
        if (tmp == "true"){
            $("#addExe").removeAttr("hidden");
            $("#addExe").show();
            $("#addExe").attr("name", "false");
            $('#editBt1').removeAttr("hidden");
            $('#editBt1').show();
        }
        else {
            $("#addExe").hide();
            $("#addExe").attr("name", "true");
            $('#editBt1').hide();
        }
    });

    $('#data').on('click', '#backToMain' ,function (event) {
        event.preventDefault();
        $("#data").load('/teacherTL/main.html');
    });

    $('#data').on('click', 'button#editBt1' ,function (event) {
        event.preventDefault();
        $("#data").load('/teacherTL/editExe.html');
    });

    $('#data').on('click', '#addExe' ,function (event) {
        event.preventDefault();
        $("#data").load('/teacherTL/addExe.html');
    });

    $('#data').on('click', '#backToCourse' ,function (event) {
        event.preventDefault();
        $("#data").load('/teacherTL/course.html');
    });

    $('#data').on('click', '#labBt1' ,function (event) {
        event.preventDefault();
        $("#data").load('/teacherTL/exeDetail.html');
    });

    $('#data').on('click', '#deleteExe' ,function (event) {
        event.preventDefault();
        $("#confirm_delete").dialog("open");
    });

    $('#data').on('click', '#applyEditExe' ,function (event) {
        event.preventDefault();
        $("#confirm_edit").dialog("open");
    });

    $('#data').on('click', '#okAddExe' ,function (event) {
        event.preventDefault();
        $("#confirm_addExe").dialog("open");
    });
});