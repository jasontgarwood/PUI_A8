//create an array objects for each art piece to be shown
let work = [
  {
    "title": "CAUSE CASCADE",
    "img": "img/Cause Cascade.jpg",
    "description": "Inspired by Keller Easterling's Medium Design, this project explores how moving image can harness different cultural references to spark advocative dialogue. Each performance image relies on cultural references to evoke emotions surrounding gender, performance, shame, and permanence. 2021.",
  },
  {
    "title": "DEPTH THROUGH TONE",
    "img": "img/conte.jpg",
    "description": "As a way to understand depth through tone, this project is an exploration with Conte Crayon. The subject is Dinosaur bones from the Carnegie Museum of Natural Science. 2018.",
  },
  {
    "title": "ENVIRONMENT, FORM, AND FEEDBACK",
    "img": "img/ecology.jpg",
    "description": "This project is a living bridge that serves as a public outdoor space while incorporating programmatic elements through the use of interwoven earth berms, effectively connecting the walking experiences of the coast to the scenic 6-mile island. The resultant form incorporates sewer treatment on the shore with sediment collection bays and a public exhibition space nested on the island for education on ecology and environmental ethics. 2020.",
  },
  {
    "title": "NOTHING IS TABOO",
    "img": "img/film.jpg",
    "description": "This exploration questions how forcing the majority to be uncomfortable empowers those who are repressed. Exploring aesthetic transgression and riffing on the cycle of acceptance, the image-heavy film uses a layering of visuals to abstract queer theory surrounding pop culture and that which is labeled ‘taboo.’",
  },
  {
    "title": "PARTICA",
    "img": "img/generative.jpg",
    "description": "Partica is in response to the pandemic. As we long for exploration, this game provides unique spatial experiences and satisfies our desire for reunion. The spatial qualities of each level are increasingly isolating, mirroring the horrific interpersonal conditions caused by COVID-19. The goal of the game is to navigate a complex maze to locate your friend. As you get closer, your character will glow and shift textures. Modeled in Grasshopper, implemented in Unity, designed for VR. 2021.",
  },
  {
    "title": "COMPOSITION OF LIGHT",
    "img": "img/lamp.jpg",
    "description": "Transforming Theo Van Doesburg's contra-construction project into a working lamp. Fabricated with acrylic and aluminum. 2019.",
  },
]

//show the correct detail information based on what the user clicks
function updateDetail() {
  //get index from local storage
  var index = localStorage.getItem("currIndex");
  currObject = work[index]
  //update title, image, and description
  document.getElementById("detailTitle").innerText= currObject.title;
  document.getElementsByClassName("detailPhoto")[0].src= currObject.img;
  document.getElementById("description").innerText= currObject.description;
}

function openDetailPage(index) {
  //save index to loacl storage
  localStorage.setItem("currIndex",index)
  //open detail page
  window.location.href='detail.html';
}

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