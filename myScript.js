console.log("working")
console.log(document.getElementById("waveText"))



var waveText = document.getElementById("waveText");
var waveLetters= waveText.children;



for (var i = 0; i < waveLetters.length; i++) {
  var currChild = waveLetters[i];
  var delay = toString(i/2);
  currChild.style = "animation-delay:" +delay+ "s;";
}





