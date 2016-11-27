$("body").css("background-color", "yellow");

for (var i=0; i < 99; i++) {
    $("body").append("<div class='round'></div>");

}


$("round").click(function() {
    $(this).toggleClass("whatever");
});


