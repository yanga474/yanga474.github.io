$("body").css("background-color", "yellow");

for (var i=0; i < 504; i++) {
    $("body").append("<div class='dot'></div>");


}

var opacity = 0;

$(".dot").each(function() {
    $(this).css("opacity", opacity/500);
    opacity++;

    opacity++; 
    
});

