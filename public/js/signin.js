$("form.form-signin").on('submit', function(e){
    e.preventDefault();
    var user = $(".form-signin > input#inputUser").val();
    var password = $(".form-signin > input#inputPassword").val();
    if (user == "sinhvien") {
        window.location.href = "/student";
    } 
    else if (user == "giangvien") {
        window.location.href = "/teacher";
    } else {
        $("form.form-signin > p#warning").attr("hidden", false);
    }
});