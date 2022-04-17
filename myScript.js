import Fluid from 'fluid';

const canvas = document.getElementById('renderSurface');
let myFluid = new Fluid(canvas);

myFluid.activate();

//document.body.style.background = 'url(' + c.toDataURL() + ')';