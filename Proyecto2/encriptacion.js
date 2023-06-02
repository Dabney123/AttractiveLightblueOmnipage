
document.getElementById("respuesta");
document.getElementById("cifrar").addEventListener("click", function() {
  let respuestas = document.getElementById("respuesta").value.toUpperCase();
  let fecha = document.getElementById("numero").value;
  document.getElementById("respuestafinal").value = cifrar(respuestas, fecha);
});

document.getElementById("descifrar").addEventListener("click", function() {
  let respuestas = document.getElementById("respuesta").value.toUpperCase();
  let fecha = document.getElementById("numero").value;
  document.getElementById("respuestafinal").value = descifrar(respuestas, fecha);
});

function cifrar(respuestas, fecha) {
  let codigo = "";
  let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  fecha = (fecha % 26 + 26) % 26;
  if (fecha === 0) {
    fecha = Math.floor(Math.random() * 25) + 1
  }
  for (let i = 0; i < respuestas.length; i++) {
    let letra = respuestas[i];
    if (letras.includes(letra)) {
      let posicion = letras.indexOf(letra);
      let nuevaPosicion = (posicion + fecha) % 26;
      codigo += letras[nuevaPosicion];
    } else {
      codigo += letra;
    }
  }
  return codigo;
}

function descifrar(respuestas, fecha) {
  let codigo = "";
  let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  fecha = (fecha % 26 + 26) % 26;
  for (let i = 0; i < respuestas.length; i++) {
    let letra = respuestas[i];
    if (letras.includes(letra)) {
      let posicion = letras.indexOf(letra);
      let nuevaPosicion = (posicion - fecha + 26) % 26;
      codigo += letras[nuevaPosicion];
    } else {
      codigo += letra;
    }
  }
  return codigo;
}
