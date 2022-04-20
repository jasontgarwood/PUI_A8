window.onload = function() {
  var waveText = document.getElementById("waveText");
  if (waveText !== null) {
    var waveLetters= waveText.children;
    console.log(waveLetters);

    for (var i = 0; i < waveLetters.length; i++) {
      var currChild = waveLetters[i];
      var delay = i/4;
      currChild.style = "animation-delay:" +delay+ "s;";
    }
  }
}