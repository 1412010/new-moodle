$(document).ready(function() {
    $('#data').ready(function() {
        loadMain();
    });

    $('#data').on('click', '#kh1' ,function () {
        loadCourse();
    });

    $('#data').on('click', '#editMode' ,function () {
        var tmp = $("#addExe").attr("name");
        if (tmp == "true"){
            $("#addExe").removeAttr("hidden");
            $("#addExe").show();
            $("#addNoti").removeAttr("hidden");
            $("#addNoti").show();
            $("#addDoc").removeAttr("hidden");
            $("#addDoc").show();
            $("#addExe").attr("name", "false");
            $('.editBt1').removeAttr("hidden");
            $('.editBt1').show();
            $('#editTb1').removeAttr("hidden");
            $('#editTb1').show();
            $('#editTl1').removeAttr("hidden");
            $('#editTl1').show();
            $('#editTl2').removeAttr("hidden");
            $('#editTl2').show();
        }
        else {
            $("#addExe").hide();
            $("#addNoti").hide();
            $("#addDoc").hide();
            $("#addExe").attr("name", "true");
            $('.editBt1').hide();
            $('#editTb1').hide();
            $('#editTl1').hide();
            $('#editTl2').hide();
        }
    });

    $('#data').on('click', '#backToMain' ,function (event) {
        event.preventDefault();
        loadMain();
    });

    $('#data').on('click', 'button#editBt1' ,function (event) {
        event.preventDefault();
        loadEditExe();
    });

    $('#data').on('click', '#addExe' ,function (event) {
        event.preventDefault();
        loadAddExe();
    });

    $('#data').on('click', '#backToCourse' ,function (event) {
        event.preventDefault();
        loadCourse();
    });

    $('#data').on('click', '#labBt1' ,function (event) {
        event.preventDefault();
        loadExeDetail();
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