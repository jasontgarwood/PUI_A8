console.log("working")

$("#navOption").hover( function() {
    console.log('entered');
    $(this).css("color","black");
}, function() {
    console.log('left');
    $(this).css("color","gray");
});

$(".coverPhoto").hover( function() {
    console.log('entered');
    $(this).css("opacity","100%");
}, function() {
    console.log('left');
    $(this).css("opacity","80%");
});
