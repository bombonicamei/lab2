window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt) {
  var alpha = evt.alpha;
  var beta = evt.beta;
  var gamma = evt.gamma;

  document.getElementById("a").innerHTML = "Alpha = " + alpha;
  document.getElementById("b").innerHTML = "Beta = " + beta;
  document.getElementById("c").innerHTML = "Gamma = " + gamma;

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var centru = { x: canvas.width / 2, y: canvas.height / 2 };

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#6A0888";

  // Modificăm dimensiunea patratului în funcție de valoarea lui gamma
  var latura_patrat = 50 + gamma; // Modifică acest factor pentru a ajusta dimensiunea
  var x1 = centru.x - latura_patrat / 2;
  var y1 = centru.y - latura_patrat / 2;

  context.fillRect(x1, y1, latura_patrat, latura_patrat);
}
