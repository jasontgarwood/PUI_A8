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


var waveLetters = document.getElementById('waveText').children;


for (var i = 0; i < waveLetters.length; i++) {
  var currChild = waveLetters[i];
  currChild.style = 
  // Do stuff
}





