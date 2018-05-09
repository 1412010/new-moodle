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

    $('#data').on('click', '#editBt1' ,function (event) {
        event.preventDefault();
        console.log('ok');
    });

    $('#data').on('click', '#labBt1' ,function (event) {
        event.preventDefault();
        $("#data").load('/teacherTL/exeDetail.html');
    });
});