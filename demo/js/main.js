var audio = document.getElementById("mi-audio");
var boton = document.getElementById("play_and_pause");

function toggleReproduccion() {
    if (audio.paused) {
      audio.play();
      boton.innerHTML = '<img src="img/pausa.png" alt="Botón de pausar">'
    } else {
      audio.pause();
      play.innerHTML = '<img src="img/boton-de-play.png" alt=""></button>'
    }
  }
  
  audio.addEventListener("play", function() {
    boton.innerHTML = '<img src="img/pausa.png" alt="Botón de pausar">'
    
  });
  
  audio.addEventListener("pause", function() {
    boton.innerHTML = '<img src="img/boton-de-play.png" alt=""></button>'
  });


  var image = document.getElementById("my-image");
var playPauseButton = document.getElementById("play-pause-button");

var boton = document.getElementById("play_and_pause");
var imagen = document.getElementById("artista");

boton.addEventListener("click", function() {
  if (imagen.classList.contains("rotating")) {
    imagen.classList.remove("rotating");
  } else {
    imagen.classList.add("rotating");
  }
});